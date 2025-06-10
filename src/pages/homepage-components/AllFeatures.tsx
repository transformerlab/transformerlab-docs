import FeaturePopularModels from "./features/feature-popular-models.mdx";
import FeatureChat from "./features/feature-chat.mdx";
import FeatureTrain from "./features/feature-train.mdx";
import FeatureEvals from "./features/feature-evaluate-models.mdx";
import FeaturePlugins from "./features/feature-plugins.mdx";
import FeatureRag from "./features/feature-rag.mdx";
import FeatureHardware from "./features/feature-hardware.mdx";
import FeatureDiffusion from "./features/feature-diffusion.mdx";
import FeatureCard from "./features/FeatureCard";

import ModelsImage from "./features/img/models.png";
import MuxPlayer from "@mux/mux-player-react/lazy";
import TrainImage from "./features/img/train.png";
import EvalImage from "./features/img/eval.png";
import PluginsImage from "./features/img/plugins.png";
import RagImage from "./features/img/rag.png";
import PlatformsImage from "./features/img/platforms.png";
import DiffusionImage from "./features/img/diffusion.png";

import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function AllFeatures() {
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
      <FeatureCard
        video={<img src={DiffusionImage} />}
        text={<FeatureDiffusion />}
      />
      <FeatureCard
        video={<img src={TrainImage} />}
        text={<FeatureTrain />}
        flip
      />
      <FeatureCard video={<img src={EvalImage} />} text={<FeatureEvals />} />
      <FeatureCard
        video={<img src={PluginsImage} />}
        text={<FeaturePlugins />}
        flip
      />
      <FeatureCard video={<img src={RagImage} />} text={<FeatureRag />} />
      <FeatureCard
        video={<img src={PlatformsImage} />}
        text={<FeatureHardware />}
        flip
      />
    </div>
  );
}
