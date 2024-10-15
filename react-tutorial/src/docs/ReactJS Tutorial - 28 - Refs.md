### ReactJS Tutorial - Refs (useRef)

#### Summary:
Refs in React are used to access and interact with DOM elements directly or to store any mutable value that does not trigger a re-render when changed. They can be created using the `useRef` hook in functional components.

`useRef` returns an object with a `current` property that holds the reference to the DOM element or value. It is commonly used when:
1. You need to manipulate DOM elements directly (e.g., focusing an input).
2. Storing values that should persist across renders without causing re-renders.

#### Code Example:

```jsx
import React, { useRef, useState } from 'react';

const App = () => {
  const inputRef = useRef(null); // Creating a ref for the input element
  const [text, setText] = useState('');

  // Function to focus on the input field using the ref
  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      {/* Input element with ref */}
      <input 
        ref={inputRef} 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Type something..."
      />

      {/* Button to focus on the input element */}
      <button onClick={focusInput}>Focus Input</button>

      <p>Typed Text: {text}</p>
    </div>
  );
};

export default App;
```

#### Explanation:
1. **useRef Creation**: The `inputRef` is created using `useRef(null)`. Initially, its `current` property is set to `null` until the input element is mounted.
2. **Ref in Input Element**: The `ref={inputRef}` attaches the `inputRef` to the input element, meaning `inputRef.current` will now refer to the actual DOM element.
3. **Direct DOM Interaction**: The `focusInput` function uses `inputRef.current.focus()` to programmatically focus on the input field when the button is clicked. This is a common use case for `useRef`.
4. **No Re-Renders**: Updating `inputRef.current` does not cause a component re-render, making it efficient for DOM manipulations or storing values that don't need to trigger updates.

#### Practical Uses of Refs:
- **Managing Focus**: Setting focus on input fields.
- **Triggering Animations**: Using DOM elements in animation libraries.
- **Storing Previous Values**: Using refs to track previous values across renders without causing a re-render.

This basic guide explains how to use refs in React, focusing on common scenarios like manipulating DOM elements directly.