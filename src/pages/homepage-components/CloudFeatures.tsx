import FeatureCard from "./features/FeatureCard";
import MuxPlayer from "@mux/mux-player-react/lazy";
import FeatureCrossCloud from "./features-cloud/feature-cross-cloud.mdx";
import FeatureEasilyRun from "./features-cloud/feature-easily-run.mdx";
import FeatureBuiltOn from "./features-cloud/feature-built-on.mdx";
import FeatureRoleBased from "./features-cloud/feature-role-based.mdx";
import CloudsImage from "./features-cloud/img/clouds.png";
import QuotaImage from "./features-cloud/img/quota.png";
import JobImage from "./features-cloud/img/job.png";
import RayKubeImage from "./features-cloud/img/raykube.png";

export default function CloudFeatures() {
  return (
    <div className={"all-features"}>
      <FeatureCard
        video={
          <img
            src={CloudsImage}
            alt="Cloud Architecture"
            style={{ width: "100%", borderRadius: "8px" }}
          />
        }
        text={<FeatureCrossCloud />}
        flip
      />
      <FeatureCard
        video={
          <img
            src={QuotaImage}
            alt="Quota Management"
            style={{ width: "100%", borderRadius: "8px" }}
          />
        }
        text={<FeatureRoleBased />}
      />
      <FeatureCard
        video={
          <img
            src={JobImage}
            alt="Job Management"
            style={{ width: "100%", borderRadius: "8px" }}
          />
        }
        text={<FeatureEasilyRun />}
        flip
      />
      <FeatureCard
        video={
          <img
            src={RayKubeImage}
            alt="Ray on Kubernetes"
            style={{ width: "100%", borderRadius: "8px" }}
          />
        }
        text={<FeatureBuiltOn />}
      />
    </div>
  );
}
