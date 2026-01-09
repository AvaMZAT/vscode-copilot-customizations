type Task = {
  id: string
  title: string
}

type Props = {
  tasks: Task[]
}

const TaskList = ({ tasks }: Props) => {
  return (
    <ul aria-label='tasks'>
      {tasks.map((task) => (
        <li key={task.id}>
          <span>{task.title}</span>
        </li>
      ))}
    </ul>
  )
}

export default TaskList
