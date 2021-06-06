import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    black: "#121212",
    grey: "#6b95a6",
    blue: "#6359ff",
  },
  styles: {
    global: {
      body: {
        fontFamily: "Lato",
        lineHeight: "1.64",
        bg: "black",
        color: "white",
      },
      h2: {
        fontSize: "24px",
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        height: "36px",
        cursor: "pointer",
        borderRadius: "0",
      },
      variants: {
        "nav-links": {
          bg: "black",
          fontSize: "14px",
          borderBottom: "3px solid blue",
          _hover: { bg: "blue" },
        },
        create: {
          bg: "blue",
        },
        "log-in": {
          width: "140px",
          bg: "#3e3e3e",
          padding: "0",
        },
      },
    },
  },
});

export default theme;
