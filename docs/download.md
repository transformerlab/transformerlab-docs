---
sidebar_position: 200
---

import Button from '@site/src/components/Button';
import { FaApple } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";
import { FaWindows } from "react-icons/fa";
import appVersion from '../static/app-version.json';
import apiVersion from '../static/api-version.json';

# Download ↓

Current App Version: {appVersion.version}<br/>
Current API Version: {apiVersion.version}

## <FaApple /> macOS 

<a href={`https://github.com/transformerlab/transformerlab-app/releases/download/v${appVersion.version}/Transformer-Lab-${appVersion.version}-arm64.dmg`}>
  <Button>Download for <FaApple /> Mac (Silicon)</Button>
  </a>

<br/><br/>

<a href={`https://github.com/transformerlab/transformerlab-app/releases/download/v${appVersion.version}/Transformer-Lab-${appVersion.version}.dmg`}>
  <Button>Download for <FaApple /> Mac (Intel)</Button>
  </a>

## <FaWindows/> Windows

<a href={`https://github.com/transformerlab/transformerlab-app/releases/download/v${appVersion.version}/Transformer-Lab-Setup-${appVersion.version}.exe`}>
  <Button>Download for <FaWindows /> Windows</Button>
  </a>

<br/>

Local Connection on Windows requires Windows 10+ with WSL installed.

## <FaLinux/> Linux

<a href={`https://github.com/transformerlab/transformerlab-app/releases/download/v${appVersion.version}/Transformer-Lab-${appVersion.version}.AppImage`}>
  <Button>Download AppImage</Button>
  </a>

<br/><br/>

<a href={`https://github.com/transformerlab/transformerlab-app/releases/download/v${appVersion.version}/Transformer-Lab-${appVersion.version}-arm64.AppImage`}>
  <Button>Download AppImage (ARM64)</Button>
  </a>
