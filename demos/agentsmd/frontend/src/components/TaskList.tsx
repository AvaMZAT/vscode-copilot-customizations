import { useState } from 'react'

type Task = {
  id: string
  title: string
  priority: boolean
}

type Props = {
  tasks: Task[]
}

const TaskList = ({ tasks }: Props) => {
  const [localTasks, setLocalTasks] = useState<Task[]>(() => tasks)

  const toggleLabel = (priority: boolean) => (priority ? 'Unmark priority' : 'Mark priority')

  const handleToggle = (id: string) => {
    setLocalTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, priority: !task.priority } : task))
    )
  }

  return (
    <ul aria-label='tasks'>
      {localTasks.map((task) => (
        <li key={task.id} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <span>{task.title}</span>
          {task.priority && <span aria-label='priority-flag'>🔥</span>}
          <button type='button' onClick={() => handleToggle(task.id)}>
            {toggleLabel(task.priority)}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default TaskList
