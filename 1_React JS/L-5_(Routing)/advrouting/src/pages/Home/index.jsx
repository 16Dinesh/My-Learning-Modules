import { Link } from "react-router-dom";
import { useProducts } from "../../context/ProductContext";

export default function Home() {
  const { products, loading, error } = useProducts();
  const productsPerPage = 1;
  const totalPages = Math.ceil(products.length / productsPerPage);

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>Error fetching products</h3>;

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Product Pages</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {[...Array(totalPages)].map((_, i) => (
          <Link
            key={i}
            to={`/page/${i + 1}`}
            style={{
              border: "1px solid #ccc",
              padding: "10px 15px",
              background: "#fff",
            }}
          >
            Page {i + 1}
          </Link>
        ))}
      </div>
    </div>
  );
}
