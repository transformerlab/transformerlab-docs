import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Screenshot from "./img/TFLDemoMarch25_HQ_2.mp4";
import styles from "./index.module.css";
import Content from "./homepage-components/homepage-content.mdx";
import CloudFeatures from "./homepage-components/CloudFeatures";
import "./style.css";
import GithubStar from "../components/GithubStar";
import MultiNode from "./img/multinode.png";
import Lattice from "./img/lattice.png";

function HomepageHeader() {
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div id="background-holder"></div>
      <div className={clsx("container", styles.container)}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            flexDirection: "row",
          }}
        >
          <h1 className={clsx("hero__title", styles.hero__title)}>
            Transformer Lab Cloud
          </h1>
          <img src={MultiNode} style={{ maxHeight: "200px" }} />
        </div>
        <h2 className={clsx("hero__subtitle", styles.hero__subtitle)}>
          <ol>
            <li>
              Researchers define jobs and requirements in a simple YAML file.
            </li>
            <li>
              The system automatically provisions the required infrastructure on
              your compute.
            </li>
            <li>
              Jobs are queued and executed, with real-time monitoring, failure
              detection, checkpointing, and logging.
            </li>
          </ol>
          Researchers can focus on their work, while Transformer Lab Cloud
          manages quotas, networking, and infrastructure.
        </h2>
        <div className={clsx("video_container", styles.video_container)}>
          <img src={Lattice} />
        </div>
        <div className={clsx(styles.embedded_markdown)}>
          <div style={{ margin: "1rem auto", textAlign: "center" }}>
            <Link
              className="button button--primary button--lg"
              to="/docs/download"
            >
              Join the Beta
            </Link>
          </div>
          <CloudFeatures />
        </div>
        <div
          className={styles.buttons}
          style={{ textAlign: "center", justifyContent: "center" }}
        >
          <div className="block">
            <Link
              className="button button--primary button--lg"
              to="/docs/download"
            >
              Join the Beta
            </Link>
          </div>
          &nbsp;&nbsp;
          <div>
            or <a href="cloud/docs/intro">Learn More</a>
          </div>
        </div>
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
