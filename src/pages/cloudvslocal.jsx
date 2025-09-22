import Button from "@site/src/components/Button";
import { useHistory } from "@docusaurus/router";
import React from "react";

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
        <h1 className="bitcount-grid-double-heading">
          <span style={{ color: "var(--ifm-color-primary)" }}>
            A smarter way to train models
          </span>
        </h1>
        <p>
          Whether you’re a research lab with racks of GPUs, a startup shipping AI products or a solo AI/ML engineer, you face the same friction: fragmented tools, brittle training scripts and limited compute budgets. Transformer Lab streamlines every part of your workflow so you can focus on the research.
        </p>

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
        onClick={() => history.push("/local")}
        onMouseEnter={() => handleMouseEnter(localVideoRef, setShowLocalVideo)}
        onMouseLeave={() => handleMouseLeave(localVideoRef)}
      >
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <video
            ref={localVideoRef}
            src={require("./img/singlenode.mov").default}
            width={300}
            muted
            playsInline
            loop
            poster={require("./img/singlenode.png").default}
          />
        </div>
        <p>
          For individuals
        </p>
        <h1 className="bitcount-grid-double-heading">
          <span style={{ color: "var(--ifm-color-primary)" }}>
            Transformer Lab Local
          </span>
        </h1>
        <p>
          A local workspace for training, fine-tuning, evaluating and interacting with text, image and voice models. Open source including a Windows, MacOS and Linux app with training and inference across NVIDIA, AMD and Apple silicon.
        </p>
        <span style={{ textDecoration: "none", marginTop: "20px" }}>
          <a className="button button--primary button--lg">Learn More</a>
        </span>
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
        onClick={() => history.push("/cloud")}
        onMouseEnter={() => handleMouseEnter(cloudVideoRef, setShowCloudVideo)}
        onMouseLeave={() => handleMouseLeave(cloudVideoRef)}
      >
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <video
            ref={cloudVideoRef}
            src={require("./img/multinode.mov").default}
            width={300}
            muted
            playsInline
            loop
            poster={require("./img/multinode.png").default}
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
          A cloud based training workspace plus modern GPU orchestration. Manage your entire team’s training jobs across any number of on-premise and cloud nodes. Includes machine reservation, job coordination across nodes, failover handling, progress tracking, quota enforcement and reporting. Built on SkyPilot, Ray and kubernetes.          </p>
        <span style={{ textDecoration: "none", marginTop: "20px" }}>
          <a className="button button--primary button--lg">Learn More</a>
        </span>
      </div>
    </div>

  );
}
