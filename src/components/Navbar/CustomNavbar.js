import React, { useState, useRef, useEffect } from "react";
import styles from "./CustomNavbar.module.css";
import Link from "@docusaurus/Link";
import MultiNode from "../../pages/img/multinode.png";
import SingleNode from "../../pages/img/singlenode.png";
import Group from "../../pages/img/group.png";

export default function MyCustomToolbar() {
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const timeoutRef = useRef(null);
  const menuRef = useRef(null);
  const navItemRef = useRef(null);
  const isMobile = useRef(window?.innerWidth <= 768);

  // Handle menu visibility with delay to prevent immediate closing
  useEffect(() => {
    // Update isMobile on window resize
    const handleResize = () => {
      isMobile.current = window?.innerWidth <= 768;
    };

    window?.addEventListener("resize", handleResize);
    return () => window?.removeEventListener("resize", handleResize);
  }, []);

  // Handle hover state effect
  useEffect(() => {
    if (isHovering) {
      setShowMegaMenu(true);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    } else if (!isMobile.current) {
      // Only use timeout for non-mobile devices
      timeoutRef.current = setTimeout(() => {
        setShowMegaMenu(false);
      }, 500); // 500ms delay before hiding menu - increased for reliability
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isHovering]);

  // Function to handle mouse movement
  const handleMouseMovement = (e) => {
    // If we're already in a hover state, don't do anything
    if (isHovering) return;

    // Check if we're over the nav item or the menu
    const isOverNavItem = navItemRef.current?.contains(e.target);
    const isOverMenu = menuRef.current?.contains(e.target);

    if (isOverNavItem || isOverMenu) {
      setIsHovering(true);
    }
  };

  // Add global mouse move listener to help with hover detection
  useEffect(() => {
    if (!isMobile.current) {
      document.addEventListener("mousemove", handleMouseMovement);
    }
    return () => {
      document.removeEventListener("mousemove", handleMouseMovement);
    };
  }, [isHovering]);

  return (
    <div className={styles.customToolbar}>
      <div
        ref={navItemRef}
        className={styles.navItem}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <span
          className={styles.navTrigger}
          style={{
            fontWeight: "bold",
            fontSize: "18px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <a
            href="/"
            style={{ color: "inherit", textDecoration: "none" }}
            onClick={(e) => {
              if (window.innerWidth <= 768) {
                e.preventDefault();
                const newState = !showMegaMenu;
                setShowMegaMenu(newState);
                setIsHovering(newState);
              } else {
                setShowMegaMenu(false);
                setIsHovering(false);
              }
            }}
          >
            Transformer Lab
          </a>
          <button
            className={styles.mobileMenuToggle}
            onClick={() => {
              const newState = !showMegaMenu;
              setShowMegaMenu(newState);
              setIsHovering(newState);
            }}
            aria-label="Toggle menu"
          >
            {showMegaMenu ? "✕" : ""}
          </button>
        </span>

        {showMegaMenu && (
          <div
            className={styles.megaMenu}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className={styles.megaMenuContainer}>
              <div className={styles.megaMenuSection}>
                <img
                  src={SingleNode}
                  style={{
                    maxHeight: "100px",
                    maxWidth: "100%",
                    marginBottom: "10px",
                  }}
                />
                <h3>Transformer Lab Local</h3>
                <p className={styles.subtitle}>
                  Run, Train, Eval Models on your own Machine
                </p>

                <div className={styles.megaMenuLinks}>
                  <Link
                    to="/local"
                    onClick={() => {
                      setShowMegaMenu(false);
                      setIsHovering(false);
                    }}
                  >
                    Features
                  </Link>
                  <Link
                    to="/docs/intro"
                    onClick={() => {
                      setShowMegaMenu(false);
                      setIsHovering(false);
                    }}
                  >
                    Documentation
                  </Link>
                  <Link
                    to="/docs/download"
                    onClick={() => {
                      setShowMegaMenu(false);
                      setIsHovering(false);
                    }}
                  >
                    Download
                  </Link>
                </div>
              </div>

              <div className={styles.megaMenuSection}>
                <img
                  src={MultiNode}
                  style={{
                    maxHeight: "100px",
                    maxWidth: "100%",
                    marginBottom: "10px",
                  }}
                />
                <h3>Transformer Lab Cloud</h3>
                <p className={styles.subtitle}>GPU Orchestration for Teams</p>
                <div className={styles.megaMenuLinks}>
                  <Link
                    to="/cloud"
                    onClick={() => {
                      setShowMegaMenu(false);
                      setIsHovering(false);
                    }}
                  >
                    Features
                  </Link>
                  <Link
                    to="/cloud/docs/intro"
                    onClick={() => {
                      setShowMegaMenu(false);
                      setIsHovering(false);
                    }}
                  >
                    Documentation
                  </Link>
                  <Link
                    to="/"
                    onClick={() => {
                      setShowMegaMenu(false);
                      setIsHovering(false);
                    }}
                  >
                    Join Beta
                  </Link>
                </div>
              </div>

              <div className={styles.megaMenuSection}>
                <img
                  src={Group}
                  style={{
                    maxHeight: "100px",
                    maxWidth: "100%",
                    marginBottom: "10px",
                  }}
                />
                <h3>About Us</h3>
                <p className={styles.subtitle}>&nbsp;</p>

                <div className={styles.megaMenuLinks}>
                  <Link
                    to="/about"
                    onClick={() => {
                      setShowMegaMenu(false);
                      setIsHovering(false);
                    }}
                  >
                    Team
                  </Link>
                  <Link
                    to="/blog"
                    onClick={() => {
                      setShowMegaMenu(false);
                      setIsHovering(false);
                    }}
                  >
                    Blog
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
