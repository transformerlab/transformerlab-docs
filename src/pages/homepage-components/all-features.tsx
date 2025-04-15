import FeaturePopularModels from "./features/feature-popular-models.mdx";
import FeatureChat from "./features/feature-chat.mdx";
import FeatureTrain from "./features/feature-train.mdx";
import FeatureEvals from "./features/feature-evaluate-models.mdx";
import FeaturePlugins from "./features/feature-plugins.mdx";
import FeatureRag from "./features/feature-rag.mdx";
import FeatureHardware from "./features/feature-hardware.mdx";

import React from "react";

export function AllFeatures() {
  return (
    <div className="flex flex-col gap-8">
      <FeaturePopularModels />
      <FeatureChat />
      <FeatureTrain />
      <FeatureEvals />
      <FeaturePlugins />
      <FeatureRag />
      <FeatureHardware />
    </div>
  );
}
