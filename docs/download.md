---
sidebar_position: 200
---

import Button from '@site/src/components/Button';
import { FaApple } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";
import { FaWindows } from "react-icons/fa";
import appVersion from '../static/app-version.json';

# Download ↓

:::warning
We have deprecated the downloadable app and will no longer be releasing updates as of version 0.28. Please install Transformer Lab [on the commandline by following the instructions here](./install/install.md).
:::

Latest downloadable version: 0.27.8

## <FaApple /> macOS

<a href={`https://github.com/transformerlab/transformerlab-app/releases/download/v${appVersion.version}/Transformer-Lab-0.27.8-arm64.dmg`}>
<Button>Download for <FaApple /> Mac (Silicon)</Button>
</a>

<br/><br/>

<!-- <a href={`https://github.com/transformerlab/transformerlab-app/releases/download/v${appVersion.version}/Transformer-Lab-0.27.8.dmg`}>
  <Button>Download for <FaApple /> Mac (Intel)</Button>
  </a> -->

## <FaWindows/> Windows

<a href={`https://github.com/transformerlab/transformerlab-app/releases/download/v${appVersion.version}/Transformer-Lab-Setup-0.27.8.exe`}>
<Button>Download for <FaWindows /> Windows</Button>
</a>

<br/>

Local Connection on Windows requires Windows 10+ with WSL installed.

## <FaLinux/> Linux

Follow our [Install Instructions](./install/install.md)
