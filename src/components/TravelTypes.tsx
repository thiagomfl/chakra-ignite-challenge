import { Flex, Image, SimpleGrid } from "@chakra-ui/react";

export function TravelTypes() {
  return (
    <Flex m="auto" pt="80px" width={1280}>
      <SimpleGrid columns={5} spacing={8} width="100%">
        <Flex align="center" justifyContent="center">
          <Image src="/images/nightlife.png" alt="Nightlife" />
        </Flex>
        <Flex align="center" justifyContent="center">
          <Image src="/images/beach.png" alt="Beach" />
        </Flex>
        <Flex align="center" justifyContent="center">
          <Image src="/images/modern.png" alt="Modern" />
        </Flex>
        <Flex align="center" justifyContent="center">
          <Image src="/images/classic.png" alt="Classic" />
        </Flex>
        <Flex align="center" justifyContent="center">
          <Image src="/images/more.png" alt="More" />
        </Flex>
      </SimpleGrid>
    </Flex>
  );
}
