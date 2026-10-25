"use client";
import { MotionConfig } from "motion/react";
import { About, Events, Hero, Plan, Poster, Profiles, Progress, Recognition, Vote } from "@/components/Sections";

export default function Page() {
  return (
    <MotionConfig reducedMotion="user">
      <Hero />
      <main>
        <About />
        <Plan />
        <Progress />
        <Recognition />
        <Events />
        <Poster />
        <Profiles />
      </main>
      <Vote />
    </MotionConfig>
  );
}
