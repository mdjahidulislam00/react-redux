
import { useDispatch, useSelector } from 'react-redux'

function CounterApp() {
    const dispatch = useDispatch()
    const CounterValue = useSelector((state) => state)
    console.log(CounterValue.count)
  return (
    <div>
        <h1>Counter App</h1>
        <h2>Value: {CounterValue? CounterValue.count: 0}</h2>
        <div>
            <button onClick={() => dispatch({type: 'Increment'})} type="button">Increment+</button>
            <button onClick={() => dispatch({type: 'Decrement'})}  type="button">Decrement-</button>
            <button onClick={() => dispatch({type: 'Reset'})}  type="button">Reset</button>
        </div>
    </div>
  )
}

export default CounterApp