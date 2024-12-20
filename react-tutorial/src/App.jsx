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
import { useState, useMemo, useRef } from 'react';
import UserProvider from './components/UserProvider';
import UserProfile from './components/UserProfile';

function App() {
  const isPrimary = true; // you can change this to `false` to see the effect
  const className = isPrimary ? 'primary' : '';

  const [number, setNumber] = useState(1);
  const [count, setCount] = useState(0);

  const [count1, setCount1] = useState(0);
  const [text, setText] = useState('');

  // A simple calculation that doubles the count
  const doubleCount = useMemo(() => {
    console.log("Calculating double count...");
    return count1 * 2;
  }, [count1]);  // Recalculates only when `count` changes

  const inputRef = useRef(null); // Creating a ref for the input element
  const [text1, setText1] = useState('');

  // Function to focus on the input field using the ref
  const focusInput = () => {
    inputRef.current.focus();
  };


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
      <h2>useMemo</h2>
      <hr/>
      <div>
      <h2>Double Count: {doubleCount}</h2>

      {/* Button to increase the count */}
      <button onClick={() => setCount1(count1 + 1)}>Increment Count</button>
      
      {/* Input field to change text */}
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Type something..."
      />
      
      <p>Typed Text: {text}</p>
    </div>
    <h2>useRef</h2>
    <hr/>
    <div>
      {/* Input element with ref */}
      <input 
        ref={inputRef} 
        type="text" 
        value={text1} 
        onChange={(e) => setText1(e.target.value)} 
        placeholder="Type something..."
      />

      {/* Button to focus on the input element */}
      <button onClick={focusInput}>Focus Input</button>

      <p>Typed Text: {text1}</p>
    </div>
    <UserProvider>
      <div className="App">
        <h1>Context API Example</h1>
        <hr/>
        <UserProfile />
      </div>
    </UserProvider>
    </>
  );
}

export default App;
