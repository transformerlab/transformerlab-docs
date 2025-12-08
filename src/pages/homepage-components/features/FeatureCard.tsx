import clsx from "clsx";
import React from "react";
import styles from "./features.module.css";

export default function FeatureCard({ video, text, flip = false }) {
  return (
    <div
      className={clsx("row", styles.featureCard)}
      style={{ flexDirection: flip ? "row-reverse" : "row" }}
    >
      <>
        <div className={clsx("col col--7", styles.featureCardText)}>{text}</div>
        <div className={clsx("col col--5", styles.featureCardVideo)}>
          {video}
        </div>
      </>
    </div>
  );
}
