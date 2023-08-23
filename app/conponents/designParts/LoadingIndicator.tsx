"use client";
import { useState, useEffect } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Router from "next/router";

const LoadingIndicator: React.FC = () => {
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const handleStart = () => {
      console.log("routeChangeStart");
      setLoading(true);
    };
    const handleComplete = () => {
      console.log("routeChangeComplete");
      setLoading(false);
    };

    Router.events.on("routeChangeStart", handleStart);
    Router.events.on("routeChangeComplete", handleComplete);
    Router.events.on("routeChangeError", handleComplete);

    return () => {
      Router.events.off("routeChangeStart", handleStart);
      Router.events.off("routeChangeComplete", handleComplete);
      Router.events.off("routeChangeError", handleComplete);
    };
  }, []);

  if (!isLoading) {
    return null;
  }

  return (
    <div>
      <LinearProgress />
    </div>
  );
};

export default LoadingIndicator;
