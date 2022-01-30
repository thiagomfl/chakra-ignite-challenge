import { Box, Divider, Flex, Text } from "@chakra-ui/react";

import { Hero } from "../components/Hero";
import { Header } from "../components/Header";
import { TravelTypes } from "../components/TravelTypes";

export default function Home() {
  return (
    <Flex flexDir="column">
      <Header />
      <Hero />

      <Box mt="-10" bg="gray.300">
        <TravelTypes />
        <Flex flexDir="column">
          <Divider
            w={90}
            mt="80px"
            height="0.5"
            bg="gray.900"
            alignSelf="center"
          />
          <Text
            mt="52px"
            fontSize="36px"
            color="gray.900"
            fontWeight={500}
            lineHeight="54px"
            textAlign="center"
          >
            Vamos nessa? <br /> Então escolha seu continente
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
}
