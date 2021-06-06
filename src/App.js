import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import { VStack } from "@chakra-ui/react";

import theme from "./theme/theme";

import Home from "./Pages/Home";

function App() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <VStack w="1040px" mx="auto" mb="100px">
          <Home />
        </VStack>
      </ChakraProvider>
    </>
  );
}

export default App;
