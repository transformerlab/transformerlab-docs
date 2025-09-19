import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Screenshot from "./img/TFLDemoMarch25_HQ_2.mp4";
import styles from "./index.module.css";
import Content from "./homepage-components/homepage-content.mdx";
import AllFeatures from "./homepage-components/AllFeatures";
import "./style.css";
import GithubStar from "../components/GithubStar";
import CloudVSLocalPage from "./cloudvslocal.mdx";
import UserValidation from "./homepage-components/uservalidation.mdx";
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
          The industry-leading open source workspace for AI/ML teams.
        </h1>
        <h2 className={clsx("hero__subtitle", styles.hero__subtitle)}>
          Train, fine-tune and evaluate models with provenance, reproducibility
          and transparency. Effortlessly orchestrate training jobs across any
          number of on-premise and cloud GPUs. More experiments. Better models.
          Less GPU waste.
        </h2>
        <div
          style={{
            width: "100%",
            height: "400px",
            border: "1px solid blue",
            borderRadius: "8px",
            overflow: "hidden",
            backgroundColor: "#ccc",
          }}
        >
          Screenshot
        </div>
        <CloudVSLocalPage />
        {/* <div
          className={styles.buttons}
          style={{ textAlign: "center", justifyContent: "center" }}
        >
          <div className="block">
            <Link
              className="button button--primary button--lg"
              to="/docs/download"
            >
              Download Now ↓
            </Link>
          </div>
          &nbsp;&nbsp;
          <div>
            or <a href="docs/intro">Learn More</a>
          </div>
        </div> */}
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
