import FeatureCard from "./features/FeatureCard";
import MuxPlayer from "@mux/mux-player-react/lazy";
import FeatureCrossCloud from "./features-cloud/feature-cross-cloud.mdx";
import FeatureEasilyRun from "./features-cloud/feature-easily-run.mdx";
import FeatureBuiltOn from "./features-cloud/feature-built-on.mdx";
import FeatureRoleBased from "./features-cloud/feature-role-based.mdx";

export default function CloudFeatures() {
  return (
    <div className={"all-features"}>
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
        text={<FeatureCrossCloud />}
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
        text={<FeatureRoleBased />}
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
        text={<FeatureEasilyRun />}
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
        text={<FeatureBuiltOn />}
      />
    </div>
  );
}
