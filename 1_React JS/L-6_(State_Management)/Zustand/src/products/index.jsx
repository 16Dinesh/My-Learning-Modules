import { useEffect } from "react";
import listProducts, { useActions } from "../store/listProducts";



export default function Products() {
  const productList = listProducts((state) => state.listOfProducts);

  const { fetchListOfProducts } = useActions();

  useEffect(() => {
    fetchListOfProducts();
  }, []);

  console.log(productList);

  return (
    <div>
      <h1> Fetch of Products</h1>
      <ul style={{ display: "flex", flexWrap: "wrap" , marginLeft: "9rem" }}>
        {productList?.length > 0 ? (
          productList.map((singleProductItem) => (
            <div key={singleProductItem.id}>
              <p>{singleProductItem?.title}</p>
              <img src={singleProductItem?.thumbnail} />
            </div>
          ))
        ) : (
          <h3>No products available</h3>
        )}
      </ul>
    </div>
  );
}