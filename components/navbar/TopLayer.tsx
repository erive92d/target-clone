import React from "react";

export default function TopLayer() {
  return (
    <nav className="navbar bg-red-600 text-white text-sm py-4 px-14 border-b">
      <div className="navbar-start gap-2 w-auto">
        <a className="">Ship to 99999</a>
        <a className="">New York</a>
      </div>
      <div className="hidden lg:flex lg:navbar-end gap-4">
        <a href="/" className="link-hover">
          Target Circle
        </a>
        <a href="/" className="link-hover">
          Target Circle Card
        </a>
        <a href="/" className="link-hover">
          Target 360
        </a>
        <a href="/" className="link-hover">
          Weekly Ads
        </a>
      </div>
    </nav>
  );
}
