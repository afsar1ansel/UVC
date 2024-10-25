import { Box, Text } from "@chakra-ui/react";

import apple from "@/img/apple.png";
import AT from "@/img/AT&T.png";
import Meta from "@/img/Meta.png";
import McD from "@/img/McD.png";
import Sony from "@/img/Sony.png";

import style from "@/styles/divider.module.css";
import Image from "next/image";
export default function Divider() {
  return (
    <Box className={style.dividerBox}>
      <Box className={style.divider}>
        <Text fontWeight={400} fontSize={"16px"}>
          Government & Industry Partners
        </Text>
        <Box className={style.imagesBox}>
          <Box className={style.images}>
            <Image src={apple} alt="dir" />
          </Box>
          <Box className={style.images}>
            <Image src={AT} alt="dir" />
          </Box>
          <Box className={style.images}>
            <Image src={Meta} alt="dir" />
          </Box>
          <Box className={style.images}>
            <Image src={McD} alt="dir" />
          </Box>
          <Box className={style.images}>
            <Image src={Sony} alt="dir" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
