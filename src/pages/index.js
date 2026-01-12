import React, { useState, useEffect } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
import Content from "./homepage-components/homepage-content.mdx";
import AllFeatures from "./homepage-components/AllFeatures";
import "./style.css";
import GithubStar from "../components/GithubStar";
import BigWhy from "./homepage-components/bigwhy.mdx";
import CloudVSLocalPage from "./homepage-components/cloudvslocal.jsx";
import UserValidation from "./homepage-components/uservalidation.jsx";
import { FaArrowRight } from "react-icons/fa";

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
            id="milkyway-outer-container"
            style={{
              display: "flex",
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
                  src="/img/milkyway.webp"
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
            Transformer Lab is a Machine Learning Research Platform designed for
            frontier AI/ML workflows. Local, on-prem, or in the cloud. Open
            source.
          </h2>
          <div className={styles.buttons}>
            <div className="block">
              <Link
                to="/docs/install/"
                className="button button--primary button--lg"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "fit-content",
                }}
              >
                Get Started Now &nbsp;
                <FaArrowRight />
              </Link>
              <div style={{ marginTop: "1rem", marginLeft: "0.3rem" }}>
                or{" "}
                <a href="/beta.html" style={{ fontWeight: 600 }}>
                  Join our Beta to get access to our plaform for research labs
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col col--12">
          <div className="spacer" />

          <video
            src="https://gallery.transformerlab.net/transformerlab-for-teams-video01.webm"
            className={clsx("video_container", styles.video_container)}
            autoPlay
            muted
            loop
            style={{ width: "100%" }}
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
