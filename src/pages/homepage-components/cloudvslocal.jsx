import Button from "@site/src/components/Button";
import { useHistory } from "@docusaurus/router";
import React from "react";
import Link from "@docusaurus/Link";
import styles from "../index.module.css";



export default function CloudVSLocal() {
  const history = useHistory();

  // Browser detection for Chrome
  const isChrome =
    typeof navigator !== "undefined" &&
    /Chrome/.test(navigator.userAgent) &&
    /Google Inc/.test(navigator.vendor);


  return (

    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        gap: "20px",
        flexWrap: "wrap",
      }}
      className="documentation-flex-container"
    >
      <div
        style={{
          // border: "2px solid var(--ifm-color-primary-darkest)",
          borderRadius: "10px",
          padding: "20px",
          flex: 1,
          minWidth: "300px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <video
            src={require("../img/singlenode.mov").default}
            width={300}
            muted
            playsInline
            loop
            autoPlay
            poster={require("../img/singlenode.png").default}
          />
        </div>
        <p>
          For Individuals
        </p>
        <h1 className="bitcount-grid-double-heading">
          <span style={{ color: "var(--ifm-color-primary)" }}>
            Transformer Lab Local
          </span> for Single Node Workloads
        </h1>
        <p>
          Train, test, and eval models (LLMs, Distillation, Audio) on a single
          node.
        </p>
        <div className={styles.buttons} style={{ marginTop: "2rem" }}>
          <div className="block">
            <a href="/docs/download" className="button button--primary button--lg">Download Now</a>
          </div>
        </div>
      </div>
      <div
        style={{
          // border: "2px solid var(--ifm-color-primary-darkest)",
          borderRadius: "10px",
          padding: "20px",
          flex: 1,
          minWidth: "300px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <video
            src={require("../img/multinode.mov").default}
            width={300}
            muted
            playsInline
            loop
            autoPlay
            poster={require("../img/multinode.png").default}
          />
        </div>
        <p>
          For teams
        </p>
        <h1 className="bitcount-grid-double-heading">
          <span style={{ color: "var(--ifm-color-primary)" }}>
            Transformer Lab
          </span>{" "}
          GPU Orchestration
        </h1>
        <p>
          Run workloads on multiple nodes with multi-cloud job
          scheduling, experiment management, and monitoring.
        </p>
        <span style={{ textDecoration: "none", marginTop: "2rem" }}>
          <a href="/beta.html" className="button button--primary button--lg">Join the Beta</a>
        </span>
      </div>
    </div>

  );
}
