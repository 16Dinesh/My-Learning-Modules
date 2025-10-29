import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ProductCard({ product }) {
  return (
    <Card className="overflow-hidden hover:scale-[1.02] transition-transform duration-200">
      <CardHeader className="p-0">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-48 object-cover"
        />
      </CardHeader>

      <CardContent className="p-4">
        <CardTitle className="text-lg font-semibold mb-1">
          {product.title}
        </CardTitle>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
          {product.description}
        </p>
        <Badge variant="secondary">₹ {product.price}</Badge>
      </CardContent>
    </Card>
  );
}
