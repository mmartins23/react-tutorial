import './App.css'
import Counter from './assets/components/Counter'
import FunctionClick from './assets/components/FunctionClick'
import Greet from './assets/components/Greet'
import Message from './assets/components/Message'
import UserGreeting from './assets/components/UserGreeting'

function App() {

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
      <hr/>
      <UserGreeting/>
    </>
  )
}

export default App
