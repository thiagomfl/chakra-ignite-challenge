import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      900: "#47585B",
      700: "#999999",
      500: "#DADADA",
      300: "#F5F8FA",
    },
    yellow: {
      500: "#FFBA08",
    },
  },
  fonts: {
    body: "Poppins",
    heading: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: "gray.300",
        color: "gray.900",
      },
    },
  },
});
