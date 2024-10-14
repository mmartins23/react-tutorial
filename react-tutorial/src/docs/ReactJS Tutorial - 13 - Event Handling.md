### ReactJS Tutorial - 13: Event Handling (Functional Components)

#### 1. **Introduction to Event Handling**
Event handling is crucial for user interaction in web applications. Common events include:
- Mouse clicks
- Key presses
- Change events (e.g., form inputs)

In this guide, we focus on **click events** within functional components, though the concepts apply to other event types as well.

---

### 2. **Creating a Click Event in a Functional Component**

Let's go through the steps to handle a click event:

1. **Create the Functional Component**:
   Create a new functional component (e.g., `FunctionClick.js`).

2. **Add a Button in JSX**:
   In the component, add a button with the label `Click`.

```jsx
function FunctionClick() {
  return (
    <div>
      <button>Click</button>
    </div>
  );
}
```

3. **Add the Component to the Main App**:
   Import and use the `FunctionClick` component in your `App.js` file.

```jsx
import FunctionClick from './FunctionClick';

function App() {
  return (
    <div className="App">
      <FunctionClick />
    </div>
  );
}
```

---

### 3. **Setting up the Event Handler**

React events differ slightly from vanilla JavaScript. Here’s what you need to know:

#### **Naming Convention**:
- In React, event names use **camelCase** (e.g., `onClick`) instead of lowercase (`onclick` in HTML).

#### **Passing a Function as the Event Handler**:
- Instead of using a string as in vanilla JavaScript (`"clickHandler"`), you pass a **function reference** within curly braces (`{clickHandler}`).

#### **Example**:

```jsx
function FunctionClick() {
  function clickHandler() {
    console.log('Button clicked');
  }

  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
}
```

**Explanation**:
- `onClick={clickHandler}` passes the `clickHandler` function as a reference, not a function call.
- The `clickHandler` function logs "Button clicked" to the console when the button is pressed.

---

### 4. **Avoid Common Mistakes**

#### **Do Not Call the Handler Directly**:
- **Incorrect**: `onClick={clickHandler()}`. This immediately invokes the function, causing the event to trigger before the user interacts with the button.

#### **Correct Syntax**:
- **Correct**: `onClick={clickHandler}`. This passes the function without invoking it, ensuring it runs only when the button is clicked.

**Common Pitfall**:
- If you mistakenly call the function, you'll see the console message immediately after the page loads, instead of after a user click.

---

### 5. **Best Practices for Event Handling**

- **Use camelCase for event names**: React follows a consistent camelCase convention for event attributes.
- **Always pass a function reference**: Never invoke the function within the event handler.
  
---

### 6. **Conclusion**
Event handling in functional components is straightforward: you create a function that handles the event, and you assign this function to an event attribute (e.g., `onClick`). Remember to avoid common mistakes, such as calling the handler directly, and follow React’s camelCase naming convention for event attributes.