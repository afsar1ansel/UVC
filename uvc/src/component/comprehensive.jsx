import style from "@/styles/comperhensive.module.css";
import { Box, Grid, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import green from "@/img/vector_green.png";
export default function Comprehensive() {
    return (
      <div className={style.container}>
        <div className={style.box}>
          <div className={style.lineBox}>
            <div className={style.line}></div>
            <p>LEADING WITH PRECISION</p>
          </div>
          <div className={style.h1}>
            <h1>
              Comprehensive Vacuum Technology{" "}
              <span className={style.green}>Solutions</span>
            </h1>
          </div>
          <Grid templateColumns="repeat(3, 1fr)" gap={6} marginTop={5} >
            <Box className={style.box1}>
              <Heading className={style.number}>01</Heading>
              <Heading className={style.heading}>
                ISO 9001-2015 Accredited for Quality
              </Heading>
              <Text className={style.text1}>
                We deliver high-quality solutions, certified by ISO 9001-2015,
                ensuring excellence across all processes and products.
              </Text>
              <Text className={style.text2}>
                DETAILS <Image src={green} alt="dir" />{" "}
              </Text>
            </Box>
            <Box className={style.box1}>
              <Heading className={style.number}>02</Heading>
              <Heading className={style.heading}>
                Specialized in Helium Leak Testing Across India
              </Heading>
              <Text className={style.text1}>
                Our expertise in helium leak testing has led to over 150
                installations across India, ensuring precise and reliable
                systems
              </Text>
              <Text className={style.text2}>
                DETAILS <Image src={green} alt="dir" />{" "}
              </Text>
            </Box>
            <Box className={style.box1}>
              <Heading className={style.number}>03</Heading>
              <Heading className={style.heading}>
                In-House Design, Manufacturing & Support
              </Heading>
              <Text className={style.text1}>
                Our team ensures seamless design, production, and ongoing
                support, providing end-to-end satisfaction for every solution
              </Text>
              <Text className={style.text2}>
                DETAILS <Image src={green} alt="dir" />{" "}
              </Text>
            </Box>
            <Box className={style.box1}>
              <Heading className={style.number}>04</Heading>
              <Heading className={style.heading}>
                Global Partnerships with SOLBERG & LAZZERO
              </Heading>
              <Text className={style.text1}>
                As partners of SOLBERG and LAZZERO, we offer global expertise
                and world-class filtration and helium leak testing solutions.
              </Text>
              <Text className={style.text2}>
                DETAILS <Image src={green} alt="dir" />{" "}
              </Text>
            </Box>
            <Box className={style.box1}>
              <Heading className={style.number}>05</Heading>
              <Heading className={style.heading}>
                Experts in Digital Pirani Vacuum Gauges
              </Heading>
              <Text className={style.text1}>
                Our advanced Pirani vacuum gauges deliver precise measurements,
                offering various configurations for diverse industry needs.
              </Text>
              <Text className={style.text2}>
                DETAILS <Image src={green} alt="dir" />{" "}
              </Text>
            </Box>
            <Box className={style.box1}>
              <Heading className={style.number}>06</Heading>
              <Heading className={style.heading}>
                Custom Vacuum Solutions for Various Industries
              </Heading>
              <Text className={style.text1}>
                We design tailored vacuum systems for industries like aerospace
                and automotive, ensuring optimal performance and reliability.
              </Text>
              <Text className={style.text2}>
                DETAILS <Image src={green} alt="dir" />{" "}
              </Text>
            </Box>
          </Grid>
        </div>
      </div>
    );
}