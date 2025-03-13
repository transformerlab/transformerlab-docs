---
sidebar_position: 11
---

# SSH Connectivity

Are you a developer who is looking to improve the way Transformer Lab talks to a server via SSH?

The way in which the Transformer Lab App connects to a backend has a lot of components so we describe them here.

## SSH Form

In the Login Form at the start of the app, there is a tab to show SSH connectivity. This is in `src/renderer/components/Connect/LoginModal.tsx`

When this form submits its contents, it sets the sshCredentials which are at the top of the App.tsx. It then opens the Drawer containing Xterm.js which then sends, using ipcMessages, a command to the main thread to go and try to connect to SSH.

## Running Shell Commands

Once the WebSSH terminal connects successfully, the messaging from SSH2 sends an event that looks like:

`("status", "SSH CONNECTION ESTABLISHED")`

We listen for that and send a message to the Transformer Lab app when that happens.

Transformer Lab listens for that at:

```js title=src/renderer/components/Connect/XtermJS.tsx

```

As you can see above, the app then waits one second and then sends an initiation message to the Xterm Iframe which will then listen for that postMessage and route that text to the terminal to be executed as though the user typed them in.

The specific commands are stored in `src/renderer/components/Connect/shellCommand.js`

and look like this:

```js title=src/renderer/components/Connect/shellCommand.js
const command = `
echo "Entering subshell:"
TFL_FILENAME="llmlab_api_v0.1.0.zip"
TFL_URL="https://transformerlab-binaries.s3.amazonaws.com/\${TFL_FILENAME}"
TFL_DEST_DIR="\${HOME}/.transformerlab/src/"
mkdir -p "\${TFL_DEST_DIR}"
echo "Downloading \${TFL_URL} to \${TFL_DEST_DIR}"
curl "\${TFL_URL}" --output "\${TFL_DEST_DIR}\${TFL_FILENAME}"
unzip -o "\${TFL_DEST_DIR}\${TFL_FILENAME}" -d "$TFL_DEST_DIR"
echo "Starting API server"
cd "\${TFL_DEST_DIR}" || exit

if [ -f .DEPENDENCIES_INSTALLED ]; then
    echo "Dependencies already installed. Skipping."
    echo "To reinstall dependencies, delete the .DEPENDENCIES_INSTALLED file and run this script again."
else
  ./init.sh
  touch .DEPENDENCIES_INSTALLED
fi

conda activate transformerlab
./run.sh
`;

export default command;
```

So if you want to change the initialization commands that are sent from the terminal, you can edit that file. It serves to download the server code, expand it iinto the right directory, and then install dependencies. Finally, it runs the `./run.sh` command which starts up the server
