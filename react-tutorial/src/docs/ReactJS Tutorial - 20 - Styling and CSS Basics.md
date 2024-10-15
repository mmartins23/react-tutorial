### ReactJS Tutorial - Styling and CSS Basics: Study Guide

This guide summarizes three key styling methods in ReactJS and introduces a fourth method briefly.

#### 1. **Regular CSS Stylesheets**
   - **Usage**: Create a standard CSS file and apply styles by importing it into the React component.
   - **Steps**:
     1. Create a CSS file (`myStyles.css`).
     2. Define classes in the CSS file (e.g., `.primary { color: orange; }`).
     3. Import the CSS file in the component (`import './myStyles.css'`).
     4. Apply the class using `className` attribute (e.g., `<h1 className="primary">`).
   - **Conditional Styling**:
     - Use props or state to conditionally apply classes using JavaScript.
     - Example:
       ```js
       const className = props.primary ? 'primary' : '';
       ```

   - **Multiple Classes**:
     - Use template literals to apply multiple classes dynamically:
       ```js
       className={`primary ${fontExcel}`}
       ```

#### 2. **Inline Styling**
   - **Usage**: Define styles as a JavaScript object and apply them using the `style` attribute.
   - **Steps**:
     1. Create a style object in JavaScript with camel-cased property names:
        ```js
        const headingStyle = {
          fontSize: '72px',
          color: 'blue'
        };
        ```
     2. Apply the styles using the `style` attribute:
        ```js
        <h1 style={headingStyle}>Inline Styled Heading</h1>
        ```

#### 3. **CSS Modules**
   - **Usage**: CSS modules allow for scoped styling to avoid conflicts between components.
   - **File Naming**: CSS module files must follow the naming convention `filename.module.css`.
   - **Steps**:
     1. Create a CSS module file (e.g., `appStyles.module.css`).
     2. Define classes in the module file (e.g., `.success { color: green; }`).
     3. Import the module in the component:
        ```js
        import styles from './appStyles.module.css';
        ```
     4. Apply the class using the `styles` object:
        ```js
        <h1 className={styles.success}>Success</h1>
        ```

   - **Advantage**: Classes defined in CSS modules are locally scoped to the component, preventing accidental usage in child components, which helps avoid CSS conflicts.

#### 4. **CSS-in-JS (Mentioned)**
   - **Overview**: A fourth approach, CSS-in-JS libraries (like Styled Components), integrates JavaScript and CSS. This was not covered in the video but recommended for more complex styling solutions.

---

### Key Concepts:
1. **ClassName vs className**: In JSX, use `className` instead of `class`.
2. **Camel Case in Inline Styles**: CSS properties are camel-cased in inline styles (e.g., `background-color` becomes `backgroundColor`).
3. **CSS Module Scoping**: CSS modules ensure that class names are scoped locally by default, preventing conflicts across components.

This guide provides the foundational knowledge to apply and manage styles effectively in ReactJS using three primary methods.