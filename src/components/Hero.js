// src/components/Hero.jsx
"use client";

import dynamic from "next/dynamic";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section className="flex items-center justify-center h-[70vh] bg-gray-900 text-gray-100">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to EDevLens</h1>
        <div className="text-2xl">
          <span>I'm </span>
          <Typewriter
            words={["a Developer", "a Photographer", "a Coder"]}
            loop={0} // Set to 0 for infinite loop
            cursor
            cursorStyle="|"
            typeSpeed={75}
            deleteSpeed={50}
            delaySpeed={3000}
          />
        </div>
      </div>
    </section>
  );
}
