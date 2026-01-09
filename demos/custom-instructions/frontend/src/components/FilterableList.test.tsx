import { render, screen } from '@testing-library/react'
import FilterableList from './FilterableList'

test('renders all items by default', () => {
  render(<FilterableList items={['Alpha', 'Beta']} query='' />)
  expect(screen.queryByText('Alpha')).not.toBeNull()
  expect(screen.queryByText('Beta')).not.toBeNull()
})

test('filters by substring case-insensitively', () => {
  render(<FilterableList items={['Alpha', 'Beta', 'Gamma']} query='mm' />)
  expect(screen.queryByText('Gamma')).not.toBeNull()
  expect(screen.queryByText('Alpha')).toBeNull()
  expect(screen.queryByText('Beta')).toBeNull()
})
