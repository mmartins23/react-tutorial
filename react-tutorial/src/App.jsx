import './App.css'
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
    </>
  )
}

export default App
