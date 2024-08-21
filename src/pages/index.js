import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Flask from "@site/static/img/flask.png";
import Screenshot from "/img/screenshot.png";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className={clsx("container", styles.container)}>
        <h1
          className="hero__title"
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img src={Flask} style={{ height: "1em" }} />
          {siteConfig.title}
        </h1>
        <h2 className={clsx("hero__subtitle ", styles.hero__subtitle)}>
          {siteConfig.tagline}
        </h2>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/download"
          >
            Download Now ↓
          </Link>
          &nbsp;&nbsp;
          <div>
            or <a href="docs/intro">Learn More</a>
          </div>
        </div>
        <img src={Screenshot} width="80%" />
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
