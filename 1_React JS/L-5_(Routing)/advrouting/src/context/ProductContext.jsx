import { createContext, useEffect, useState, useContext } from "react";

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const preloadImage = (src) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = src;
      img.onload = resolve;
      img.onerror = resolve;
    });
  };

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("https://dummyjson.com/products?limit=100");
        const data = await res.json();
        const fetchedProducts = data.products;

        const allImagePromises = [];
        for (const p of fetchedProducts) {
          if (p.thumbnail) {
            allImagePromises.push(preloadImage(p.thumbnail));
          }
          if (p.images && p.images.length > 0) {
            p.images.forEach((img) => {
              allImagePromises.push(preloadImage(img));
            });
          }
        }

        await Promise.all(allImagePromises); 
        setProducts(fetchedProducts);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, loading, error }}>
      {children}
    </ProductContext.Provider>
  );
}

// Custom Hook
export function useProducts() {
  return useContext(ProductContext);
}
