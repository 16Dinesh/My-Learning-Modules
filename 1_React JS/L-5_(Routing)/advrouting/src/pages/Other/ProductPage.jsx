import { useParams } from "react-router-dom";
import { useProducts } from "../../context/ProductContext";
import ProductCard from "../../components/ProductCard";
import { useEffect } from "react";
import Spinner from "../../components/Spinner";

export default function ProductPage() {
  const { pageNumber } = useParams();
  const { products, loading } = useProducts();
  const productsPerPage = 1;

  if (loading) return <Spinner />;

  const index = parseInt(pageNumber) - 1;
  const product = products[index];

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

  if (!product) return <h3>No product found for page {pageNumber}</h3>;

  return (
    <div style={{ padding: "1rem", display: "flex", justifyContent: "center" }}>
      <ProductCard product={product} />
    </div>
  );
}
