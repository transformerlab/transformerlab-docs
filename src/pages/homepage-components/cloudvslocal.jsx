import Button from "@site/src/components/Button";
import { useHistory } from "@docusaurus/router";
import React from "react";
import Link from "@docusaurus/Link";
import styles from "../index.module.css";



export default function CloudVSLocal() {
  const history = useHistory();
  const localVideoRef = React.useRef(null);
  const cloudVideoRef = React.useRef(null);
  const [showLocalVideo, setShowLocalVideo] = React.useState(false);
  const [showCloudVideo, setShowCloudVideo] = React.useState(false);

  // Browser detection for Chrome
  const isChrome =
    typeof navigator !== "undefined" &&
    /Chrome/.test(navigator.userAgent) &&
    /Google Inc/.test(navigator.vendor);

  const handleMouseEnter = (ref, setShowVideo) => {
    setShowVideo(true);
    if (ref.current) {
      ref.current.play();
    }
  };
  const handleMouseLeave = (ref) => {
    if (ref.current) {
      ref.current.pause();
      ref.current.currentTime = 1;
    }
  };

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
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
        }}
        onClick={() => history.push("/docs/local/download")}
        onMouseEnter={() => handleMouseEnter(localVideoRef, setShowLocalVideo)}
        onMouseLeave={() => handleMouseLeave(localVideoRef)}
      >
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <video
            ref={localVideoRef}
            src={require("../img/singlenode.mov").default}
            width={300}
            muted
            playsInline
            loop
            poster={require("../img/singlenode.png").default}
          />
        </div>
        <p>
          For Individuals
        </p>
        <h1 className="bitcount-grid-double-heading">
          <span style={{ color: "var(--ifm-color-primary)" }}>
            Transformer Lab Local
          </span>
        </h1>
        <p>
          Train, test, and eval models (LLMs, Distillation, Audio) on a single
          node.
        </p>
        <div className={styles.buttons} style={{ marginTop: "2rem" }}>
          <div className="block">
            <a href="/docs/local/download" className="button button--primary button--lg">Download Now</a>
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
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
        }}
        onClick={() => history.push("/")}
        onMouseEnter={() => handleMouseEnter(cloudVideoRef, setShowCloudVideo)}
        onMouseLeave={() => handleMouseLeave(cloudVideoRef)}
      >
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <video
            ref={cloudVideoRef}
            src={require("../img/multinode.mov").default}
            width={300}
            muted
            playsInline
            loop
            poster={require("../img/multinode.png").default}
          />
        </div>
        <p>
          For teams
        </p>
        <h1 className="bitcount-grid-double-heading">
          <span style={{ color: "var(--ifm-color-primary)" }}>
            Transformer Lab Cloud
          </span>{" "}
          with GPU Orchestration
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
