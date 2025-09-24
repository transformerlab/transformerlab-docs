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
import UserValidation from "./homepage-components/uservalidation.mdx";
import { FaArrowRight } from "react-icons/fa";
import CloudFeatures from "./homepage-components/CloudFeatures.tsx";

function HomepageHeader() {
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div id="background-holder"></div>
      <div className={clsx("container", styles.container)}>
        <GithubStar />
        {/* <h3 className={styles.announcement}>
          Introducing Transformer Lab Cloud - run distributed workloads across
          GPU clusters <a href="./blog/diffusion-support">Read More...</a>
        </h3> */}
        <h1 className={clsx("hero__title", styles.hero__title)}>
          The industry-leading training workspace for AI/ML teams.
        </h1>
        <h2 className={clsx("hero__subtitle", styles.hero__subtitle)}>
          Train, fine-tune and evaluate models with provenance, reproducibility
          and transparency. Plus, built-in GPU orchestration to coordinate
          training across any number of on-premise and cloud nodes.
        </h2>

        <div className={styles.buttons}>
          <div className="block">
            <Link
              className="button button--primary button--lg"
              to="/"
              style={{ display: "flex", alignItems: "center" }}
            >
              Join our Cloud Beta &nbsp;
              <FaArrowRight />
            </Link>
          </div>
          &nbsp;&nbsp;
          <div>
            or <a href="docs/local/download">Download our Local App</a>
          </div>
        </div>

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
