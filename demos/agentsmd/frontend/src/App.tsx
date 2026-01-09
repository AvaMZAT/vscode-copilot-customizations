import TaskList from './components/TaskList'

const App = () => {
  const tasks = [
    { id: '1', title: 'Write docs' },
    { id: '2', title: 'Review PR' }
  ]

  return (
    <main style={{ padding: 16 }}>
      <h1>Agents.md Demo</h1>
      <TaskList tasks={tasks} />
    </main>
  )
}

export default App
