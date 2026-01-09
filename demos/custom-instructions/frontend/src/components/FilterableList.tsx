type Props = {
  items: string[]
  query: string
}

const FilterableList = ({ items, query }: Props) => {
  const lower = query.trim().toLowerCase()
  const filtered = lower ? items.filter((i) => i.toLowerCase().includes(lower)) : items
  return (
    <ul>
      {filtered.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  )
}

export default FilterableList
