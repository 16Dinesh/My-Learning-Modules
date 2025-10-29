import { useProducts } from "../hook/useProducts";
import ProductCard from "./ProductCard";
import { Grid, CircularProgress, Box, Button, Typography } from "@mui/material";

export default function ProductGrid() {
  const { products, loading, error, fetchMoreProducts, total, skip } =
    useProducts();

  if (error)
    return (
      <Typography textAlign="center" color="error" mt={4}>
        Failed to load products: {error}
      </Typography>
    );

  return (
    <Box
      sx={{
        p: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Grid container spacing={3} justifyContent="center">
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>

      {loading && (
        <Box mt={4}>
          <CircularProgress />
        </Box>
      )}

      {!loading && skip < total && (
        <Button
          variant="contained"
          color="primary"
          onClick={fetchMoreProducts}
          sx={{ mt: 4 }}
        >
          Load More
        </Button>
      )}
    </Box>
  );
}
