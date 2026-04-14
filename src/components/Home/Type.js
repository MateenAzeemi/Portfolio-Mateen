import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "React Native Developer",
          "TypeScript Developer",
          "Full-Stack Developer",
          "Node.js & NestJS Developer",
          "Laravel Developer",
          "Shopify App Builder",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
