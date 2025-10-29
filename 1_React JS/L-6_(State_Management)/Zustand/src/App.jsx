import "./App.css";
import Counter from "./counter-app";
import Products from "./products";

function App() {
  return (
    <div>
      <h1>React with Zustand</h1>
      <Counter />
      <hr />
      <Products/>
    </div>
  );
}

export default App;
