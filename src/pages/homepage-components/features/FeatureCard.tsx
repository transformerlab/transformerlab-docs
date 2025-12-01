import clsx from "clsx";
import React from "react";
import styles from "./features.module.css";

export default function FeatureCard({ video, text, flip = false }) {
  return (
    <div className={clsx("row", styles.featureCard)} style={{}}>
      {flip ? (
        <>
          <div className={clsx("col col--6", styles.featureCardText)}>
            {text}
          </div>
          <div className={clsx("col col--6", styles.featureCardVideo)}>
            {video}
          </div>
        </>
      ) : (
        <>
          <div className={clsx("col col--6", styles.featureCardVideo)}>
            {video}
          </div>
          <div className={clsx("col col--6", styles.featureCardText)}>
            {text}
          </div>
        </>
      )}
    </div>
  );
}
