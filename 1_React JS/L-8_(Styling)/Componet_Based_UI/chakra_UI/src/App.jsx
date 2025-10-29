import { ChakraProvider, Box, Heading, IconButton } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import ProductGrid from "./components/ProductGrid";
import { useColorMode } from "./components/ui/color-mode";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div>
      <Box
        minH="100vh"
        p={4}
        bg={colorMode === "light" ? "gray.50" : "gray.900"}
        color={colorMode === "light" ? "gray.800" : "gray.100"}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
          <Heading >My Chakra Blog Products</Heading>
          <IconButton
            aria-label="Toggle theme"
            icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
            onClick={toggleColorMode}
          />
        </Box>
        <ProductGrid />
      </Box>
    </div>
  );
}

export default App;