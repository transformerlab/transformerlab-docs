// netlify/plugins/fetch-install-script/index.js

const fs = require("fs");
const path = require("path");

module.exports = {
  onPreBuild: async ({ utils, constants }) => {
    //PUBLISH_DIR = constants.PUBLISH_DIR;
    const PUBLISH_DIR = path.join("");

    try {
      console.log("Fetching the latest release install.sh file...");

      // Get environment variables or build parameters
      const appRepo = process.env.APP_GITHUB_REPO; // e.g., 'username/repo'

      if (!appRepo) {
        utils.build.failBuild(
          "APP_GITHUB_REPO environment variable is required"
        );
        return;
      }

      const latestReleaseUrl = `https://api.github.com/repos/${appRepo}/releases/latest`;

      // Fetch the latest release metadata
      const releaseRes = await fetch(latestReleaseUrl);

      if (!releaseRes.ok) {
        utils.build.failBuild(
          `Failed to fetch latest release: ${releaseRes.statusText}`
        );
        return;
      }

      const releaseData = await releaseRes.json();
      const tagName = releaseData.tag_name;

      console.log(`Found latest release: ${tagName}`);

      installScriptUrl = `https://raw.githubusercontent.com/${appRepo}/${tagName}/api/install.sh`;

      // Download the install.sh file
      const fileRes = await fetch(installScriptUrl);

      if (!fileRes.ok) {
        utils.build.failBuild(
          `Failed to fetch install.sh: ${fileRes.statusText}`
        );
        return;
      }

      const fileContent = await fileRes.text();

      // Write the content to the static directory
      const installScriptPath = path.join(PUBLISH_DIR, "static", "install.sh");

      console.log(`Writing install.sh to ${installScriptPath}`);

      // Ensure the directory exists
      fs.mkdirSync(path.dirname(installScriptPath), { recursive: true });

      // Write the file
      fs.writeFileSync(installScriptPath, fileContent);

      console.log(`Successfully updated install.sh to version ${tagName}`);
    } catch (error) {
      utils.build.failBuild(`Error updating install.sh: ${error.message}`);
    }
  },
};
