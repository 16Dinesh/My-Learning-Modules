import './App.css'
import ClassBasedComponent from './components/component/classBased'
import ArrowFunx from './components/component/functionBased/Arrow_funx'
import ExpDefFux from './components/component/functionBased/Export_def_fux'
import NormalFunction from './components/component/functionBased/Normal'
import UserGreeting from './components/Conditional_rendering'
import EventHandlingExamples from './components/Event_handling'
import FormHandling from './components/Event_handling/Form_handling_ClassBased'
import Jsx from './components/jsx'
import ParentList from './components/Nested_Components/ListandKey/ParentList'
import Parent from './components/Nested_Components/Nested/Parent'
import ParentProp from './components/Nested_Components/porps/ParentProp'
import Timer from './components/States/lifeCylce_Methods'
import Counter from './components/States/state_in_ClassMethods'
import Styling from './components/Styling_componets'

function App() {

  return (
    <>
    <Jsx/>
    <ClassBasedComponent/>
    <NormalFunction/>
    <ArrowFunx/>
    <ExpDefFux/>
    <Parent/>
    <ParentProp/>
    <ParentList/>
    <Styling/>
    <Counter />
    <Timer/>
    <UserGreeting/>
    <EventHandlingExamples/>
    <FormHandling/>
    </>
  )
}

export default App
