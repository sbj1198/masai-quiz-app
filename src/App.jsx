import { Box } from "@chakra-ui/react";
import reactLogo from "./assets/react.svg";
import { AllRoutes } from "./pages/AllRoutes";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <Box>
      <Navbar />
      <AllRoutes />
    </Box>
  );
}

export default App;
