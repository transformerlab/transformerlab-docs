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
function HomepageHeader() {
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div id="background-holder"></div>
      <div className={clsx("container", styles.container)}>
        <GithubStar />
        <h3 className={styles.announcement}>
          We now support Inference and Training for Diffusion Models!{" "}
          <a href="./blog/diffusion-support">Read More...</a>
        </h3>
        <h1 className={clsx("hero__title", styles.hero__title)}>
          The Open Source Platform for Training Advanced AI Models
        </h1>
        <h2 className={clsx("hero__subtitle", styles.hero__subtitle)}>
          With Transformer Lab, researchers, ML engineers, and developers can
          collaborate to build, study, and evaluate AI models—with provenance,
          reproducibility, evals, and transparency included.
        </h2>
        <div className={styles.buttons}>
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
        </div>
        <div className={clsx("video_container", styles.video_container)}>
          <video width="100%" autoPlay loop muted>
            <source src={Screenshot} type="video/mp4" />
          </video>
        </div>
        <div className={clsx(styles.embedded_markdown)}>
          <div style={{ margin: "2rem auto", textAlign: "center" }}>
            <Content />
          </div>
          <AllFeatures />
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
              Download Now ↓
            </Link>
          </div>
          &nbsp;&nbsp;
          <div>
            or <a href="docs/intro">Learn More</a>
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
