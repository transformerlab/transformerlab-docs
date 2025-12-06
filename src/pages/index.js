import React, { useState, useEffect } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Screenshot from "./img/cloud-screenshot.png";
import styles from "./index.module.css";
import "./style.css";
import UserValidation from "./homepage-components/uservalidation.jsx";
import { FaArrowRight, FaChevronDown } from "react-icons/fa";
import MuxPlayer from "@mux/mux-player-react/lazy";

// Feature imports
import FeatureTrain from "./homepage-components/features/feature-train.mdx";
import FeatureEvals from "./homepage-components/features/feature-evaluate-models.mdx";
import FeatureDiffusion from "./homepage-components/features/feature-diffusion.mdx";
import FeatureOrchestrate from "./homepage-components/features/feature-orchestrate.mdx";
import FeatureExperiments from "./homepage-components/features/feature-experiments.mdx";
import FeatureCheckpoints from "./homepage-components/features/feature-checkpoints.mdx";
import FeaturesWorksWith from "./homepage-components/features/feature-works-with.mdx";

import TrainImage from "./homepage-components/features/img/train.png";
import EvalImage from "./homepage-components/features/img/eval.png";
import ExperimentImage from "./homepage-components/features/img/experiments.png";
import CheckpointsImage from "./homepage-components/features/img/checkpoints.png";
import LossFunctionImage from "./homepage-components/features/img/lossfunction.png";
import WorksWithImage from "./homepage-components/features/img/workswith.png";

const Slide = ({ children, className, id }) => (
  <section id={id} className={clsx(styles.section, className)}>
    {children}
  </section>
);

const FeatureSlide = ({ media, TextComponent, reverse }) => {
  return (
    <Slide className={styles.featureSlide}>
      <div className={clsx(styles.featureContent, reverse && styles.reverse)}>
        <div className={styles.featureMedia}>
          {media}
        </div>
        <div className={clsx("embedded_markdown", styles.featureText)}>
          <TextComponent />
        </div>
      </div>
    </Slide>
  );
};

function HomepageHeader() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 0.05) % 360);
    }, 16);
    return () => clearInterval(interval);
  }, []);

  return (
    <Slide className={styles.heroSection}>
      <div className={styles.heroRow}>
        <div className={styles.heroColLogo}>
          <div className={styles.milkywayOuter}>
            <div className={styles.milkywayMask}>
              <img
                src="/img/milkyway.webp"
                className={styles.milkywayImage}
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
                }}
                alt="Rotating Galaxy"
              />
            </div>
          </div>
        </div>

        <div className={styles.heroColText}>
          <h1 className={styles.hero__title}>
            We&rsquo;re here for the <br />
            <span style={{ color: "#666" }}>Era of Research.</span>
          </h1>
          <h2 className={styles.hero__subtitle}>
            Transformer Lab is a Machine Learning Research Platform designed for
            frontier AI/ML workflows. Local, on-prem, or in the cloud. Open
            source.
          </h2>
          <div className={styles.buttons}>
            <Link
              to="/docs/install/"
              className={clsx("button button--lg", styles.heroButton)}
            >
              Get Started Now <FaArrowRight style={{ marginLeft: '8px' }} />
            </Link>
            <div style={{ marginTop: "0.5rem", textAlign: 'center', width: '100%' }}>
              or <a href="/beta.html" style={{ fontWeight: 600 }}>Book a Demo</a>
            </div>
          </div>
        </div>
      </div>

      <div
        className={styles.scrollIndicator}
        onClick={() => document.getElementById("slide-2").scrollIntoView({ behavior: "smooth" })}
      >
        <span style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "1px" }}>
          Scroll
        </span>
        <FaChevronDown size={24} />
      </div>
    </Slide>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Transformer Lab - The Open Source ML Platform"
      noFooter={true}
    >
      <main className={styles.snapContainer}>

        <HomepageHeader />

        <Slide id="slide-2">
          <div className={styles.mergedSlideContent}>
            <div className={styles.mergedText}>
              <h1 className="hero__title" style={{ fontSize: '2.5rem', fontFamily: 'Instrument Serif', marginBottom: '1rem' }}>
                More Research, <br /> Less Friction
              </h1>
              <p style={{ fontSize: '1.25rem', lineHeight: '1.5', color: 'var(--ifm-font-color-secondary)' }}>
                Research workflows are often slowed down by brittle bash scripts, scattered S3 buckets, and manual SLURM templates.
                <br /><br />
                Transformer Lab replaces this fragmentation with a unified structure for reproducible science at any scale.
              </p>
            </div>
            <div className={styles.mergedVideoWrapper}>
              <img
                src={Screenshot}
                className={styles.mergedVideo}
                alt="Transformer Lab Interface"
              />
            </div>
          </div>
        </Slide>


        <FeatureSlide
          media={<img src={TrainImage} alt="Orchestrate" />}
          TextComponent={FeatureOrchestrate}
          reverse={true}
        />

        <FeatureSlide
          media={
            <MuxPlayer
              loading="page"
              playbackId="CWm5w01gczy7fKwa7CLlDWzCAf3zH01nTpElW8MTTl3Zg"
              
              controls={true}
              
              style={{ width: '100%', maxWidth: '100%' }}
            />
          }
          TextComponent={FeatureDiffusion}
        />

        <FeatureSlide
          media={<img src={ExperimentImage} alt="Experiments" />}
          TextComponent={FeatureExperiments}
          reverse={true}
        />

        <FeatureSlide
          media={<img src={CheckpointsImage} alt="Checkpoints" />}
          TextComponent={FeatureCheckpoints}
        />

        <FeatureSlide
          media={<img src={LossFunctionImage} alt="Training" />}
          TextComponent={FeatureTrain}
          reverse={true}
        />

        <FeatureSlide
          media={<img src={EvalImage} alt="Evals" />}
          TextComponent={FeatureEvals}
        />

        <FeatureSlide
          media={<img src={WorksWithImage} alt="Works With" />}
          TextComponent={FeaturesWorksWith}
          reverse={true}
        />

        <Slide>
          <UserValidation />
        </Slide>

      </main>
    </Layout>
  );
}