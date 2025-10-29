import { useParams } from "react-router-dom";
import { useProducts } from "../../context/ProductContext";
import { useEffect } from "react";
import Spinner from "../../components/Spinner";

export default function ProductDetails() {
  const { id } = useParams();
  const { products, loading } = useProducts();

  if (loading) return <Spinner />;

  const product = products.find((p) => p.id === parseInt(id));

  useEffect(() => {
    if (product) {
      document.title = `${product.title} | My Store`;
    } else {
      document.title = "Product Not Found | My Store";
    }

    return () => {
      document.title = "My Store";
    };
  }, [product]);

  if (!product) return <h3>Product not found</h3>;

  return (
    <div style={{ padding: "1rem" }}>
      <h2>{product.title}</h2>
      <img src={product.thumbnail} alt={product.title} width="250" />
      <p>{product.description}</p>
      <p>
        <strong>Brand:</strong> {product.brand}
      </p>
      <p>
        <strong>Category:</strong> {product.category}
      </p>
      <p>
        <strong>Price:</strong> ${product.price}
      </p>
      <p>
        <strong>Rating:</strong> {product.rating}
      </p>

      <h3>Images:</h3>
      <div style={{ display: "flex", gap: "10px" }}>
        {product.images.map((img, i) => (
          <img key={i} src={img} alt="product" width="100" />
        ))}
      </div>
    </div>
  );
}
