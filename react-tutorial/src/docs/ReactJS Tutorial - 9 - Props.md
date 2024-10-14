### ReactJS Tutorial - 9 - Props (Study Guide for Functional Components)

#### Introduction to Props
- **Components are reusable**: You can create a component and use it multiple times in your application.
- To enhance reusability, **props (short for properties)** allow components to be **dynamic** by passing in different values.
  
#### Passing Props to Functional Components
1. **Declaring Props**:  
   Props are passed to a component like HTML attributes. For example:
   ```jsx
   <Greet name="Bruce" />
   <Greet name="Clark" />
   <Greet name="Diana" />
   ```
   Here, the `name` prop is passed to the `Greet` component.

2. **Receiving Props**:  
   In functional components, props are passed as a parameter:
   ```jsx
   const Greet = (props) => {
       return <h1>Hello {props.name}</h1>;
   };
   ```
   The `props` object contains the data passed from the parent component.

3. **JSX Expressions and Curly Braces**:  
   When rendering dynamic content (like `props.name`), wrap it in **curly braces** within the JSX. This tells React to evaluate the expression:
   ```jsx
   <h1>Hello {props.name}</h1>
   ```

#### Adding Multiple Props
You can pass multiple props by adding more attributes:
```jsx
<Greet name="Bruce" heroName="Batman" />
<Greet name="Clark" heroName="Superman" />
<Greet name="Diana" heroName="Wonder Woman" />
```
In the component:
```jsx
const Greet = (props) => {
    return <h1>Hello {props.name}, aka {props.heroName}</h1>;
};
```

#### `props.children`
If dynamic content needs to be passed between the opening and closing component tags:
```jsx
<Greet name="Bruce">This is children props</Greet>
```
You can access the content with `props.children` inside the component:
```jsx
const Greet = (props) => {
    return (
        <div>
            <h1>Hello {props.name}</h1>
            <p>{props.children}</p>
        </div>
    );
};
```
- You must **wrap multiple JSX elements** inside a single enclosing element like a `<div>`.

#### Key Points About Props:
- **Props are immutable**: Once passed to a component, **you cannot change them**. Any attempt to modify `props` will throw an error.
- **Props in React are essential for making components reusable and dynamic**, allowing for flexibility when building applications.

This concludes the guide on props. In the next video, the focus will shift to maintaining **component data that might change over time** using **state**.