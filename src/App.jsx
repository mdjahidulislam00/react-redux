
import { useSelector } from 'react-redux'
import CounterApp from './Components/CounterApp/CounterApp'

function App() {

  const data = useSelector((state) => state)

  return (
    <>
      <div>
        <h1>From App js file value: {data.count && data.count} </h1>
        <CounterApp />

      </div>
    </>
  )
}

export default App
