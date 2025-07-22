"use client";

import { useEffect } from "react";

export default function ThemeProvider() {
  useEffect(() => {
    // Always force dark mode
    document.documentElement.classList.add("dark");
    // Set localStorage to dark to maintain consistency
    localStorage.theme = "dark";
  }, []);

  return null;
}