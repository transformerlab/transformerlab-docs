import React, { useState, useEffect } from 'react';
import Button from './Button';
import { FaApple } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";
import { FaWindows } from "react-icons/fa";

const DownloadSection = () => {
  const [version, setVersion] = useState('loading...');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVersion = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/transformerlab/transformerlab-app/releases/latest');
        if (!response.ok) {
          throw new Error('Failed to fetch version');
        }
        const data = await response.json();
        setVersion(data.tag_name.replace(/^v/, ''));
      } catch (err) {
        setError(err.message);
        setVersion('unknown');
      }
    };

    fetchVersion();
  }, []);

  if (error) {
    return <div>Error fetching version: {error}</div>;
  }

  return (
    <div>
      <p>Current Version: {version}</p>

      <h3><FaApple /> macOS</h3>

      <a href={`https://github.com/transformerlab/transformerlab-app/releases/download/v${version}/Transformer-Lab-${version}-arm64.dmg`}>
        <Button>Download for <FaApple /> Mac (Silicon)</Button>
      </a>

      <br/><br/>

      <h3><FaWindows/> Windows</h3>

      <a href={`https://github.com/transformerlab/transformerlab-app/releases/download/v${version}/Transformer-Lab-Setup-${version}.exe`}>
        <Button>Download for <FaWindows /> Windows</Button>
      </a>

      <br/>

      <p>Local Connection on Windows requires Windows 10+ with WSL installed.</p>

      <h3><FaLinux/> Linux</h3>

      <p>Follow our <a href="./install/install.md">Install Instructions</a></p>
    </div>
  );
};

export default DownloadSection;