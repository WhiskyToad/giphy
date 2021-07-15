import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import { VStack } from "@chakra-ui/react";

import theme from "./theme/theme";

import Home from "./Pages/Home";

function App() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <VStack maxW="1040px" mx="auto" px="10px" mb="100px">
          <Home />
        </VStack>
      </ChakraProvider>
    </>
  );
}

export default App;
