import React, { useEffect, useState } from "react";

export default function AppVersion() {
  const [version, setVersion] = useState("loading...");

  useEffect(() => {
    // Fetch the version info that was created during build
    fetch("/version-info.json")
      .then((response) => response.json())
      .then((data) => {
        setVersion(data.version);
      })
      .catch((error) => {
        console.error("Error fetching version info:", error);
        setVersion("unknown");
      });
  }, []);

  return <>{version}</>;
}
