import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import styles from "./page.module.scss";

export default function Home() {
  const parallax = useRef<IParallax>(null!);
  const hoa1 = "/imgs/home1.png";
  const hoa2 = "/imgs/home2.png";
  const hoa3 = "/imgs/home3.png";
  const hoa4 = "/imgs/home4.png";
  const conmeo = "/conmeo.png";

  return (
    <>
      <Head>
        <title>10 billion</title>
      </Head>

      <div className={styles.container}>
        <Parallax ref={parallax} pages={3}>
          <ParallaxLayer offset={1} speed={1} className={styles.section1} />
          <ParallaxLayer offset={2} speed={1} className={styles.section2} />

          <ParallaxLayer
            offset={0}
            speed={0}
            factor={3}
            className={styles.home}
          />

          <ParallaxLayer
            offset={1.3}
            speed={0.8}
            style={{ pointerEvents: "none" }}
          >
            <img
              src={conmeo}
              style={{ width: "15%", marginLeft: "70%" }}
              alt=""
            />
          </ParallaxLayer>

          {/* TIEU DE 1 */}
          <ParallaxLayer offset={0} speed={-0.3}>
            <img
              src={hoa2}
              style={{ display: "block", width: "50%", marginLeft: "50%" }}
            />
          </ParallaxLayer>
          <ParallaxLayer className={styles.intro} offset={0} speed={0.8}>
            <div>
              <h1>Hello</h1>
              <p>We are 10 million fans group, we are family</p>
              <div
                style={{ display: "flex", marginTop: "12px", flexWrap: "wrap" }}
              >
                <img
                  src="/imgs/quan1.png"
                  alt="quan"
                  style={{ width: 100, height: 100 }}
                />
                <img
                  src="/imgs/cuong1.png"
                  alt="cuong"
                  style={{ width: 100, height: 100 }}
                />
                <img
                  src="/imgs/tranphanh.png"
                  alt="tphanh"
                  style={{ width: 100, height: 100 }}
                />
                <img
                  src="/imgs/quyen5.png"
                  alt="quyen"
                  style={{ width: 100, height: 100 }}
                />
                <img
                  src="/imgs/ngoc5.png"
                  alt="ngoc"
                  style={{ width: 100, height: 100 }}
                />
              </div>
            </div>
          </ParallaxLayer>

          {/* Đoạn 1 */}
          <ParallaxLayer
            offset={1}
            speed={0.1}
            onClick={() => parallax.current.scrollTo(2)}
            className={styles.content1}
          >
            <div className={styles.images} style={{ maxHeight: "297px" }}>
              <div style={{ display: "flex", height: "50%" }}>
                <div style={{ minWidth: "50%" }}>
                  <img src="/imgs/tet20212.jpg" alt="" />
                </div>
                <div style={{ minWidth: "50%" }}>
                  {" "}
                  <img src="/imgs/tet20213.jpg" alt="" />
                </div>
              </div>

              <div style={{ display: "flex", height: "50%" }}>
                <div style={{ minWidth: "33%" }}>
                  <img src="/imgs/tet20214.jpg" alt="" />
                </div>
                <div style={{ minWidth: "33%" }}>
                  <img src="/imgs/tet20211.jpg" alt="" />
                </div>
                <div style={{ minWidth: "33%" }}>
                  <img src="/imgs/tet20216.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className={styles.time}>
              <p
                style={{
                  paddingTop: "20px",
                  fontSize: "110%",
                }}
              >
                Hồ tây - ngày 10 tháng 10 năm 2020
              </p>
              <p>{"Homestay hơi chật, nhưng vui =)))"}</p>
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
            <img
              src={hoa1}
              style={{ display: "block", width: "20%", marginLeft: "70%" }}
            />
            <img
              src={hoa3}
              style={{ display: "block", width: "20%", marginLeft: "40%" }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
            <img
              src={hoa4}
              style={{ display: "block", width: "10%", marginLeft: "10%" }}
            />
            <img
              src={hoa2}
              style={{ display: "block", width: "20%", marginLeft: "75%" }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
            <img
              src={hoa3}
              style={{ display: "block", width: "20%", marginLeft: "60%" }}
            />
            <img
              src={hoa4}
              style={{ display: "block", width: "25%", marginLeft: "30%" }}
            />
            <img
              src={hoa2}
              style={{ display: "block", width: "10%", marginLeft: "80%" }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
            <img
              src={hoa3}
              style={{ display: "block", width: "20%", marginLeft: "5%" }}
            />
            <img
              src={hoa1}
              style={{ display: "block", width: "15%", marginLeft: "75%" }}
            />
          </ParallaxLayer>

          <ParallaxLayer
            offset={2.5}
            speed={-0.4}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "none",
            }}
          >
            <img src={hoa1} style={{ width: "30%" }} />
          </ParallaxLayer>

          <ParallaxLayer
            offset={2}
            speed={-0.3}
            style={{
              backgroundSize: "80%",
              backgroundPosition: "center",
            }}
          />

          {/* Đoạn 2  */}
          <ParallaxLayer
            offset={2}
            speed={-0}
            onClick={() => parallax.current.scrollTo(0)}
            className={styles.content1}
          >
            <div className={styles.images}>
              <div style={{ display: "flex", height: "50%" }}>
                <div style={{ minWidth: "72.72%" }}>
                  <img src="/imgs/common5.jpg" alt="" />
                </div>

                <div style={{ minWidth: "27.27%" }}>
                  <img src="/imgs/hotay11.jpg" alt="" />
                </div>
              </div>

              <div style={{ display: "flex", height: "50%" }}>
                <div style={{ minWidth: "27.27%" }}>
                  <img src="/imgs/hotay5.jpg" alt="" />
                </div>
                <div style={{ minWidth: "72.72%" }}>
                  <img src="/imgs/hotay2.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className={styles.time}>
              <p
                style={{
                  paddingTop: "20px",
                  fontSize: "110%",
                }}
              >
                Hồ tây - ngày 10 tháng 10 năm 2020
              </p>
              <p>{"Homestay hơi chật, nhưng vui =)))"}</p>
            </div>
          </ParallaxLayer>
        </Parallax>
      </div>
    </>
  );
}
