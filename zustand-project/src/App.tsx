import { useEffect } from 'react'
import './App.css'
import { useCounterStore } from './store'

const logCount = () => {
  const count = useCounterStore.getState().count
  console.log('count', count)
}

const setCount = () => {
  useCounterStore.setState({count: 1})
}

function App() {

const count = useCounterStore((state) => state.count)
  return (
    <>
      <CounterComponent count={count}/>
    </>
  )
}

const CounterComponent = ({count}: {count:number}) => {
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const incrementAsync = useCounterStore((state) => state.incrementAsync);

  useEffect(() => {
    logCount()
    setCount()
  }, [])
  
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={incrementAsync}>Increment Async</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default App
