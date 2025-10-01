import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "React Native Developer",
          "Full-Stack Developer",
          "Node.js Developer",
          "Laravel Developer",
          "Shopify App Builder",
          "AI-Powered App Integrator",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
