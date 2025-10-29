// src/App.jsx
import { Routes, Route, Link } from "react-router-dom";
import Layout from "./components/layout.jsx";
import Home from "./pages/Home/index.jsx";
import ProductPage from "./pages/Other/ProductPage.jsx";
import ProductDetails from "./pages/Other/ProductDetails.jsx";
import Spinner from "./components/Spinner.jsx";
import { useProducts } from "./context/ProductContext.jsx";

export default function App() {
  const { loading } = useProducts();
  if (loading) {
    return <Spinner />;
  }
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="page/:pageNumber" element={<ProductPage />} />
        <Route path="product/:id/:slug" element={<ProductDetails />} />
      </Route>
      <Route
        path="*"
        element={
          <div style={{ textAlign: "center", padding: "2rem" }}>
            <h1>No Page Here 😕</h1>
            <Link
              to="/"
              style={{
                display: "inline-block",
                marginTop: "1rem",
                padding: "10px 20px",
                background: "#007bff",
                color: "white",
                textDecoration: "none",
                borderRadius: "5px",
              }}
            >
              Go Home
            </Link>
          </div>
        }
      />
    </Routes>
  );
}
