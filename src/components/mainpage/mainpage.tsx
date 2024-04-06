import React from "react";

import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function MainPage() {
  useEffect(() => {
    document.title = "ArtInstagram";
    window.scrollTo(0, 0);
  }, []);
  const TEST = "hello world";

  return <div>{TEST}</div>;
}
