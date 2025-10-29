import { Box, Image, Heading, Text, Stack, Badge } from "@chakra-ui/react";

const ProductCard = ({ product }) => {
  return (
    <Box
      borderRadius="md"
      overflow="hidden"
      boxShadow="md"
      bg="white"
      margin="2.5"
      _dark={{ bg: "gray.800" }}
      transition="transform 0.2s"
      _hover={{ transform: "scale(1.02)" }}
    >
      <Image src={product.thumbnail} alt={product.title} objectFit="cover" marginLeft="2rem" width="13rem" height="200px" />

      <Stack p={4} spacing={2}>
        <Heading size="md">{product.title}</Heading>
        <Text noOfLines={2}>{product.description}</Text>
        <Badge colorScheme="teal">₹ {product.price}</Badge>
      </Stack>
    </Box>
  );
};

export default ProductCard;