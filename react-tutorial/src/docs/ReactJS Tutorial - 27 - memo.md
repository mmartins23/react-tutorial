### ReactJS Tutorial - 27: `useMemo` Study Guide

**Overview**
`useMemo` is a React hook used to memoize the result of a computation, so it only re-runs when its dependencies change. It optimizes performance by avoiding expensive calculations on every render unless necessary.

#### Key Concepts

1. **What is `useMemo`?**
   - `useMemo` returns a memoized value, preventing the recalculation of a function's return value unless one of its dependencies changes.
   - It’s useful for expensive computations or when a component receives props that don’t change frequently.

2. **When to Use `useMemo`?**
   - When there’s a function or computation in your component that doesn’t need to re-run unless specific values (dependencies) change.
   - Helps prevent unnecessary re-renders or recalculations, improving performance.

#### Syntax

```jsx
const memoizedValue = useMemo(() => {
  // computation or function result
}, [dependencies]);
```

- `useMemo` takes two arguments:
  - A function that returns a computed value.
  - A dependency array that controls when the function should re-run.

#### Code Example

**Example 1: Memoizing an Expensive Calculation**

```jsx
import React, { useState, useMemo } from 'react';

// Function to simulate an expensive calculation
const expensiveCalculation = (num) => {
  console.log("Running expensive calculation...");
  for (let i = 0; i < 1000000000; i++) {} // Simulating a delay
  return num * 2;
};

const App = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(10);

  // Memoize the result of the expensive calculation
  const memoizedValue = useMemo(() => expensiveCalculation(number), [number]);

  return (
    <div>
      <h2>Expensive Calculation Result: {memoizedValue}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increment Count: {count}
      </button>
      <button onClick={() => setNumber(number + 1)}>
        Increase Number: {number}
      </button>
    </div>
  );
};

export default App;
```

**Explanation:**
- **Expensive Calculation**: The `expensiveCalculation` function is deliberately slow to simulate a heavy computation.
- **useMemo Usage**: The `useMemo` hook memoizes the result of `expensiveCalculation`. The function only re-runs when `number` changes, preventing it from recalculating every time the component re-renders (e.g., when clicking the "Increment Count" button).
- **Dependencies**: The `[number]` dependency ensures that the calculation is only re-triggered when `number` changes, not when `count` changes.

#### Benefits of `useMemo`
- **Performance Optimization**: By memoizing values, you prevent expensive recalculations on every render.
- **Reduced Re-renders**: Helps in scenarios where rendering performance is crucial, especially with large datasets or complex logic.

#### When Not to Use `useMemo`
- Avoid overusing `useMemo` as it adds complexity and memory overhead. Use it when you have actual performance bottlenecks or heavy calculations that don’t need to run on every render.

#### Conclusion
`useMemo` is a powerful tool for optimizing React applications, particularly when dealing with expensive computations. Use it wisely to improve performance and avoid unnecessary recalculations.

***

Here's a simpler example to understand how `useMemo` works:

### Simple `useMemo` Example: Avoiding Unnecessary Recalculations

```jsx
import React, { useState, useMemo } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // A simple calculation that doubles the count
  const doubleCount = useMemo(() => {
    console.log("Calculating double count...");
    return count * 2;
  }, [count]);  // Recalculates only when `count` changes

  return (
    <div>
      <h2>Double Count: {doubleCount}</h2>

      {/* Button to increase the count */}
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      
      {/* Input field to change text */}
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Type something..."
      />
      
      <p>Typed Text: {text}</p>
    </div>
  );
};

export default App;
```

### Explanation:
1. **Double Count Calculation**: The `useMemo` hook is used to memoize the result of `count * 2`. It will only re-run when the `count` changes.
2. **Avoids Unnecessary Recalculations**: If you type something in the input field, the component re-renders, but the `useMemo` prevents the double count calculation from re-running unnecessarily.
3. **Dependency**: The `[count]` dependency ensures the memoized value (`doubleCount`) only updates when `count` changes.

This example is easy to grasp and illustrates how `useMemo` helps optimize simple calculations in your component.