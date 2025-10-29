import { create } from "zustand";

const url = "https://dummyjson.com/products";

const listProducts = create((set) => {
  return {
    listOfProducts: [],
    actions : {
      fetchListOfProducts: async () => {
        const apiResponse = await fetch("https://dummyjson.com/products");
        const result = await apiResponse.json();
        set({
          listOfProducts: result?.products.slice(0, 3),
        });
      },
    },
  };
});

export const useActions = () => listProducts((state) => state.actions);
export default listProducts;
