// src/components/Hero.jsx
"use client";

import dynamic from "next/dynamic";

// Dynamically import Typewriter component with no SSR
const Typewriter = dynamic(() => import("react-typewriter-effect"), {
  ssr: false,
});

export default function Hero() {
  return (
    <section className="flex items-center justify-center h-[70vh] bg-gray-900 text-gray-100">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to EDevLens</h1>
        <div className="text-2xl">
          <span>I'm </span>
          <Typewriter
            textStyle={{ display: "inline", color: "inherit" }}
            startDelay={100}
            cursorColor="gray"
            multiText={["a Developer", "a Photographer", "a Coder"]}
            multiTextDelay={1500}
            typeSpeed={50}
            deleteSpeed={30}
            loop
          />
        </div>
      </div>
    </section>
  );
}
