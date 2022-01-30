import { Box, Heading, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Zoom } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function ContinentsSlide() {
  return (
    <Box w={1240} mx="auto" my="52px">
      <Swiper
        style={{
          "--swiper-pagination-color": "#FFBA08",
          "--swiper-navigation-color": "#FFBA08",
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        zoom={true}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Autoplay, Navigation, Pagination, Zoom]}
      >
        <SwiperSlide>
          <Box
            bgPosition="center"
            bgRepeat="no-repeat"
            backgroundSize="100%"
            flexDirection="column"
            className="swiper-zoom-container"
            bgImage="url('/images/north-america.png')"
          >
            <Heading
              fontSize="48px"
              color="gray.300"
              fontWeight="bold"
              lineHeight="72px"
            >
              America do Norte
            </Heading>
            <Text
              fontSize="24px"
              color="gray.500"
              fontWeight="bold"
              lineHeight="36px"
            >
              O continente mais antigo
            </Text>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box
            bgPosition="center"
            bgRepeat="no-repeat"
            backgroundSize="100%"
            flexDirection="column"
            className="swiper-zoom-container"
            bgImage="url('/images/south-america.png')"
          >
            <Heading
              fontSize="48px"
              color="gray.300"
              fontWeight="bold"
              lineHeight="72px"
            >
              America do Sul
            </Heading>
            <Text
              fontSize="24px"
              color="gray.500"
              fontWeight="bold"
              lineHeight="36px"
            >
              O continente mais antigo
            </Text>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box
            bgPosition="center"
            bgRepeat="no-repeat"
            backgroundSize="100%"
            flexDirection="column"
            className="swiper-zoom-container"
            bgImage="url('/images/africa.png')"
          >
            <Heading
              fontSize="48px"
              color="gray.300"
              fontWeight="bold"
              lineHeight="72px"
            >
              Africa
            </Heading>
            <Text
              fontSize="24px"
              color="gray.500"
              fontWeight="bold"
              lineHeight="36px"
            >
              O continente mais antigo
            </Text>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box
            bgPosition="center"
            bgRepeat="no-repeat"
            backgroundSize="100%"
            flexDirection="column"
            className="swiper-zoom-container"
            bgImage="url('/images/asia.png')"
          >
            <Heading
              fontSize="48px"
              color="gray.300"
              fontWeight="bold"
              lineHeight="72px"
            >
              Asia
            </Heading>
            <Text
              fontSize="24px"
              color="gray.500"
              fontWeight="bold"
              lineHeight="36px"
            >
              O continente mais antigo
            </Text>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box
            bgPosition="center"
            bgRepeat="no-repeat"
            backgroundSize="100%"
            flexDirection="column"
            className="swiper-zoom-container"
            bgImage="url('/images/europa.png')"
          >
            <Heading
              fontSize="48px"
              color="gray.300"
              fontWeight="bold"
              lineHeight="72px"
            >
              Europa
            </Heading>
            <Text
              fontSize="24px"
              color="gray.500"
              fontWeight="bold"
              lineHeight="36px"
            >
              O continente mais antigo
            </Text>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box
            bgPosition="center"
            bgRepeat="no-repeat"
            backgroundSize="100%"
            flexDirection="column"
            className="swiper-zoom-container"
            bgImage="url('/images/oceania.png')"
          >
            <Heading
              fontSize="48px"
              color="gray.300"
              fontWeight="bold"
              lineHeight="72px"
            >
              Oceania
            </Heading>
            <Text
              fontSize="24px"
              color="gray.500"
              fontWeight="bold"
              lineHeight="36px"
            >
              O continente mais antigo
            </Text>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
