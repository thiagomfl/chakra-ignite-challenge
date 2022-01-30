import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export function Hero() {
  return (
    <Flex
      h={366}
      bgPosition="center"
      bgRepeat="no-repeat"
      backgroundSize="100%"
      flexDirection="column"
      bgImage="url('/images/background-hero.png')"
    >
      <Flex w={1240} margin="auto" justifyContent="space-between">
        <Flex flexDirection="column" mt="10">
          <Heading
            fontSize={36}
            color="gray.300"
            lineHeight="54px"
            fontWeight={500}
          >
            5 Continentes, <br /> infinitas possibilidades.
          </Heading>
          <Text w={524} mt="8" fontSize={20} color="gray.500" lineHeight="7">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Flex>
        <Box mt="10">
          <Image
            transform="rotate(2deg)"
            src="/images/airplane.png"
            alt="Image representing an airplane flying"
          />
        </Box>
      </Flex>
    </Flex>
  );
}
