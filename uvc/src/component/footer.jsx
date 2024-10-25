import { Box, Button, Input, Text } from "@chakra-ui/react";
import Image from "next/image";
import img from "@/img/logo.png";
import call from "@/img/call.png";
import mapdot from "@/img/mapdot.png";

import right from "@/img/right.png";
import fb from "@/img/fb1.png";
import insta from "@/img/insta1.png";
import twitter from "@/img/twitter1.png";
import whapp from "@/img/whapp1.png";

export default function Footer() {
  return (
    <Box
      bgColor={"#001F3F"}
      p={{ base: "2rem", md: "2rem", lg: "4rem", xl: "4rem", "2xl": "6rem" }}
      fontFamily={"archivo, sans-serif"}
    >
      <Box display={"flex"} justifyContent={"space-between"} gap={"5rem"}  >
        <Box>
          <Box display={"flex"} alignItems={"center"} gap={"0.5rem"}>
            <Image src={img} width={50} height={50} alt="dir" />
            <Text fontWeight={800} fontSize={"48px"}>
              <span>U</span>
              <span style={{ color: "#E67817" }}>V</span>
              <span style={{ color: "#005534" }}>C</span>
            </Text>
          </Box>
          <Text fontWeight={400} fontSize={"16px"} color={"#E9E6E6"}>
            Delivering precision and reliability in every vacuum solution we
            provide. Trusted by industries across India, we offer comprehensive
            service from design to after-sales support.
          </Text>
        </Box>

        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={"1rem"}
          width={"80%"}
        >
          <Text fontWeight={700} fontSize={"26px"}>
            Contacts
          </Text>
          <Box display={"flex"} gap={"0.5rem"}>
            <Box>
              <Image src={call} alt="dir" />
            </Box>
            <Text>
              +91 9886726920 <br /> 080 28367059
            </Text>
          </Box>

          <Box display={"flex"} gap={"0.5rem"}>
            <Box>
              <Image src={mapdot} alt="dir" />
            </Box>
            <Text>No. 57, 8th Cross, Doddanna Industrial Estate</Text>
          </Box>
        </Box>

        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={"1rem"}
          width={"80%"}
        >
          <Text fontWeight={700} fontSize={"26px"}>
            Company
          </Text>
          <Box display={"flex"} gap={"0.5rem"} alignItems={"center"}>
            <Box>
              <Image src={right} alt="dir" />
            </Box>
            <Text fontWeight={600} fontSize={"14px"}>
              ABOUT
            </Text>
          </Box>

          <Box display={"flex"} gap={"0.5rem"} alignItems={"center"}>
            <Box>
              <Image src={right} alt="dir" />
            </Box>
            <Text fontWeight={600} fontSize={"14px"}>
              SERVICES
            </Text>
          </Box>

          <Box display={"flex"} gap={"0.5rem"} alignItems={"center"}>
            <Box>
              <Image src={right} alt="dir" />
            </Box>
            <Text fontWeight={600} fontSize={"14px"}>
              PRODUCTS
            </Text>
          </Box>
          <Box display={"flex"} gap={"0.5rem"} alignItems={"center"}>
            <Box>
              <Image src={right} alt="dir" />
            </Box>
            <Text fontWeight={600} fontSize={"14px"}>
              CAREERS
            </Text>
          </Box>
        </Box>

        <Box
          width={"90%"}
          display={"flex"}
          flexDirection={"column"}
          gap={"1rem"}
        >
          <Text fontWeight={700} fontSize={"26px"}>
            Subscribe to our news
          </Text>
          <Text fontWeight={400} fontSize={"16px"}>
            Find out about the last days and the latest promotions of our
            Corporation
          </Text>

          <Box display={"flex"}>
            <Input
              type="email"
              size="lg"
              bgColor={"#fff"}
              border={"1px solid #A9A9A9"}
              borderRadius={0}
              p={4}
              placeholder="Email"
            />
            <Button
              bgColor={"#FFC631"}
              borderRadius={0}
              size={"lg"}
              padding={4}
              color={"black"}
            >
              Subscribe
            </Button>
          </Box>
        </Box>
      </Box>
      <Box height={"1px"} width={"100%"} bgColor={"#A9A9A9"} mt={"2rem"}></Box>
      <Box display={"flex"} justifyContent={"space-between"} mt={"2rem"}>
        <Box>
          <Text fontWeight={400} fontSize={"16px"} color={"#C9C9C980"}>
            Unique Vacuum Solutions © Third Eye Creatives <br /> All rights
            reserved Copyrights 2024
          </Text>
        </Box>
        <Box display={"flex"} gap={"1rem"}  >
            <Image src={fb} alt="dir" />
            <Image src={insta} alt="dir" />
            <Image src={twitter} alt="dir" />
            <Image src={whapp} alt="dir" />

        </Box>
      </Box>
    </Box>
  );
}
