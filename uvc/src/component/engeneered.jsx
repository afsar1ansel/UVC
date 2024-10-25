import { Box, Button, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import style from "@/styles/engeneered.module.css";
import Image from "next/image";
import mask from "@/img/Mask.png";
import mask1 from "@/img/Mask1.png";
import mask2 from "@/img/Mask2.png";
import mask3 from "@/img/Mask3.png";



const sectionStyles = {
  display: "flex",
  flexDirection: "column",
  gap: 5,
};

const headingStyles = {
  fontWeight: 700,
  fontSize: "30px",
};

const textStyles = {
  fontWeight: 400,
  fontSize: "16px",
  color: "#E9E6E6",
};

export default function Engeneered() {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      padding={"8rem 0"}
      bgColor={"#001F3F"}
      fontFamily={"archivo, sans-serif"}
    >
      <Box
        {...sectionStyles}
        justifyContent="center"
        alignItems="start"
        maxWidth={"80%"}
        padding={"1rem"}
        // border={"1px solid #000"}
        width={"100%"}
      >
        <Box width={"100%"} display={"flex"} justifyContent={"space-between"}>
          <Box display={"flex"} flexDirection={"column"}>
            <Box display={"flex"} gap={5} width={"100%"} whiteSpace={"nowrap"}>
              <Box
                height={"2px"}
                width={"22%"}
                bgColor={"#FFC631"}
                mt={"10px"}
              ></Box>
              <Text
                fontFamily={"archivo, sans-serif"}
                fontSize={"16px"}
                fontWeight={600}
              >
                Engineering Excellence
              </Text>
            </Box>
            <Box mt={2}>
              <Text fontWeight={600} fontSize={"44px"}>
                Our Engineered <span className={style.span}>Products</span>
              </Text>
            </Box>
          </Box>
          <Box display={"flex"}  justifyContent={"space-between"} alignItems={"center"} width={"32%"} >
          <Button className={style.button1} >OUR PRODUCTS</Button>
            <Button className={style.button2} >OUR SERVICES</Button>
          </Box>
        </Box>

        <Grid templateColumns="repeat(2, 1fr)" marginTop={10} gap={20}>
          <Box {...sectionStyles}>
            <Image src={mask} alt="dir" />
            <Heading as={"h2"} {...headingStyles}>
              Vacuum components and Services
            </Heading>
            <Box height={"1px"} bgColor={"#A9A9A9"}></Box>
            <Text {...textStyles}>
              We provide high-quality vacuum components and expert services for
              efficient system performance and maintenance.
            </Text>
          </Box>

          <Box {...sectionStyles}>
            <Image src={mask1} alt="dir" />
            <Heading as={"h2"} {...headingStyles}>
              Vacuum Pumps and Vacuum Systems
            </Heading>
            <Box height={"1px"} bgColor={"#A9A9A9"}></Box>
            <Text {...textStyles}>
              We offer precision instruments for accurate vacuum measurement
              across a wide range of applications.
            </Text>
          </Box>

          <Box {...sectionStyles}>
            <Image src={mask2} alt="dir" />
            <Heading as={"h2"} {...headingStyles}>
              Helium Leak Detectors
            </Heading>
            <Box height={"1px"} bgColor={"#A9A9A9"}></Box>
            <Text {...textStyles}>
              We provide advanced helium leak detectors for precise leak
              detection and testing in critical applications.
            </Text>
          </Box>

          <Box {...sectionStyles}>
            <Image src={mask3} alt="dir" />
            <Heading as={"h2"} {...headingStyles}>
              Vacuum components and Services
            </Heading>
            <Box height={"1px"} bgColor={"#A9A9A9"}></Box>
            <Text {...textStyles}>
              We provide high-quality vacuum components and expert services for
              efficient system performance and maintenance.
            </Text>
          </Box>
        </Grid>
      </Box>
    </Flex>
  );
}
