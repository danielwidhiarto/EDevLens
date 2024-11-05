// src/components/Hero.jsx
"use client";

import dynamic from "next/dynamic";

// Dynamically import Typewriter component with no SSR
const Typewriter = dynamic(() => import("react-typewriter-effect"), {
  ssr: false,
});

export default function Hero() {
  return (
    <section className="flex items-center justify-center h-screen bg-blue-500 text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to EDevLens</h1>
        <div className="text-2xl">
          <span>I'm </span>
          <Typewriter
            textStyle={{ display: "inline", color: "white" }}
            startDelay={100}
            cursorColor="white"
            multiText={["a Developer", "a Designer", "an Innovator", "a Coder"]}
            multiTextDelay={3000}
            typeSpeed={50}
            deleteSpeed={30}
            loop
          />
        </div>
      </div>
    </section>
  );
}
