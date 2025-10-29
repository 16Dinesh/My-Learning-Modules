import "./App.css";
import UserList from "./customComponets/Fetch";
import Dropdown from "./customComponets/OutsideClick";
import Counter from "./customComponets/Storage";
import ResponsiveComponent from "./customComponets/WindowResize";
import UseCallbackHook from "./Hooks/UseCallback";
import UseContextHook from "./Hooks/UseContext";
import UseEffectHook from "./Hooks/UseEffects";
import UseLayoutHook from "./Hooks/UseLayout";
import UseMemoHook from "./Hooks/UseMemo";
import UseReducerHook from "./Hooks/UseReducer";
import UseRefHook from "./Hooks/UseRef";
import UseStateHook from "./Hooks/UseState";

function App() {
  return (
    <>
      <div>
        <h1>All About the React Hooks</h1>
        <UseStateHook />
        <UseEffectHook />
        <UseContextHook />
        <UseReducerHook />
        <UseRefHook />
        <UseLayoutHook />
        <UseMemoHook />
        <UseCallbackHook />
        <hr />
        <div>
          <h3>Custom Hook - useFetch</h3>
          <UserList />
        </div>
        <hr/>
        <div>
          <h3>custom Hook - Use OutsideClick</h3>
          <Dropdown/>
        </div>
        <hr />
        <div>
          <h3>Custom Hook - Use Window Resize</h3>
          <ResponsiveComponent />
        </div>
        <hr/>
        <div></div>
          <h3>Custom Hook - Use Local Storage</h3>
          <Counter/>
        </div>
    </>
  );
}

export default App;
