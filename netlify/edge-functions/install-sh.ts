// Netlify Edge Function for /install.sh
import { Context } from "https://edge.netlify.com";

const GITHUB_API_RELEASES =
  "https://api.github.com/repos/transformerlab/transformerlab-api/releases/latest";
const RAW_BASE =
  "https://raw.githubusercontent.com/transformerlab/transformerlab-api";

export default async (request: Request, context: Context) => {
  // Get the latest release tag from GitHub API
  const releaseRes = await fetch(GITHUB_API_RELEASES, {
    headers: { Accept: "application/vnd.github+json" },
  });
  if (!releaseRes.ok) {
    return new Response(
      'echo "Error: Failed to fetch release info from GitHub." >&2\nexit 1\n',
      { status: 200, headers: { "Content-Type": "text/x-sh" } }
    );
  }
  const release = await releaseRes.json();
  const tag = release.tag_name;

  // Compose the raw URL for install.sh from the release tag
  const installUrl = `${RAW_BASE}/${tag}/install.sh`;
  const installRes = await fetch(installUrl);
  if (!installRes.ok) {
    return new Response(
      'echo "Error: Failed to fetch install.sh from release $tag." >&2\nexit 1\n',
      { status: 200, headers: { "Content-Type": "text/x-sh" } }
    );
  }
  const script = await installRes.text();

  return new Response(script, {
    status: 200,
    headers: {
      "Content-Type": "text/x-sh",
      "cache-control": "public, s-maxage=3600",
    },
  });
};
