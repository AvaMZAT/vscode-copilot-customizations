import { render, screen } from '@testing-library/react'
import Status from './Status'

describe('Status', () => {
  test('shows green message when ok', () => {
    // Arrange
    render(<Status ok />)

    // Act & Assert
    const region = screen.getByLabelText('status')
    expect(region).toBeInTheDocument()
    expect(screen.getByText('All checks green')).toBeInTheDocument()
  })

  test('shows pending message when not ok', () => {
    // Arrange
    render(<Status />)

    // Act & Assert
    expect(screen.getByText('Checks pending')).toBeInTheDocument()
  })
})
