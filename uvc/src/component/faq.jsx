import { Box, Button, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import { Stack, Text } from "@chakra-ui/react";
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "@/components/ui/accordion";
import { useState } from "react";

import { GrFormAdd, GrFormSubtract } from "react-icons/gr";

const items = [
  {
    value: "first-item",
    title: "What types of vacuum systems do you provide?",
    cont: "We serve diverse industries, including aerospace, automotive, electronics, pharmaceuticals, and manufacturing, providing tailored vacuum solutions to meet specific needs.",
  },
  {
    value: "second-item",
    title: "What industries do you serve?",
    cont: "We serve diverse industries, including aerospace, automotive, electronics, pharmaceuticals, and manufacturing, providing tailored vacuum solutions to meet specific needs.",
  },
  {
    value: "third-item",
    title: "Do you offer after-sales support?",
    cont: "We serve diverse industries, including aerospace, automotive, electronics,nazca, and manufacturing, providing tailored vacuum solutions to meet specific needs.",
  },
  {
    value: "fourth-item",
    title: "Are your products certified for quality?",
    cont: "We serve diverse industries, including aerospace, automotive, electronics, nazca, and manufacturing, providing tailored vacuum solutions to meet specific needs.",
  },
  {
    value: "fifth-item",
    title: "How can I request a consultation or quote?",
    cont: "We serve diverse industries, including aerospace, automotive, electronics, nazca, and manufacturing, providing tailored vacuum solutions to meet specific needs.",
  },
];

export default function Faq(){

  const [value, setValue] = useState(["second-item"]);
     const [isOpen, setIsOpen] = useState({
       question1: false,
       question2: false,
       question3: false,
     });
  

     const toggleAccordion = (question) => {
       for (let i in isOpen) {
         if (i !== question) {
           isOpen[i] = false;
         }
       }
       setIsOpen({
         ...isOpen,
         [question]: !isOpen[question],
       });
     };

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
          alignItems="center"
          maxWidth={"90%"}
          padding={"1rem"}
          // border={"1px solid #000"}
          width={"100%"}
        >
          <Flex
            className={"leftSection"}
            flexDir={"column"}
            gap={5}
            width={"40%"}
            // border={"1px solid red"}
            justifyContent={"center"}
            alignItems={"center"}
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
                Addressing Your Concerns
              </Text>
            </Box>
            <Heading fontWeight={700} fontSize={"48px"} lineHeight={1}>
              Can’t Find Your Answer?
              <span style={{ color: "#0DA574" }}>Contact Us</span>
            </Heading>
            <Text fontWeight={400} fontSize={"18px"}>
              We’re here to help! If you don’t see your question, feel free to
              contact us directly.
            </Text>
            <Box display={"flex"} alignItems={"start"} width={"100%"}>
              <Button
                padding={"1rem 2rem"}
                bgColor={"#FFC631"}
                fontWeight={600}
                color={"black"}
              >
                OUR PRODUCTS
              </Button>
            </Box>
          </Flex>
          <Box width={"50%"}>
            <AccordionRoot collapsible defaultValue={["b"]}>
              <SimpleGrid spacing={6} gap={5} columns={{ sm: 1, md: 1, lg: 1 }}>
                {items.map((item) => (
                  <Box
                    key={item.value}
                    border={isOpen[item.value] ? "1px solid #0DA574" : "1px solid #E5E5E5"}
                    padding={"0.5rem"}
                  >
                    <AccordionItem>
                      <h2>
                        <AccordionItemTrigger
                          bg={"white"}
                          onClick={() => toggleAccordion(item.value)}
                        >
                          <Box
                            as="b"
                            flex="1"
                            textAlign="left"
                            fontWeight={500}
                            fontSize="1.3rem"
                            color={isOpen[item.value] ? "#0DA574" : "black"}
                          >
                            {item.title}
                          </Box>
                          {/* {isOpen[item.value] ? (
                            <GrFormSubtract color="#12406f" />
                          ) : (
                            <GrFormAdd color="black" />
                          )} */}
                        </AccordionItemTrigger>
                      </h2>
                      {isOpen[item.value] && (
                        <AccordionItemContent
                          pb={4}
                          fontSize="1.3rem"
                          width={"100%"}
                          color={"#202C38"}
                        >
                          {item.cont}
                        </AccordionItemContent>
                      )}
                    </AccordionItem>
                  </Box>
                ))}
              </SimpleGrid>
            </AccordionRoot>
          </Box>
        </Box>
      </Flex>
    );
}


