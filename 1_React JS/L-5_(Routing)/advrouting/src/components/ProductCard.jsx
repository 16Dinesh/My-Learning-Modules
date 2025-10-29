import { Link } from "react-router-dom";
import { slugify } from "../utils/slugify";

export default function ProductCard({ product }) {
  const slug = slugify(product.title);

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "1rem",
        width: "280px",
        textAlign: "center",
        background: "#fff",
      }}
    >
      <img
        src={product.thumbnail}
        alt={product.title}
        width="200"
        style={{ borderRadius: "4px" }}
      />
      <h3 style={{ margin: "10px 0" }}>{product.title}</h3>
      {/* <p style={{ fontSize: "14px", color: "#444" }}>{product.description}</p> */}
      <p>
        💰 <strong>${product.price}</strong>
      </p>
      <p>⭐ {product.rating}</p>
      <Link
        to={`/product/${product.id}/${slug}`}
        style={{
          display: "inline-block",
          marginTop: "10px",
          background: "#007bff",
          color: "white",
          padding: "5px 10px",
          borderRadius: "4px",
          textDecoration: "none",
        }}
      >
        View Details ➝
      </Link>
    </div>
  );
}