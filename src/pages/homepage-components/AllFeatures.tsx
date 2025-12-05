import FeatureTrain from "./features/feature-train.mdx";
import FeatureEvals from "./features/feature-evaluate-models.mdx";
import FeatureDiffusion from "./features/feature-diffusion.mdx";
import FeatureCard from "./features/FeatureCard";

import MuxPlayer from "@mux/mux-player-react/lazy";
import FeatureOrchestrate from "./features/feature-orchestrate.mdx";
import FeatureExperiments from "./features/feature-experiments.mdx";
import FeatureCheckpoints from "./features/feature-checkpoints.mdx";
import FeaturesWorksWith from "./features/feature-works-with.mdx";

import TrainImage from "./features/img/train.png";
import EvalImage from "./features/img/eval.png";
import ExperimentImage from "./features/img/experiments.png";
import CheckpointsImage from "./features/img/checkpoints.png";
import LossFunctionImage from "./features/img/lossfunction.png";
import WorksWithImage from "./features/img/workswith.png";

export default function AllFeatures() {
  return (
    <>
      <FeatureCard
        video={<img src={TrainImage} />}
        text={<FeatureOrchestrate />}
        flip
      />
      <FeatureCard
        video={
          <MuxPlayer
            loading="viewport"
            autoPlay
            loop
            playbackId="CWm5w01gczy7fKwa7CLlDWzCAf3zH01nTpElW8MTTl3Zg"
            metadata={{
              video_id: "video-id-123456",
              video_title: "Inference",
            }}
          />
        }
        text={<FeatureDiffusion />}
      />
      <FeatureCard
        video={<img src={ExperimentImage} />}
        text={<FeatureExperiments />}
        flip
      />
      <FeatureCard
        video={<img src={CheckpointsImage} />}
        text={<FeatureCheckpoints />}
      />
      <FeatureCard
        video={<img src={LossFunctionImage} />}
        text={<FeatureTrain />}
        flip
      />
      <FeatureCard video={<img src={EvalImage} />} text={<FeatureEvals />} />
      <FeatureCard
        video={<img src={WorksWithImage} />}
        text={<FeaturesWorksWith />}
        flip
      />
    </>
  );
}
