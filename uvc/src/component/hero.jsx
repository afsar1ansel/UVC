import style from "../styles/hero.module.css";
import man from "../img/man.png";
import dir from "../img/dir.png";
import vector from "../img/vector.png";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

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
      {!isMobile ? (
        <div className={style.hero}>
          <div className={style.linetext}>
            <div className={style.line}></div>
            <p className={style.text}>
              INNOVATING PRECISION, ELEVATING STANDARDS
            </p>
          </div>
          <div className={style.containbox}>
            <div className={style.contains}>
              <h1>Revolutionizing Vacuum Technology since 2001</h1>
              <p>
                Expert solutions for all your high vacuum engineering needs.
              </p>
              <div className={style.containBtns}>
                <button className={style.discover}>
                  DISCOVER MORE <Image src={dir} alt="logo" />
                </button>
                <button className={style.services}>
                  OUR SERVICES <Image src={vector} alt="logo" />
                </button>
              </div>
              <div className={style.midBoxes}>
                <div>
                  <p>20+</p>
                  <p>YEARS OF EXPERIENCE</p>
                </div>
                <div>
                  <p>150+</p>
                  <p>SUCCESSFUL INSTALLATIONS</p>
                </div>
                <div>
                  <p>50+</p>
                  <p>GLOBAL PARTNERS</p>
                </div>
              </div>
            </div>
            <div className={style.manImg}>
              <Image src={man} alt="logo" />
            </div>
          </div>
        </div>
      ) : (
        <div className={style.mobileContent}>
          <div className={style.mobilelinetext}>
            <p className={style.mobiletext}>
              INNOVATING PRECISION, ELEVATING STANDARDS
            </p>
            <div className={style.mobileline}></div>
          </div>
          <div className={style.mobilecontain}>
            <h1>Revolutionizing Vacuum Technology since 2001</h1>
            <p>Expert solutions for all your high vacuum engineering needs.</p>
            <div className={style.mobilecontainBtns}>
              <button className={style.discover}>
                DISCOVER MORE <Image src={dir} alt="logo" />
              </button>
              <button className={style.services}>
                OUR SERVICES <Image src={vector} alt="logo" />
              </button>
            </div>
            <div className={style.mobilemidBoxes}>
              <div>
                <p>20+</p>
                <p>YEARS OF EXPERIENCE</p>
              </div>
              <div>
                <p>150+</p>
                <p>SUCCESSFUL INSTALLATIONS</p>
              </div>
              <div>
                <p>50+</p>
                <p>GLOBAL PARTNERS</p>
              </div>
            </div>
            <div className={style.mobilemanImg}>
              <Image src={man} alt="logo" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
