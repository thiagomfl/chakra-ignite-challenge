import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import { theme } from "../styles/theme";

import "swiper/css/bundle";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
