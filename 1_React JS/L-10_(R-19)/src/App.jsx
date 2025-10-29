import "./App.css";
import ActionForm from "./Hooks/useActionState";
import FormWithStatus from "./Hooks/useFormStatus";
import Comments from "./Hooks/useOptimistic";
import SearchList from "./Hooks/useTransition";

function App() {
  return (
    <div>
      <h1>React - 19</h1>
      <SearchList/>
      <hr/>
      <ActionForm/>
      <hr/>
      {/* <FormWithStatus/> */}
      <hr/>
      <Comments/>
    </div>
  );
}

export default App;
