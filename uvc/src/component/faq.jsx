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

 const [value, setValue] = useState([""]);

function set(item) {
  setValue(item);
  console.log({value,item});
}

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
            <AccordionRoot
              collapsible
              value={value}
              onValueChange={(e) => set(e.value)}
              // border={"1px solid red"}
              display={"flex"}
              flexDirection={"column"}
              gap={5}
            >
              {items.map(
                (item, index) => (
                  console.log({ item }),
                  (
                    <AccordionItem
                      key={index}
                      value={item.value}
                      border={
                        value.join(",") === item.value
                          ? "1px solid #0DA574"
                          : "1px solid #C8C8C8"
                      }
                      padding={"0.5rem"}
                    >
                      <AccordionItemTrigger
                        color={
                          value.join(",") === item.value ? "#0DA574" : "black"
                        }
                        fontWeight={500}
                      >
                        {item.title}
                      </AccordionItemTrigger>
                      <AccordionItemContent>{item.cont}</AccordionItemContent>
                    </AccordionItem>
                  )
                )
              )}
            </AccordionRoot>
          </Box>
        </Box>
      </Flex>
    );
}


