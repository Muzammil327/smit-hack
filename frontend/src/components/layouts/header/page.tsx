"use client";
import DesktopNavbar from "./desktop/page";

import { useState, useEffect } from "react";
import MobileNavbar from "./mobile/page";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check the screen size and update isMobile state
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1100);
    };

    // Add a resize event listener to handle changes in screen size
    window.addEventListener("resize", handleResize);

    // Initial check for screen size
    handleResize();

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <>
  {isMobile ? <MobileNavbar /> : <DesktopNavbar />}
  </>;
}

