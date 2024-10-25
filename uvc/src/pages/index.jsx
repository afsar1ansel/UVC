// import Image from "next/image";
// import localFont from "next/font/local";

import Comprehensive from "@/component/comprehensive";
import Designing from "@/component/Designing";
import Divider from "@/component/divider";
import Engeneered from "@/component/engeneered";
import Expertise from "@/component/expertise";
import Faq from "@/component/faq";
import Hero from "@/component/hero";
import Map from "@/component/map";
import Nav from "@/component/nav";



export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <Comprehensive />
      <Engeneered />
      <Map />
      <Designing />
      <Faq />
      <Divider />
      <Expertise />
    </div>
  )
}
