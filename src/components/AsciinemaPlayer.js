// src/components/AsciinemaPlayer.js
import React, { useEffect, useRef } from "react";
// 1. We removed the top-level import here to prevent the build crash

// OPTIONAL: You usually need the CSS. If you haven't imported it globally, uncomment the line below:
// import 'asciinema-player/dist/bundle/asciinema-player.css';

const AsciinemaPlayer = ({ src, options }) => {
  const containerRef = useRef(null);
  const playerRef = useRef(null); // Keep track of the player instance for cleanup

  useEffect(() => {
    const loadPlayer = async () => {
      if (!containerRef.current) return;

      try {
        // 2. Dynamically import the library only when the component mounts in the browser
        const AsciinemaPlayerLibrary = await import("asciinema-player");

        // Clear any existing player instance or HTML to prevent duplicates
        containerRef.current.innerHTML = "";

        const defaultOptions = {
          controls: false,
          autoPlay: true,
          speed: 2,
          theme: "gruvbox-dark",
        };

        const mergedOptions = { ...defaultOptions, ...options };

        // Create the player
        playerRef.current = AsciinemaPlayerLibrary.create(
          src,
          containerRef.current,
          mergedOptions
        );
      } catch (e) {
        console.error("Asciinema failed to load:", e);
      }
    };

    loadPlayer();

    // 3. Cleanup function to dispose of the player when the component unmounts
    return () => {
      if (
        playerRef.current &&
        typeof playerRef.current.dispose === "function"
      ) {
        playerRef.current.dispose();
      }
    };
  }, [src, options]);

  return <div ref={containerRef} style={{ width: "100%" }}></div>;
};

export default AsciinemaPlayer;
