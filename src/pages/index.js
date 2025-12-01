import React, { useState, useEffect } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Screenshot from "./img/cloud-screenshot.png";
import Milkyway from "./img/milkyway.webp";
import styles from "./index.module.css";
import Content from "./homepage-components/homepage-content.mdx";
import AllFeatures from "./homepage-components/AllFeatures";
import "./style.css";
import GithubStar from "../components/GithubStar";
import BigWhy from "./homepage-components/bigwhy.mdx";
import CloudVSLocalPage from "./homepage-components/cloudvslocal.jsx";
import UserValidation from "./homepage-components/uservalidation.jsx";
import { FaArrowRight } from "react-icons/fa";
import CloudFeatures from "./homepage-components/CloudFeatures.tsx";

function HomepageHeader() {
  const [rotation, setRotation] = useState(0);

  // Configurable constants
  const rotationSpeed = 0.03; // Degrees per frame
  const rotationPoint = "50% 50%"; // Point of rotation

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + rotationSpeed) % 360);
    }, 16); // ~60 FPS
    return () => clearInterval(interval);
  }, []);

  return (
    <div class="container homepage">
      <div class="row" style={{ paddingTop: "1.5rem" }}>
        <div class="col col--4">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              overflow: "hidden",
            }}
          >
            <div
              id="milkyway-container"
              style={{
                display: "flex",
                alignItems: "center",
                mask: "url(/img/logo2.svg) no-repeat center / contain",
                overflow: "none",
              }}
            >
              <div
                style={{
                  backgroundColor: "black",
                }}
              >
                <img
                  src={Milkyway}
                  style={{
                    maxWidth: "none",
                    objectFit: "none",
                    opacity: 1,
                    translate: "-800px -10%",
                    transformOrigin: rotationPoint, // Set rotation point
                    transform: `rotate(${rotation}deg)`, // Apply rotation
                    xborder: "15px solid red",
                  }}
                ></img>
              </div>
            </div>
          </div>
        </div>
        <div class="col col--8">
          <h1 className={clsx("hero__title", styles.hero__title)}>
            We&rsquo;re here for the{" "}
            <span style={{ color: "#666" }}>Era of Research.</span>
          </h1>
          <h2 className={clsx("hero__subtitle", styles.hero__subtitle)}>
            Designed for ML researchers. With Transformer Lab, reliably training
            large AI / ML models has never been easier. Local or in the cloud.
            Open source.
          </h2>
          <div className={styles.buttons}>
            <div className="block">
              <a
                className="button button--primary button--lg"
                href="/beta.html"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textWrap: "auto",
                  backgroundColor: "var(--ifm-color-primary)",
                  border: "1px solid var(--ifm-color-primary-dark)",
                  color: "var(--ifm-button-color)",
                }}
              >
                Sign up for Multi GPU Beta &nbsp;
                <FaArrowRight />
              </a>
              <br />
              <div>
                or <a href="docs/download">Download Transformer Lab Local</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col col--12">
          <div className="spacer" />

          <img
            src={Screenshot}
            className={clsx("video_container", styles.video_container)}
          />
        </div>
      </div>
      <div class="row">
        <div class="col col--12">
          <section className={styles.bigWhy}>
            <BigWhy />
          </section>
        </div>
      </div>
      {/* <div class="row">
        <CloudVSLocalPage />
      </div> */}
      <CloudFeatures />
      <AllFeatures />
      <UserValidation />
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Documentation for Transformer Lab, the open source platform for AI/ML researchers."
    >
      <HomepageHeader />
      <main>
        <div className="container"></div>
      </main>
    </Layout>
  );
}
