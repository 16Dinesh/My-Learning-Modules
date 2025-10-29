import { useProducts } from "@/hooks/useProducts";
import ProductCard from "./ProductCard";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

export default function ProductGrid() {
  const { products, loading, error, fetchMoreProducts, total, skip } = useProducts();

  if (error)
    return (
      <p className="text-center text-red-500 mt-8">
        Failed to load products: {error}
      </p>
    );

  return (
    <div className="flex flex-col items-center">
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 w-full">
        {products.length === 0 && loading ? (
          Array.from({ length: 8 }).map((_, i) => (
            <Skeleton key={i} className="w-full h-64 rounded-lg" />
          ))
        ) : (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>

      {/* Load More Button */}
      {skip < total && (
        <div className="py-6">
          <Button onClick={fetchMoreProducts} disabled={loading}>
            {loading ? "Loading..." : "Load More"}
          </Button>
        </div>
      )}
    </div>
  );
}
