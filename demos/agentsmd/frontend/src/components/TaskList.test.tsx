import { render, screen } from '@testing-library/react'
import TaskList from './TaskList'

const sampleTasks = [
  { id: '1', title: 'Write docs' },
  { id: '2', title: 'Review PR' }
]

test('renders tasks', () => {
  render(<TaskList tasks={sampleTasks} />)
  expect(screen.getByText('Write docs')).toBeInTheDocument()
  expect(screen.getByText('Review PR')).toBeInTheDocument()
})
