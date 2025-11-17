import versionInfo from "../../static/app-version.json";

export default function ApiVersion() {
  return <>{versionInfo.version}</>;
}
