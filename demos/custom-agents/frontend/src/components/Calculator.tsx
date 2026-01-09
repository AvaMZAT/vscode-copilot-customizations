type Props = {
  initialValue?: number
}

const Calculator = ({ initialValue = 0 }: Props) => {
  const add = (a: number, b: number): number => a + b
  const subtract = (a: number, b: number): number => a - b

  return (
    <div style={{ border: '1px solid #ccc', padding: 16, borderRadius: 4 }}>
      <h2>Calculator</h2>
      <p>Initial: {initialValue}</p>
      <p>5 + 3 = {add(5, 3)}</p>
      <p>10 - 4 = {subtract(10, 4)}</p>
    </div>
  )
}

export default Calculator
