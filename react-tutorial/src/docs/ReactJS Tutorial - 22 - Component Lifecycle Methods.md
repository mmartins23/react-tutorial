### ReactJS Component Lifecycle Methods (Class to Functional Components using Hooks)

In React, component lifecycle methods manage different stages of a component’s life (creation, updates, and destruction). In class components, React provides various lifecycle methods. However, with the introduction of **Hooks** in React, functional components can also handle lifecycle stages using the `useEffect` hook. This guide focuses on the key lifecycle phases (Mounting, Updating, Unmounting, and Error Handling) using **functional components**.

#### Lifecycle Stages in Functional Components:
1. **Mounting**: When a component is created and inserted into the DOM.
2. **Updating**: When a component’s state or props change, causing a re-render.
3. **Unmounting**: When a component is removed from the DOM.
4. **Error Handling**: When there’s an error during rendering or within lifecycle methods.

---

### 1. **Mounting** (Equivalent in Functional Components)

**Class Component Methods**:
- `constructor()`
- `static getDerivedStateFromProps()`
- `render()`
- `componentDidMount()`

**Functional Component Equivalent**:  
In functional components, the mounting phase is primarily handled by the `useEffect` hook.

```jsx
import { useState, useEffect } from 'react';

function MyComponent() {
  const [data, setData] = useState(null);

  // Equivalent to componentDidMount
  useEffect(() => {
    // API call or any setup logic after the component mounts
    fetchData();

    // Return function for cleanup during unmount (optional)
    return () => {
      console.log('Component is being unmounted');
    };
  }, []); // Empty dependency array ensures this runs only on mount

  const fetchData = async () => {
    const result = await fetch('https://api.example.com/data');
    setData(await result.json());
  };

  return <div>{data ? <p>{data.title}</p> : <p>Loading...</p>}</div>;
}
```

- `useEffect(() => {}, [])`: Runs once when the component is mounted (similar to `componentDidMount`).
- **Example usage**: API calls, setting up subscriptions, or timers.

---

### 2. **Updating** (Props or State Changes)

**Class Component Methods**:
- `static getDerivedStateFromProps()`
- `shouldComponentUpdate()`
- `render()`
- `getSnapshotBeforeUpdate()`
- `componentDidUpdate()`

**Functional Component Equivalent**:  
In functional components, updates can be handled using the `useEffect` hook and conditional logic.

```jsx
import { useState, useEffect } from 'react';

function MyComponent({ someProp }) {
  const [count, setCount] = useState(0);

  // Re-runs on every update (state or props change)
  useEffect(() => {
    console.log('Component updated');
  });

  // Similar to componentDidUpdate for specific state or prop changes
  useEffect(() => {
    console.log('someProp has changed:', someProp);
  }, [someProp]); // Dependency array triggers effect on specific updates

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

- **Key Points**:
  - `useEffect(() => {}, [dependencies])`: Runs when the listed dependencies (like `someProp`) change.
  - Useful for operations after re-render, like fetching data or manipulating the DOM.
  - Replaces `componentDidUpdate` and `shouldComponentUpdate`.

---

### 3. **Unmounting**

**Class Component Method**:
- `componentWillUnmount()`

**Functional Component Equivalent**:  
In functional components, cleanup can be handled using the `return` statement inside `useEffect`.

```jsx
import { useState, useEffect } from 'react';

function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('Interval running');
    }, 1000);

    // Cleanup when component unmounts (similar to componentWillUnmount)
    return () => {
      clearInterval(interval);
      console.log('Component unmounted and interval cleared');
    };
  }, []); // Empty array ensures this runs once on mount and cleanup on unmount

  return <div>Check console for interval logs</div>;
}
```

- **Key Point**: `useEffect` returns a function that acts as cleanup (runs when the component is unmounted).
- Useful for removing timers, event listeners, or cancelling API requests.

---

### 4. **Error Handling**

**Class Component Methods**:
- `static getDerivedStateFromError()`
- `componentDidCatch()`

**Functional Component Equivalent**:  
Functional components do not have a direct hook equivalent for error boundaries. You must wrap components in a **class-based error boundary**. However, you can still use `useEffect` for certain types of error handling (like API call errors).

```jsx
import { useState, useEffect } from 'react';

function MyComponent() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then((response) => response.json())
      .then(setData)
      .catch(setError); // Handle API fetch error
  }, []);

  if (error) return <p>Error occurred: {error.message}</p>;

  return <div>{data ? <p>{data.title}</p> : <p>Loading...</p>}</div>;
}
```

- **Key Point**: Use `useState` and `useEffect` to handle errors in data fetching or side effects, but for **rendering errors**, a class-based error boundary is still required.

---

### Summary of Lifecycle Methods in Functional Components:

| Class Method                   | Functional Component Equivalent (Hooks)   |
| ------------------------------ | ----------------------------------------- |
| `componentDidMount()`           | `useEffect(() => {}, [])`                 |
| `componentDidUpdate()`          | `useEffect(() => {}, [dependencies])`     |
| `componentWillUnmount()`        | `useEffect(() => { return () => {...} }, [])` |
| `getDerivedStateFromProps()`    | Managed with `useState` and `useEffect`   |
| `componentDidCatch()`, `getDerivedStateFromError()` | Error boundaries (class-based) |

---

By using **Hooks** like `useEffect`, functional components can handle lifecycle events cleanly and efficiently without the need for class-based components.