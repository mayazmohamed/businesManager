"use client";

import React, { useState } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { themeDark, themeLight } from "./theme/theme";
import { ThemeProvider, CssBaseline } from "@mui/material";
import NavBar from "./components/navBar/navBar";
import LandingPage from "./components/landingPage/landingPage";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [dark, setDark] = useState(false);
  const [isLogedIn, setIsLogedIn] = useState(true);

  const toggleDark = () => {
    setDark(!dark);
  };

  return (
    <html lang="en">
      <ThemeProvider theme={dark ? themeDark : themeLight}>
        <CssBaseline />
        <body className={inter.className}>
          {isLogedIn ? <NavBar dark={dark} toggleDark={toggleDark} /> : null}
          {!isLogedIn ? <LandingPage /> : children}
        </body>
      </ThemeProvider>
    </html>
  );
}
