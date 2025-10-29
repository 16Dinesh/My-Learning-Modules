import './App.css'
import Login from './components/dynamic-form/Login'
import Register from './components/dynamic-form/Register'
import Form from './Forms/Forms'
import ReactHookFormExamplePage from './Forms/React-hook'

function App() {

  return (
    <div>
      <h1>Form Handling</h1>
      <Form/>
      <hr/>
      <div style={{margin:"2rem"}}>
        <h3>Dynamic Form Handling</h3>
        <div style={{padding:"2rem", border:"2px solid black" }}>
        <Login />   
        </div>
        <div style={{margin:"2rem", padding:"2rem", border:"2px solid black"}}>
        <Register/>
        </div>
        <hr/>
        <div>
          <ReactHookFormExamplePage/>
        </div>
      </div>
    </div>
  )
}

export default App
