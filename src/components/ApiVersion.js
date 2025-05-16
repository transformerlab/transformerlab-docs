import versionInfo from "../../static/api-version.json";

export default function ApiVersion() {
  return <>{versionInfo.version}</>;
}
