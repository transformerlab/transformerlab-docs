// src/components/AsciinemaPlayer.js
import React, { useEffect, useRef } from "react";
import * as AsciinemaPlayerLibrary from "asciinema-player";

const AsciinemaPlayer = ({ src, options }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.innerHTML = "";

      const defaultOptions = {
        controls: false,
        autoPlay: true,
        speed: 2,
        theme: "gruvbox-dark",
      };

      const mergedOptions = { ...defaultOptions, ...options };

      try {
        AsciinemaPlayerLibrary.create(src, containerRef.current, mergedOptions);
      } catch (e) {
        console.error("Asciinema failed to load:", e);
      }
    }
  }, [src, options]);

  return <div ref={containerRef} style={{ width: "100%" }}></div>;
};

export default AsciinemaPlayer;
