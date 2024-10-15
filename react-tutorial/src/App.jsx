import './App.css';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import Greet from './components/Greet';
import Message from './components/Message';
import PersonList from './components/PersonList';
import UserGreeting from './components/UserGreeting';
import StyleSheet from './components/StyleSheet';
import Inline from './components/Inline';
import styles from './components/appStyles.module.css';
import './components/appStyles.css'; 

function App() {
  const isPrimary = true; // you can change this to `false` to see the effect
  const className = isPrimary ? 'primary' : '';
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
    </>
  );
}

export default App;
