type Props = {
  name: string
}

const Greeting = ({ name }: Props) => {
  const greet = (who: string): string => `Hello, ${who}!`

  return (
    <section aria-label='greeting'>
      <h2>Greeting</h2>
      <p>{greet(name)}</p>
    </section>
  )
}

export default Greeting
