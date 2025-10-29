import ImageGrid from "./ImageGrid";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <header className="p-6">
        <h1 className="text-4xl font-bold">My Tailwind Blog Gallery</h1>
      </header>
      <main>
        <ImageGrid />
      </main>
    </div>
  );
}

export default App;
