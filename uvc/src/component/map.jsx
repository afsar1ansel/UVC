import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import map from "@/img/map.png";
import pins from "@/img/pins.png";
import style from "@/styles/map.module.css";
export default function Map() {
  return (
    <Flex
      bgColor={"#fff"}
      // flexDir={"column"}
      justifyContent="center"
      alignItems="center"
      padding={"8rem 0"}
      fontFamily={"archivo, sans-serif"}
      color={"black"}
    >
      <Box
        display={"flex"}
        flexDir={"row"}
        justifyContent="space-between"
        alignItems="start"
        maxWidth={"90%"}
        padding={"1rem"}
        // border={"1px solid #000"}
        width={"100%"}
      >
        <Flex
          className={"leftSection"}
          flexDir={"column"}
          gap={5}
          width={"50%"}
        >
          <Box display={"flex"} gap={5} width={"100%"} whiteSpace={"nowrap"}>
            <Box
              height={"2px"}
              width={"10%"}
              bgColor={"#FFC631"}
              // top={"10px"}
              mt={"10px"}
            ></Box>
            <Text
              fontFamily={"archivo, sans-serif"}
              fontSize={"16px"}
              fontWeight={600}
              color={"black"}
            >
              NATIONWIDE PRESENCE
            </Text>
          </Box>
          <Heading fontWeight={700} fontSize={"48px"}>
            <span style={{ color: "#0DA574" }}>Our Reach</span> across India
          </Heading>
          <Box bgImage={`url(${map.src})`} className={style.map}>
            <Image src={pins} className={style.pins} alt="Map pins" />
          </Box>
        </Flex>
        <Flex
          className={"rightSection"}
          width={"45%"}
          flexDir={"column"}
          gap={"5rem"}
        >
          <Text fontWeight={400} fontSize={"18px"}>
            Unique Vacuum Solutions has a strong presence across India,
            delivering high-quality vacuum solutions to industries such as
            aerospace, automotive, electronics, and more. Our dedication to
            precision and service has made us a trusted partner for businesses
            throughout the country.
          </Text>

          <Box width={"200px"} display={"flex"} gap={5} flexDir={"column"}>
            <Heading fontWeight={700} fontSize={"48px"} color={"#0DA574"}>
              200 +
            </Heading>
            <Text>Successful Installations across India</Text>
          </Box>
          <Box width={"200px"} display={"flex"} gap={5} flexDir={"column"}>
            <Heading fontWeight={700} fontSize={"48px"} color={"#0DA574"}>
              20 +
            </Heading>
            <Text>Years of Expertise in Vacuum Technology</Text>
          </Box>
          <Box width={"200px"} display={"flex"} gap={2} flexDir={"column"}>
            <Heading fontWeight={700} fontSize={"48px"} color={"#0DA574"}>
              98%
            </Heading>
            <Text>Customer Satisfaction in Service Delivery</Text>
          </Box>
          <Box>
            <Button
              bgColor={"#FFC631"}
              color={"black"}
              padding={"1rem 2rem"}
              fontSize={"18px"}
              fontWeight={600}
              border={"solid 2px #FFC631"}
            >
              LEARN MORE ABOUT US{" "}
            </Button>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}
