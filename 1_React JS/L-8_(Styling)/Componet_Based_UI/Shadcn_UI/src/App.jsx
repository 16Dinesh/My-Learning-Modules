import ProductGrid from "./components/ProductGrid";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="flex justify-center items-center py-6 border-b">
        <h1 className="text-3xl font-bold">My shadcn Blog Products</h1>
      </header>

      <main className="max-w-7xl mx-auto">
        <ProductGrid />
      </main>
    </div>
  );
}
