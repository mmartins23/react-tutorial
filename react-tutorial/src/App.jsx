import './App.css'
import Counter from './assets/components/Counter'
import Greet from './assets/components/Greet'
import Message from './assets/components/Message'

function App() {

  return (
    <>
      <h2>Props</h2>
      <hr/>
      <Greet name="Bruce" heroName="Batman" />
      <Greet name="Clark" heroName="Superman" />
      <Greet name="Diana" heroName="Wonder Woman" />
      <h2>State</h2>
      <hr/>
      <Message/>
      <h2>useState</h2>
      <hr/>
      <Counter/>
    </>
  )
}

export default App
