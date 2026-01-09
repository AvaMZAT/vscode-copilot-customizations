import TaskList from './components/TaskList'

const App = () => {
  const tasks = [
    { id: '1', title: 'Write docs', priority: false },
    { id: '2', title: 'Review PR', priority: true }
  ]

  return (
    <main style={{ padding: 16 }}>
      <h1>Agents.md Demo</h1>
      <p>Manage tasks and toggle their priority flag.</p>
      <TaskList tasks={tasks} />
    </main>
  )
}

export default App
