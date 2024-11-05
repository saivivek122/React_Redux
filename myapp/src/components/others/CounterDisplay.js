import { useSelector } from 'react-redux'

const CounterDisplay = () => {
  const countValue=useSelector((state)=>state.counter.count)
  return (
    <div>
      <h1>Counter:  {countValue}</h1>
    </div>
  )
}

export default CounterDisplay
