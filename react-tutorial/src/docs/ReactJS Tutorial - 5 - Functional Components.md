### ReactJS Tutorial - 5 - Functional Components (Study Guide)

#### Functional Components Overview:
- **Definition**: Functional components are JavaScript functions that receive an object of properties (props) and return HTML (JSX) that describes the UI.
- **Key Point**: The HTML returned by functional components is actually JSX, which is a syntax extension for writing HTML-like code in JavaScript.

#### Creating a Functional Component:
1. **Create a Folder**: Inside your project, create a `components` folder.
2. **Create a Component File**: In the folder, create a file using PascalCase naming convention, like `Greet.js`.
3. **Write the Component**:
   - **Import React**: Always start by importing React.
   - **Define the Function**: Create a function (e.g., `function Greet()`) that returns JSX (HTML-like code). 
     ```javascript
     import React from 'react';

     function Greet() {
       return <h1>Hello Vishwas</h1>;
     }

     export default Greet;
     ```

4. **Export the Component**: Use `export default Greet` to make the component accessible from other files.

#### Using the Functional Component:
1. **Import the Component**: In another file, like `App.js`, import the `Greet` component.
   ```javascript
   import Greet from './components/Greet';
   ```
2. **Use in JSX**: In the `App.js` file, include the component in the render function using a custom HTML tag.
   ```javascript
   function App() {
     return (
       <div>
         <Greet />
       </div>
     );
   }

   export default App;
   ```

3. **Self-closing Tags**: If the component doesn’t contain any children, you can use a self-closing tag:
   ```javascript
   <Greet />
   ```

#### ES6 Arrow Functions:
- **Syntax**: You can also define functional components using ES6 arrow functions, which offer a concise syntax and other benefits.
   ```javascript
   const Greet = () => <h1>Hello Vishwas</h1>;
   export default Greet;
   ```
- **Advantage**: Arrow functions offer a cleaner syntax and additional benefits, especially when handling `this` context, which will be covered later in the course.

#### Default vs Named Exports:
- **Default Export**:
  - **Example**: `export default Greet;`
  - You can import the component with any name:
    ```javascript
    import MyComponent from './components/Greet';
    ```
- **Named Export**:
  - **Example**: `export const Greet = () => <h1>Hello Vishwas</h1>;`
  - You must import it using the exact name:
    ```javascript
    import { Greet } from './components/Greet';
    ```

#### Summary:
- Functional components are simple JavaScript functions that return JSX (HTML-like structure).
- Use **default exports** for most cases, but understand **named exports** for specific scenarios.
- Arrow functions (`=>`) are the preferred syntax for defining functional components in modern React.

#### Next Steps:
- The next video will cover **Class Components** in React, which introduce state management and more complex functionality.