### **Context API in React - Documentation Study Guide**

The **Context API** in React allows you to share data globally across your components without passing props down through every level of the component tree. It's particularly useful when you need to share state or functionality across many components.

---

### **Concept Overview:**

- **Context API** creates a global state that can be accessed by any component in your application.
- It helps avoid **prop drilling**, which is when you pass props through several levels of components, even if only a deep component needs the value.
  
### **Key Components of Context API:**
1. **Context Object**: Created using `React.createContext()`, it provides two components:
   - **Provider**: Supplies data (the context value) to the components that need it.
   - **Consumer**: Allows components to access the context value. (Or use `useContext()` in functional components.)

---

### **Step-by-Step Explanation with Code Example:**

Let's walk through the implementation of the **Context API** with an example that shares a user's information (name) across components.

### **Step 1: Create a Context**
First, create the context using `React.createContext()`. This is where we define the context for the global data.

```jsx
import React, { createContext, useState } from 'react';

// Create a Context object
const UserContext = createContext();

// Export the context for use in other components
export default UserContext;
```

---

### **Step 2: Create a Provider Component**
The **Provider** component wraps around any components that need access to the global data. It provides the context value (like user info) to all the children components.

```jsx
import React, { useState } from 'react';
import UserContext from './UserContext';

const UserProvider = ({ children }) => {
  const [user, setUser] = useState('Tony Stark');

  return (
    // Use the Provider component to pass the current value of user
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
```

- **`UserProvider`**: This is the component that will wrap around other components in the app. It provides the value (in this case, `user`) to the components that consume the context.

---

### **Step 3: Use the Context Value in Child Components**
Next, we consume the value of `UserContext` in any component where it's needed. For this, we'll use the **`useContext`** hook in functional components.

```jsx
import React, { useContext } from 'react';
import UserContext from './UserContext';

const UserProfile = () => {
  const user = useContext(UserContext); // Access the context value

  return <h2>User: {user}</h2>;
};

export default UserProfile;
```

- **`useContext(UserContext)`**: This hook is used to access the `user` value from the `UserContext` inside the `UserProfile` component.

---

### **Step 4: Wrap Components with the Provider**
Finally, in the main app component, wrap the components that need access to the context inside the **`UserProvider`**.

```jsx
import React from 'react';
import UserProvider from './UserProvider';
import UserProfile from './UserProfile';

const App = () => {
  return (
    <UserProvider>
      <div className="App">
        <h1>Context API Example</h1>
        <UserProfile />
      </div>
    </UserProvider>
  );
};

export default App;
```

- The **`UserProvider`** wraps the `UserProfile`, so it can access the `user` data through the context.

---

### **Summary of Steps:**

1. **Create Context**: Use `createContext()` to create a new context for the data you want to share globally.
2. **Create Provider**: Build a `Provider` component that holds the context value and passes it down to all its children using the `Provider` component.
3. **Consume Context**: Use `useContext()` in child components to access the shared data.
4. **Wrap Components**: Wrap your components with the `Provider` to allow them to access the global context.

---

### **Full Example Code:**

1. **UserContext.js**
```jsx
import { createContext } from 'react';

// Create a context object
const UserContext = createContext();

export default UserContext;
```

2. **UserProvider.js**
```jsx
import React, { useState } from 'react';
import UserContext from './UserContext';

const UserProvider = ({ children }) => {
  const [user, setUser] = useState('Tony Stark');

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
```

3. **UserProfile.js**
```jsx
import React, { useContext } from 'react';
import UserContext from './UserContext';

const UserProfile = () => {
  const user = useContext(UserContext);

  return <h2>User: {user}</h2>;
};

export default UserProfile;
```

4. **App.js**
```jsx
import React from 'react';
import UserProvider from './UserProvider';
import UserProfile from './UserProfile';

const App = () => {
  return (
    <UserProvider>
      <div className="App">
        <h1>Context API Example</h1>
        <UserProfile />
      </div>
    </UserProvider>
  );
};

export default App;
```

---

### **Advantages of Context API:**
1. **Avoids Prop Drilling**: No need to pass props through many layers of components.
2. **Global State Management**: Helps share data or functions across multiple components easily.
3. **Simple to Implement**: Requires minimal setup compared to more complex state management libraries like Redux.

---

### **When to Use Context API?**
- When you have data that needs to be accessed by many components at different levels.
- To avoid excessive passing of props down the component tree.
- When building an app with themes, authentication, or language preferences.