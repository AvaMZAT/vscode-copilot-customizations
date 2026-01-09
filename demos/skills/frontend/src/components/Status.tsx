type Props = {
  ok?: boolean
}

const Status = ({ ok = false }: Props) => {
  return (
    <section aria-label='status'>
      <h2>Status</h2>
      <p>{ok ? 'All checks green' : 'Checks pending'}</p>
    </section>
  )
}

export default Status
