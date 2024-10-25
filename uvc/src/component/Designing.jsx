import { Box, Button, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import check from "@/img/check.png";
import Image from "next/image";
import set from "@/img/set.png"
import hand from "@/img/hand.png"
import bulb from "@/img/bulb.png";
import hand1 from "@/img/hand1.png";
import man1 from "@/img/man1.png";
import frame from "@/img/frame.png"
import founder from "@/img/founder.png"
import path from "@/img/path.png"


export default function Designing() {
  return (
    <Flex
      flexDir={"column"}
      gap={10}
      justifyContent="center"
      alignItems="center"
      padding={"8rem 0"}
      bgColor={"#001F3F"}
      fontFamily={"archivo, sans-serif"}
      //   height={"100vh"}
    >
      <Box
        justifyContent="center"
        alignItems="start"
        maxWidth={"80%"}
        padding={"1rem"}
        width={"100%"}
      >
        <Grid templateColumns={"repeat(3, 1fr)"} gap={5} height={"100%"}>
          <Box
            color={"white"}
            h={"100%"}
            display="flex"
            flexDirection="column"
            justifyContent="space-evenly"
            gap={"10px"}
          >
            <Box display={"flex"} gap={5} width={"100%"} whiteSpace={"nowrap"}>
              <Box
                height={"2px"}
                width={"10%"}
                bgColor={"#FFC631"}
                mt={"10px"}
              ></Box>
              <Text
                fontFamily={"archivo, sans-serif"}
                fontSize={"16px"}
                fontWeight={600}
              >
                WHY CHOOSE US
              </Text>
            </Box>
            <Heading fontWeight={700} fontSize={"42px"} lineHeight={"48px"}>
              <span style={{ color: "#0DA574" }}>Designing</span> Future with
              Excellence
            </Heading>
            <Box display={"flex"} alignItems="center" gap={1}>
              <Image src={check} alt="mask" width={24} height={24} />{" "}
              <Text fontSize={"16px"}>Tailored Engineering Solutions</Text>
            </Box>
            <Box display={"flex"} alignItems="center" gap={1}>
              <Image src={check} alt="mask" width={24} height={24} />{" "}
              <Text fontSize={"16px"}>Tailored Engineering Solutions</Text>
            </Box>
            <Box display={"flex"} alignItems="center" gap={1}>
              <Image src={check} alt="mask" width={24} height={24} />{" "}
              <Text fontSize={"16px"}>Tailored Engineering Solutions</Text>
            </Box>
          </Box>

          <Box
            color={"white"}
            h={"100%"}
            display="flex"
            flexDirection="column"
            justifyContent="space-evenly"
            // minHeight="400px"
            border={"1px solid #C8C8C8"}
            padding={5}
            gap={"10px"}
          >
            <Image src={set} alt="" />
            <Heading fontWeight={700} fontSize={"26px"}>
              Precision Engineering at Its Best
            </Heading>
            <Text color={"#E9E6E6"}>
              Every vacuum system is crafted to deliver accurate, reliable, and
              high-performance results across various applications.
            </Text>
          </Box>

          <Box
            color={"white"}
            h={"100%"}
            display="flex"
            flexDirection="column"
            justifyContent="space-evenly"
            // minHeight="400px"
            border={"1px solid #C8C8C8"}
            padding={5}
            gap={"10px"}
          >
            <Image src={hand} alt="" />
            <Heading fontWeight={700} fontSize={"26px"}>
              Precision Engineering at Its Best
            </Heading>
            <Text color={"#E9E6E6"}>
              Every vacuum system is crafted to deliver accurate, reliable, and
              high-performance results across various applications.
            </Text>
          </Box>

          <Box
            color={"white"}
            h={"100%"}
            display="flex"
            flexDirection="column"
            justifyContent="space-evenly"
            // minHeight="400px"
            border={"1px solid #C8C8C8"}
            padding={5}
            gap={"10px"}
          >
            <Image src={bulb} alt="" />
            <Heading fontWeight={700} fontSize={"26px"}>
              Precision Engineering at Its Best
            </Heading>
            <Text color={"#E9E6E6"}>
              Every vacuum system is crafted to deliver accurate, reliable, and
              high-performance results across various applications.
            </Text>
          </Box>

          <Box
            color={"white"}
            h={"100%"}
            display="flex"
            flexDirection="column"
            justifyContent="space-evenly"
            // minHeight="400px"
            border={"1px solid #C8C8C8"}
            padding={5}
            gap={"10px"}
          >
            <Image src={hand1} alt="" />
            <Heading fontWeight={700} fontSize={"26px"}>
              Precision Engineering at Its Best
            </Heading>
            <Text color={"#E9E6E6"}>
              Every vacuum system is crafted to deliver accurate, reliable, and
              high-performance results across various applications.
            </Text>
          </Box>

          <Box
            color={"white"}
            h={"100%"}
            display="flex"
            flexDirection="column"
            justifyContent="space-evenly"
            // minHeight="400px"
            border={"1px solid #C8C8C8"}
            padding={5}
            gap={"10px"}
          >
            <Image src={man1} alt="" />
            <Heading fontWeight={700} fontSize={"26px"}>
              Precision Engineering at Its Best
            </Heading>
            <Text color={"#E9E6E6"}>
              Every vacuum system is crafted to deliver accurate, reliable, and
              high-performance results across various applications.
            </Text>
          </Box>
        </Grid>
      </Box>
      <Box
        justifyContent="center"
        alignItems="start"
        maxWidth={"80%"}
        padding={"6rem 0rem"}
        width={"100%"}
      >
        <Box>
          <Box width={"100%"} display={"flex"} justifyContent={"space-between"} >
            <Box display={"flex"} flexDirection={"column"}  >
              <Box
                display={"flex"}
                gap={5}
                width={"100%"}
                whiteSpace={"nowrap"}
              >
                <Box
                  height={"2px"}
                  width={"20%"}
                  bgColor={"#FFC631"}
                  mt={"10px"}
                ></Box>
                <Text
                  fontFamily={"archivo, sans-serif"}
                  fontSize={"14px"}
                  fontWeight={600}
                >
                  EXCELLENCE IN VACUUM ENGINEERING
                </Text>
              </Box>
              <Box mt={2}>
                <Text fontWeight={600} fontSize={"40px"}>
                  See Our <span style={{ color: "#0DA574" }}>Expertise</span>{" "}
                  <br /> in Action
                </Text>
              </Box>
            </Box>
            <Box display={"flex"} alignItems={"end"}>
              <Button
                padding={"1rem 2rem"}
                bgColor={"#FFC631"}
                fontWeight={600}
                color={"black"}
              >
                COUNSULT NOW
              </Button>
            </Box>
          </Box>

          <Box margin={"2rem 0rem"} width={"100%"}>
            <Image src={frame} alt="" />
          </Box>

          <Box display={"flex"} justifyContent={"space-between"} mt={20}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              gap={5}
              width={"100%"}
              color={"#E9E6E6"}
              fontWeight={400}
              fontSize={"18px"}
            >
              <Text>
                At Unique Vacuum Solutions, we pride ourselves on delivering
                innovative, high-performance vacuum technology solutions
                tailored to meet diverse industry needs. With over 20 years of
                experience, we continue to set the standard in precision
                engineering, offering unmatched quality and service across
                India.
              </Text>
              <Box display={"flex"} alignItems="center" gap={1}>
                <Image src={check} alt="mask" width={24} height={24} />
                <Text fontSize={"16px"}>
                  Certified Quality; ISO 9001-2015 certified
                </Text>
              </Box>
              <Box display={"flex"} alignItems="center" gap={1}>
                <Image src={check} alt="mask" width={24} height={24} />{" "}
                <Text fontSize={"16px"}>
                  Global Partnerships; Trusted partners with SOLBERG and LAZZERO
                </Text>
              </Box>
              <Box display={"flex"} alignItems="center" gap={1}>
                <Image src={check} alt="mask" width={24} height={24} />{" "}
                <Text fontSize={"16px"}>
                  End-to-End Solutions; From design and manufacturing to
                  installation
                </Text>
              </Box>
              <Box display={"flex"} alignItems="center" gap={1}>
                <Image src={check} alt="mask" width={24} height={24} />{" "}
                <Text fontSize={"16px"}>
                  Specialized Expertise; trusted by diverse industries.
                </Text>
              </Box>
            </Box>
            <Box
              display={"flex"}
              flexDir={"column"}
              background={
                "radial-gradient(ellipse at 25% 75%, rgba(255, 198, 49, 0) 0%, rgba(255, 198, 49, 0.4) 100%)"
              }
              width="80%"
              height="326px"
              padding="45px 60px"
              gap="40px"
            >
              <Box>
                <Text fontWeight={600} color={"#D0D0D0"}>
                  When we started in 2001, our mission was clear: to bring
                  precision and reliability to the field of vacuum technology.
                  Today, we continue to innovate and serve as a trusted partner
                  to industries across India.
                </Text>
              </Box>
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Box display={"flex"} alignItems={"center"} gap={2}>
                  <Image src={founder} alt="" />
                  <div>
                    <Text>Nagendra N Utpath</Text>
                    <Text>Founder</Text>
                  </div>
                </Box>
                <Box display={"flex"} gap={1}>
                  <Image src={path} alt="" />
                  <Image src={path} alt="" />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}
