import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Screenshot from "/img/screenshot.png";

import styles from "./index.module.css";

import Content from "./homepage-content.mdx";

import "./style.css";
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
            fontWeight: "400",
          }}
        >
          <img
            src="/img/logo2.svg"
            style={{ height: "1.2em", marginRight: "10px" }}
          />
          {siteConfig.title}
        </h1>
        <h2 className={clsx("hero__subtitle ", styles.hero__subtitle)}>
          {siteConfig.tagline}
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
        <img src={Screenshot} width="80%" />
        <div className={styles.embedded_markdown}>
          <article>
            <Content />
          </article>
        </div>
        <br />
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
