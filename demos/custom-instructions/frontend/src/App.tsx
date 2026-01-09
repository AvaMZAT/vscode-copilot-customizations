import { useState } from 'react'
import FilterableList from './components/FilterableList'

const App = () => {
  const [query, setQuery] = useState('')
  const items = ['Alpha', 'Beta', 'Gamma', 'Delta']
  return (
    <div style={{ padding: 16 }}>
      <h1>Custom Instructions Demo</h1>
      <input
        aria-label='search'
        placeholder='Type to filter...'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <FilterableList items={items} query={query} />
    </div>
  )
}

export default App
