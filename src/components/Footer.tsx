import { ReactNode } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  Box,
  Link,
  Flex,
  Text,
  Image,
  Stack,
  chakra,
  Container,
  VisuallyHidden,
  useColorModeValue,
} from "@chakra-ui/react";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      h={8}
      w={8}
      as="a"
      href={href}
      rounded="full"
      cursor="pointer"
      alignItems="center"
      display="inline-flex"
      justifyContent="center"
      transition="background 0.3s ease"
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export function Footer() {
  return (
    <Flex
      m="auto"
      w={1240}
      h="100px"
      bg="gray.300"
      align="center"
      color="gray.700"
      justifyContent="space-between"
    >
      <Image src="/images/logo.png" alt="Site Logo" />
      <Text>© {new Date().getFullYear()} Thiagotec. All rights reserved</Text>
      <Stack direction={"row"} spacing={6}>
        <SocialButton label={"Github"} href={"#"}>
          <FaGithub />
        </SocialButton>
        <SocialButton label={"Linkedin"} href={"#"}>
          <FaLinkedin />
        </SocialButton>
      </Stack>
    </Flex>
  );
}
