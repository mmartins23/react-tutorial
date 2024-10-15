import './App.css';
import './components/appStyles.css'; 
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import Greet from './components/Greet';
import Message from './components/Message';
import PersonList from './components/PersonList';
import UserGreeting from './components/UserGreeting';
import StyleSheet from './components/StyleSheet';
import Inline from './components/Inline';
import styles from './components/appStyles.module.css';
import FormComponent from './components/FormComponent';
import FormComponent2 from './components/FormComponent2';
import FormComponent3 from './components/FormComponent3';
import FormComponent4 from './components/FormComponent4';
import MyComponent from './components/MyComponent';
import FragmentDemo from './components/FragmentDemo';
import SquareCalculator from './components/SquareCalculator';
import { useState } from 'react';

function App() {
  const isPrimary = true; // you can change this to `false` to see the effect
  const className = isPrimary ? 'primary' : '';

  const [number, setNumber] = useState(1);
  const [count, setCount] = useState(0);
  return (
    <>
      <h2>Props</h2>
      <hr />
      <Greet name="Bruce" heroName="Batman" />
      <Greet name="Clark" heroName="Superman" />
      <Greet name="Diana" heroName="Wonder Woman" />
      <h2>State</h2>
      <hr />
      <Message />
      <h2>useState</h2>
      <hr />
      <Counter />
      <h2>Event Handling</h2>
      <hr />
      <FunctionClick />
      <h2>Conditional Rendering</h2>
      <hr />
      <UserGreeting />
      <h2>List Rendering</h2>
      <hr />
      <PersonList />
      <h2>Styling and CSS Basics</h2>
      <hr/>
      <StyleSheet className={className}/>
      <Inline/>
      <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1>
      <h2>Basics of Form Handling</h2>
      <hr/>
      <FormComponent/>
      <FormComponent2/>
      <FormComponent3/>
      <FormComponent4/>
      <h2>Component Lifecycle Methods</h2>
      <hr/>
      <MyComponent/>
      <h2>React Fragment</h2>
      <hr/>
      <FragmentDemo/>
      <h2>Pure Components</h2>
      <hr/>
      <SquareCalculator number={number} />
      <button onClick={() => setCount(count + 1)}>Increment Count: {count}</button>
      <button onClick={() => setNumber(number + 1)}>Increase Number</button>
    </>
  );
}

export default App;
