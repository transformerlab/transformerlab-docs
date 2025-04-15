import clsx from "clsx";
import React from "react";
import styles from "./features.module.css";

export default function FeatureCard({ video, text, flip = false }) {
  return (
    <div
      className={clsx("feature-card", styles.featureCard)}
      style={{ flexDirection: flip ? "row-reverse" : "row" }}
    >
      <div className={clsx(styles.featureCardVideo)}>{video}</div>
      <div className={clsx("featureCard", styles.featureCardText)}>{text}</div>
    </div>
  );
}
