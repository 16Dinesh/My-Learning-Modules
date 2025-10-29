import './App.css'
import DataFetchingComponent from './Components/Posts'
import Quotes from './Components/Quotes'
import User from './Components/User'

function App() {
  

  return (
    <div>
      <h1>Data Handling</h1>
      <DataFetchingComponent/>
      <hr/>
      <User/>
      <hr />
      <Quotes />
    </div>
  )
}

export default App
