import React from "react";
import TopLayer from "./TopLayer";
import Main from "./Main";

export default function Navbar() {
  return (
    <div className="border-b">
      <TopLayer />
      <Main />
    </div>
  );
}
