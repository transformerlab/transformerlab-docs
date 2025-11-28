import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Screenshot from "./img/cloud-screenshot.png";
import Oscilloscope from "./img/o8.mp4";
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
  return (
    <div class="container">
      <div class="row">
        <div class="col col--4">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                height: "100%",
                width: "100%",
                minWidth: "250px",
                maxWidth: "300px",
                alignItems: "center",
                marginTop: "10px",
                mask: "url(/img/logo2.svg) no-repeat center / contain",
                minHeight: "150px",
              }}
            >
              <div
                style={{
                  backgroundColor: "black",
                  width: "100%",
                  height: "100%",
                }}
              >
                <video
                  src={Oscilloscope}
                  autoplay="true"
                  muted="true"
                  loop="true"
                  playsinline="true"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "none",
                    opacity: 1,
                  }}
                ></video>
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
            Execute modern AI experiments while using your own compute and
            frameworks. Transformer Lab provides the unified research layer that
            tracks, organizes, and visualizes your experiments without locking
            you into a rigid stack.
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

          <section className={styles.bigWhy}>
            <BigWhy />
          </section>
          <CloudVSLocalPage />
          <CloudFeatures />
          <AllFeatures />

          <UserValidation />
        </div>
      </div>
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
