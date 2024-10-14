### ReactJS - Conditional Rendering Study Guide (Functional Components)

In React, conditional rendering is a common need, allowing you to show or hide elements based on specific conditions, much like how conditions work in regular JavaScript. There are four main approaches for conditionally rendering content in React: **if-else statements**, **element variables**, **ternary operators**, and **short-circuit operators**. Here's how you can apply each method using **functional components**:

---

### 1. **Using `if-else` Statements**
In functional components, you cannot directly use `if-else` inside JSX, but you can handle the logic outside of the return statement.

```jsx
function UserGreeting() {
  const isLoggedIn = false;

  if (isLoggedIn) {
    return <div>Welcome, Vishwas!</div>;
  } else {
    return <div>Welcome, Guest!</div>;
  }
}
```

Here, the `if-else` condition is placed **outside the JSX** and evaluates before rendering. This approach is clear but makes the code less concise.

---

### 2. **Using Element Variables**
With element variables, you can store JSX elements in a variable and render them conditionally.

```jsx
function UserGreeting() {
  const isLoggedIn = false;
  let message;

  if (isLoggedIn) {
    message = <div>Welcome, Vishwas!</div>;
  } else {
    message = <div>Welcome, Guest!</div>;
  }

  return <div>{message}</div>;
}
```

This approach reduces repetition and makes the code more modular by assigning JSX elements to the `message` variable based on the condition.

---

### 3. **Using the Ternary Operator**
The ternary operator allows for **inline conditional rendering** and can be placed directly inside the JSX.

```jsx
function UserGreeting() {
  const isLoggedIn = false;

  return (
    <div>
      {isLoggedIn ? <div>Welcome, Vishwas!</div> : <div>Welcome, Guest!</div>}
    </div>
  );
}
```

The ternary operator is concise and is commonly used for **simple conditions**. If `isLoggedIn` is true, "Welcome, Vishwas!" is rendered; otherwise, "Welcome, Guest!" is displayed.

---

### 4. **Using the Short-Circuit Operator**
The short-circuit operator (`&&`) is useful when you want to **conditionally render something or render nothing**.

```jsx
function UserGreeting() {
  const isLoggedIn = true;

  return (
    <div>
      {isLoggedIn && <div>Welcome, Vishwas!</div>}
    </div>
  );
}
```

In this example, if `isLoggedIn` is true, "Welcome, Vishwas!" is rendered. If `isLoggedIn` is false, **nothing** is rendered, making this approach ideal for situations where one condition doesn't need an alternative render.

---

### Summary:
- **If-else Statements**: Clear, but less concise and requires logic outside JSX.
- **Element Variables**: Helps reduce code repetition and is cleaner than `if-else`.
- **Ternary Operator**: Best for inline conditional rendering, keeping code compact and readable.
- **Short-Circuit Operator**: Ideal when you only need to render something or nothing based on a condition.

For **functional components**, the **ternary operator** and **short-circuit operator** are often the most efficient and cleanest options, as they keep JSX concise and are more readable.