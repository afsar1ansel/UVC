import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import frame1 from "@/img/frame1.png";
import frame2 from "@/img/frame2.png";
import frame3 from "@/img/frame3.png";
import dot from "@/img/dot.png";
import green from "@/img/vector_green.png";

export default function Expertise() {
  return (
    <Box bgColor={"#fff"}>
      <Box padding={"8rem 10rem"} display={"flex"} flexDir={"column"} gap={10}>
        <Box width={"100%"} display={"flex"} justifyContent={"space-between"}>
          <Box display={"flex"} flexDirection={"column"} color={"black"}>
            <Box
              display={"flex"}
              gap={5}
              width={"100%"}
              // whiteSpace={"nowrap"}
            >
              <Box
                height={"2px"}
                width={"10%"}
                bgColor={"#FFC631"}
                mt={"10px"}
              ></Box>
              <Text
                fontFamily={"archivo, sans-serif"}
                fontSize={"14px"}
                fontWeight={600}
                color={"black"}
              >
                Innovations in Vacuum Technology
              </Text>
            </Box>
            <Box>
              <Text fontWeight={700} fontSize={"45px"} color={"black"}>
                Insights from Our
                <span style={{ color: "#0DA574" }}>Expertise</span>
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
              OUR BLOG
            </Button>
          </Box>
        </Box>

        <Box color={"black"} display={"flex"} gap={10} mt={10}>
          <Box display={"flex"} flexDir={"column"} gap={3}>
            <Image src={frame1} alt="dir" boxSize="100%" borderRadius="md" />

            <Box display="flex" alignItems="center" mt={2} gap={2}>
              <Text fontWeight={600} fontSize="14px" mr={2}>
                TECHNOLOGIES
              </Text>
              <Image src={dot} alt="separator" boxSize="4px" mx={2} />
              <Text fontSize="12px" color="gray.500">
                AUGUST 30, 2021
              </Text>
            </Box>
            <Text fontWeight={700} fontSize={"26px"}>
              Advancements in Helium Leak Detection
            </Text>
            <Text fontWeight={400} fontSize={"16px"}>
              Explore the latest innovations in helium leak detection technology
              that enhance precision and reliability. Discover how these
              advancements are revolutionizing industries by ensuring the
              integrity of vacuum systems.
            </Text>
            <Box height={"1px"} bgColor={"#C8C8C8"}></Box>
            <Flex align="center" gap={2}>
              <Text fontWeight={600} fontSize="17px" color="#0DA574">
                READ BLOG
              </Text>
              <Image src={green} alt="dir" boxSize="16px" />
            </Flex>
          </Box>

          <Box display={"flex"} flexDir={"column"} gap={3}>
            <Image src={frame2} alt="dir" boxSize="100%" borderRadius="md" />

            <Box display="flex" alignItems="center" mt={2} gap={2}>
              <Text fontWeight={600} fontSize="14px" mr={2}>
                PRODUCTS
              </Text>
              <Image src={dot} alt="separator" boxSize="4px" mx={2} />
              <Text fontSize="12px" color="gray.500">
                AUGUST 30, 2021
              </Text>
            </Box>
            <Text fontWeight={700} fontSize={"26px"}>
              Understanding Digital Pirani Vacuum Gauges
            </Text>
            <Text fontWeight={400} fontSize={"16px"}>
              Learn about the features and benefits of digital Pirani vacuum
              gauges and their essential role in accurate vacuum measurement.
              This article delves into how these instruments are critical for
              optimizing processes.
            </Text>
            <Box height={"1px"} bgColor={"#C8C8C8"}></Box>
            <Flex align="center" gap={2}>
              <Text fontWeight={600} fontSize="17px" color="#0DA574">
                READ BLOG
              </Text>
              <Image src={green} alt="dir" boxSize="16px" />
            </Flex>
          </Box>

          <Box display={"flex"} flexDir={"column"} gap={3}>
            <Image src={frame3} alt="dir" boxSize="100%" borderRadius="md" />

            <Box display="flex" alignItems="center" mt={2} gap={2}>
              <Text fontWeight={600} fontSize="14px" mr={2}>
                Industry Insights
              </Text>
              <Image src={dot} alt="separator" boxSize="4px" mx={2} />
              <Text fontSize="12px" color="gray.500">
                AUGUST 30, 2021
              </Text>
            </Box>
            <Text fontWeight={700} fontSize={"26px"}>
              The Role of Vacuum Technology in Aerospace
            </Text>
            <Text fontWeight={400} fontSize={"16px"}>
              Examine the significance of vacuum technology in the aerospace
              industry and its impact on safety and efficiency. This article
              highlights how UVC's solutions contribute to advanced
              manufacturing and testing.
            </Text>
            <Box height={"1px"} bgColor={"#C8C8C8"}></Box>
            <Flex align="center" gap={2}>
              <Text fontWeight={600} fontSize="17px" color="#0DA574">
                READ BLOG
              </Text>
              <Image src={green} alt="dir" boxSize="16px" />
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
