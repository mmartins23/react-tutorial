### ReactJS Tutorial - 26: Pure Components Study Guide (Using `useMemo`)

**Overview**
In this tutorial, we explore Pure Components in React and how to optimize performance using the `useMemo` hook. `useMemo` allows you to memoize values, preventing unnecessary calculations on re-renders.

#### Key Concepts

1. **What are Pure Components?**
   - Pure Components are components that only re-render when their props or state change. This behavior can enhance performance.

2. **Functional Components and Memoization**
   - In functional components, you can use the `useMemo` hook to memoize values or computed results based on dependencies.

#### Code Examples

**Example 1: Using `useMemo` for Memoizing Computed Values**

```jsx
import React, { useState, useMemo } from 'react';

// A functional component that calculates the square of a number
const SquareCalculator = ({ number }) => {
  // Memoize the square calculation
  const squaredValue = useMemo(() => {
    console.log("Calculating square...");
    return number * number;
  }, [number]); // Recalculate only if 'number' changes

  return <p>Square of {number} is {squaredValue}</p>;
};

// Parent component
const App = () => {
  const [number, setNumber] = useState(1);
  const [count, setCount] = useState(0);

  return (
    <div>
      <SquareCalculator number={number} />
      <button onClick={() => setCount(count + 1)}>Increment Count: {count}</button>
      <button onClick={() => setNumber(number + 1)}>Increase Number</button>
    </div>
  );
};

export default App;
```

**Explanation:**
- The `SquareCalculator` component uses `useMemo` to memoize the calculated square of the `number` prop. It only recalculates when `number` changes.
- The "Increment Count" button updates the count without causing the square calculation to re-run, demonstrating efficient rendering.

**Example 2: Using `useMemo` with Object Props**

```jsx
import React, { useState, useMemo } from 'react';

// A functional component that displays user information
const UserInfo = ({ user }) => {
  console.log("Rendering UserInfo Component");
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.age} years old</p>
    </div>
  );
};

// Parent component
const App = () => {
  const [user, setUser] = useState({ name: "Alice", age: 30 });
  const [count, setCount] = useState(0);

  const memoizedUser = useMemo(() => user, [user]); // Memoize user object

  return (
    <div>
      <UserInfo user={memoizedUser} />
      <button onClick={() => setCount(count + 1)}>Increment Count: {count}</button>
      <button onClick={() => setUser(prev => ({ ...prev, age: prev.age + 1 }))}>
        Update User Age
      </button>
    </div>
  );
};

export default App;
```

**Explanation:**
- In this example, the `UserInfo` component receives a memoized user object using `useMemo`. This ensures that the `UserInfo` component only re-renders if the `user` object reference changes.
- The "Increment Count" button does not affect the rendering of `UserInfo`, and updating the age will cause a re-render only if the object reference changes.

**Conclusion**
Using `useMemo` in functional components helps optimize performance by memoizing computed values and preventing unnecessary calculations. It is an effective way to manage performance in React applications, especially when dealing with expensive calculations or large objects.

**Next Steps**
- Experiment with `useMemo` in your components to see how it affects rendering performance.
- Combine `useMemo` with other hooks, such as `useCallback`, to further enhance component performance.