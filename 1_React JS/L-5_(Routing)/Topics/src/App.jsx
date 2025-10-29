import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Page1 from "./pages/default";
import "./App.css";
import Page2 from "./pages/default/index2";
import Home from "./pages/common/home";
import About from "./pages/common/about";
import Header from "./components/header";
import Product from "./pages/product/product";

function App() {
  const nav = useNavigate();

  function handlebtn2() {
    nav("/page-2", { replace: true });
  }

  function handlebtn1() {
    nav("/page-1");
  }

  const loc = useLocation();
  // console.log(loc);
  const { pathname } = loc;

  return (
    <div>
      <h1>File is about the React-Router-Dom</h1>
      <h3>your Location is {pathname}</h3>
      <div>
        <button onClick={handlebtn1} style={{ margin: "1rem" }}>
          Page -1
        </button>

        <button onClick={handlebtn2}>Page -2</button>
      </div>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="product/:id" element={<Product />} />
        </Route>
        <Route path="/page-1" element={<Page1 />} />
        <Route path="/page-2" element={<Page2 />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
