import { render, screen } from '@testing-library/react'
import Calculator from './Calculator'

test('renders calculator', () => {
  render(<Calculator />)
  expect(screen.getByText('Calculator')).toBeInTheDocument()
})
