import styles from "@/styles/nav.module.css";
import logo from "@/img/logo.png";
import dir from "@/img/dir.png";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import { Show, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";


export default function Nav() {

const [isMobile, setIsMobile] = useState(false);
const { isOpen, onOpen, onClose } = useDisclosure(); 
useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  handleResize();

  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []);


  return (
    <>
      <Show when={!isMobile}>
        <div className={styles.container}>
          <div className={styles.leftSection}>
            <p className={styles.infoItem}>
              <span className={styles.icon}>&#128222;</span> 9886726920 /
              080-28367059
            </p>
            <p className={styles.middlePipe}>|</p>
            <p className={styles.infoItem}>
              <span className={styles.icon}>&#128205;</span> No. 57, 8th Cross,
              Doddanna Industrial Estate
            </p>
            <p className={styles.middlePipe}>|</p>
            <p className={styles.infoItem}>
              <span className={styles.icon}>&#128231;</span>{" "}
              support@uniquevacuum.co.in
            </p>
          </div>
          <div className={styles.rightSection}>
            <p>Follow Us:</p>
            <a href="#" className={styles.socialIcon}>
              <FaFacebookF />
            </a>
            <a href="#" className={styles.socialIcon}>
              <FaTwitter />
            </a>
            <a href="#" className={styles.socialIcon}>
              <FaLinkedinIn />
            </a>
            <a href="#" className={styles.socialIcon}>
              <FaYoutube />
            </a>
          </div>
        </div>
        <div className={styles.navbar}>
          <div className={styles.logoSection}>
            <Image src={logo} alt="logo" width={50} height={50} />
            <h1 className={styles.logoText}>UNC</h1>
          </div>
          <div className={styles.navOptions}>
            <div className={styles.navBtns}>
              <button className={styles.navBtn}>About</button>
              <button className={styles.navBtn}>Products +</button>
              <button className={styles.navBtn}>Services</button>
              <button className={styles.navBtn}>Industries Served</button>
              <button className={styles.navBtn}>Resources</button>
              <button className={styles.navBtn}>Download</button>
              <button className={styles.navBtn}>Contact</button>
            </div>
            <button className={styles.quoteBtn}>
              Get A Quote <Image src={dir} alt="logo" display="inline" />
            </button>
          </div>
        </div>
      </Show>

      <Show when={isMobile}>
        <DrawerRoot  >
          <DrawerTrigger>
            <button onClick={onOpen} className={styles.mobileNavBtn} >
              <GiHamburgerMenu />
            </button>{" "}
            {/* Button to open the drawer */}
          </DrawerTrigger>
          <DrawerBackdrop />
          <DrawerContent>
            <DrawerCloseTrigger>
              <button onClick={onClose}>Close</button>{" "}
              {/* Button to close the drawer */}
            </DrawerCloseTrigger>
            <DrawerHeader>
              <div className={styles.mobilelogoSection}>
                <Image src={logo} alt="logo" width={50} height={50} />
                <h1 className={styles.mobilelogoText}>
                  <span className={styles.firstLetter}>U</span>
                  <span className={styles.secondLetter}>N</span>
                  <span className={styles.thirdLetter}>C</span>
                </h1>
              </div>
              {/* <DrawerTitle /> */}
            </DrawerHeader>
            <DrawerBody>
              <div className={styles.mobilenavBtns}>
                <button className={styles.navBtn}>About</button>
                <button className={styles.navBtn}>Products +</button>
                <button className={styles.navBtn}>Services</button>
                <button className={styles.navBtn}>Industries Served</button>
                <button className={styles.navBtn}>Resources</button>
                <button className={styles.navBtn}>Download</button>
                <button className={styles.navBtn}>Contact</button>
              </div>
            </DrawerBody>
            <DrawerFooter>
              <button className={styles.quoteBtn}>
                Get A Quote <Image src={dir} alt="logo" display="inline" />
              </button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerRoot>
      </Show>
    </>
  );
}
