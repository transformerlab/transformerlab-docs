import FeaturePopularModels from "./features/feature-popular-models.mdx";
import FeatureChat from "./features/feature-chat.mdx";
import FeatureTrain from "./features/feature-train.mdx";
import FeatureEvals from "./features/feature-evaluate-models.mdx";
import FeaturePlugins from "./features/feature-plugins.mdx";
import FeatureRag from "./features/feature-rag.mdx";
import FeatureHardware from "./features/feature-hardware.mdx";
import FeatureCard from "./features/FeatureCard";

import ModelsImage from "./features/img/models.png";
import MuxPlayer from "@mux/mux-player-react/lazy";
import TrainImage from "./features/img/train.png";
import EvalImage from "./features/img/eval.png";
import PluginsImage from "./features/img/plugins.png";
import RagImage from "./features/img/rag.png";

import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export function AllFeatures() {
  return (
    <div className={"all-features"}>
      <FeatureCard
        video={<img src={ModelsImage} />}
        text={<FeaturePopularModels />}
      />
      <FeatureCard
        video={
          <MuxPlayer
            loading="viewport"
            autoPlay
            loop
            playbackId="100801H57yljCfI83T8AM00exAYT661sKFyCjyTgF4rR9k"
            metadata={{
              video_id: "video-id-123456",
              video_title: "Inference",
            }}
          />
        }
        text={<FeatureChat />}
        flip
      />
      <FeatureCard video={<img src={TrainImage} />} text={<FeatureTrain />} />
      <FeatureCard
        video={<img src={EvalImage} />}
        text={<FeatureEvals />}
        flip
      />
      <FeatureCard
        video={<img src={PluginsImage} />}
        text={<FeaturePlugins />}
      />
      <FeatureCard video={<img src={RagImage} />} text={<FeatureRag />} flip />
      <FeatureCard video={null} text={<FeatureHardware />} />
    </div>
  );
}
