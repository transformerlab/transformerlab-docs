import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Screenshot from "./img/TFLDemoMarch25_HQ_2.mp4";
import styles from "./index.module.css";
import Content from "./homepage-content.mdx";
import FullLogo from "/img/Transformer-Lab_Logo.svg";

import "./style.css";
import GithubStar from "../components/GithubStar";
function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className={clsx("container", styles.container)}>
        <GithubStar />
        <h1
          className="hero__title comfortaa-font"
          style={{
            display: "flex",
            alignItems: "center",
            fontWeight: "400",
          }}
        >
          <FullLogo
            style={{
              height: "1.1em",
              marginRight: "0px",
            }}
          />
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
        <div className={clsx("video_container", styles.video_container)}>
          <video width="100%" autoPlay loop muted>
            <source src={Screenshot} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className={clsx(styles.embedded_markdown, "container")}>
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
