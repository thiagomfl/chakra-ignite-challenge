import { Box, Flex } from "@chakra-ui/react";

import { Hero } from "../components/Hero";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <Box>
      <Header />
      <Hero />

      <Flex as="main" mt="-10" bg="gray.300">

      </Flex>
    </Box>
  );
}
