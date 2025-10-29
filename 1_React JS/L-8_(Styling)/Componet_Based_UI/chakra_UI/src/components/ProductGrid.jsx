import { SimpleGrid, Spinner, Center, Text } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import { useProducts } from "../hooks/useProducts";

const ProductGrid = () => {
  const { products, loading, error } = useProducts();

  if (loading) {
    return (
      <Center py={20}>
        <Spinner size="xl" />
      </Center>
    );
  }

  if (error) {
    return (
      <Center py={20}>
        <Text>Failed to load products: {error.message}</Text>
      </Center>
    );
  }

  return (
    <SimpleGrid columns={[1, 2, 3, 4]} spacing={6} p={4}>
      {products.map((prod) => (
        <ProductCard key={prod.id} product={prod} />
      ))}
    </SimpleGrid>
  );
};

export default ProductGrid;