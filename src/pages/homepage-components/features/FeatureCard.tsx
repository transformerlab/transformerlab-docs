import clsx from "clsx";
import React from "react";
import styles from "./features.module.css";

export default function FeatureCard({ video, text, flip = false }) {
  return (
    <div
      className={clsx("feature-card row", styles.featureCard)}
      style={{ flexDirection: flip ? "row-reverse" : "row" }}
    >
      <div className={clsx("col col--7", styles.featureCardVideo)}>{video}</div>
      <div className={clsx("col col--5 featureCard", styles.featureCardText)}>
        {text}
      </div>
    </div>
  );
}
