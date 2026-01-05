import React, { useState, useEffect } from 'react';

export default function ApiVersion() {
  const [version, setVersion] = useState('loading...');

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
        setVersion('unknown');
      }
    };

    fetchVersion();
  }, []);

  return <>{version}</>;
}
