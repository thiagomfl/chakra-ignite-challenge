import { Flex, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex h={100} align="center" justifyContent="center">
      <Image src="/images/logo.png" alt="Site Logo" />
    </Flex>
  );
}
