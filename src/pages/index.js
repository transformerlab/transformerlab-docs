import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Screenshot from "./img/cloud-screenshot.png";
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
    <header className={clsx("hero", styles.heroBanner)}>
      <div id="background-holder"></div>
      <div className={clsx("container", styles.container)}>
        <GithubStar />
        <h3 className={styles.announcement}>
          Introducing Transformer Lab GPU Orchestration, a modern SLURM replacement to run workloads across GPU clusters &nbsp;&nbsp;
          <a href="./blog/gpu">Read More...</a>
        </h3>
        <h1 className={clsx("hero__title", styles.hero__title)}>
          The essential open source workspace for AI/ML teams.
        </h1>
        <h2 className={clsx("hero__subtitle", styles.hero__subtitle)}>
          From GPU orchestration to training, fine-tuning and evaluating models
          across any infrastructure, Transformer Lab is the next generation
          platform for AI/ML research.
        </h2>

        <div className={styles.buttons}>
          <div className="block">
            <a
              className="button button--primary button--lg"
              href="/beta.html"
              style={{
                display: "flex",
                alignItems: "center",
                textWrap: "auto",
                backgroundColor: "white",
                border: "1px solid var(--ifm-color-primary-dark)",
                color: "var(--ifm-color-primary-dark)",
              }}
            >
              Join the Beta for Transformer Lab GPU Orchestration &nbsp;
              <FaArrowRight />
            </a>
          </div>
        </div>
        <div>
          or <a href="docs/download">Download Transformer Lab Local</a>
        </div>
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
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Documentation for LLM Toolkit, Transformer Lab"
    >
      <HomepageHeader />
      <main>
        <div className="container"></div>
      </main>
    </Layout>
  );
}
