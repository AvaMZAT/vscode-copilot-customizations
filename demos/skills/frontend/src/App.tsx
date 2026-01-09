import Status from './components/Status'

const App = () => {
  return (
    <main style={{ padding: 16 }}>
      <h1>Agent Skills Demo</h1>
      <p>Use run-quality-gates skill to validate the project</p>
      <Status ok />
    </main>
  )
}

export default App
