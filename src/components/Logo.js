// Logo component represents the top bar of your application
import React from "react";

function Logo() {
  // Styles for the top bar
  const topBar = {
    clipPath: "polygon(5% 100%, 95% 100%, 100% 0, 0 0)",
    backgroundColor: "hsl(0, 0%, 0%,0.9)",
    width: "90%",
    padding: "10px 70px",
    margin: "0 auto",
    border: "2px solid lightgrey",
  };
  return (
    <div style={topBar}>
      <a href="#">
        <img
          src="https://cdn.orbispatches.com/titles/CUSA31875_2cf05be756e20d7d986e2ec4e59900b96782ed82bff5594f64e23d75d646c332/logo.webp"
          alt="Main Logo"
          style={{
            height: "auto",
            width: "220px",
            animation: "blurEffect 5s ease-in-out infinite",
          }}
        />
      </a>
    </div>
  );
}

export default Logo;
