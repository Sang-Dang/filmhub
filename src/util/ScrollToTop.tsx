import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

type Props = {};

export default function ScrollToTop({}: Props) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
  }, [pathname]);

  return null;
}
