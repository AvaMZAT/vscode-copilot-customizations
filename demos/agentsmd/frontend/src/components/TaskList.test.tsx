import { render, screen, fireEvent } from '@testing-library/react'
import TaskList from './TaskList'

const sampleTasks = [
  { id: '1', title: 'Write docs', priority: false },
  { id: '2', title: 'Review PR', priority: true }
]

test('renders tasks and priority flag', () => {
  render(<TaskList tasks={sampleTasks} />)
  expect(screen.getByText('Write docs')).toBeInTheDocument()
  expect(screen.getByText('Review PR')).toBeInTheDocument()
  expect(screen.getAllByLabelText('priority-flag')).toHaveLength(1)
})

test('toggles priority flag', () => {
  render(<TaskList tasks={sampleTasks} />)
  const toggleButton = screen.getAllByRole('button', { name: /priority/i })[0]
  fireEvent.click(toggleButton)
  expect(screen.getAllByLabelText('priority-flag')).toHaveLength(2)
})
