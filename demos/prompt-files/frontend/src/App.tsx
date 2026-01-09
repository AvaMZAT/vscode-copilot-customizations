import Greeting from './components/Greeting'

const App = () => {
  return (
    <main style={{ padding: 16 }}>
      <h1>Prompt Files Demo</h1>
      <p>Use slash-commands to explain code and generate tests</p>
      <Greeting name='Ada' />
    </main>
  )
}

export default App
