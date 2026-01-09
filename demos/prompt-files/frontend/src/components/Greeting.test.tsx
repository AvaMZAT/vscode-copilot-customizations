import { render, screen } from '@testing-library/react'
import Greeting from './Greeting'

test('renders greeting with name', () => {
  // Arrange
  render(<Greeting name='Ada' />)

  // Act
  const greeting = screen.getByLabelText('greeting')

  // Assert
  expect(greeting).toBeInTheDocument()
  expect(screen.getByText('Hello, Ada!')).toBeInTheDocument()
})
