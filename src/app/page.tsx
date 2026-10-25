"use client";
import { MotionConfig } from "motion/react";
import { About, Competitions, Events, Hero, Plan, Poster, Profiles, Progress, Recognition, Research, Vote } from "@/components/Sections";

export default function Page() {
  return (
    <MotionConfig reducedMotion="user">
      <Hero />
      <main>
        <About />
        <Plan />
        <Progress />
        <Research />
        <Competitions />
        <Recognition />
        <Events />
        <Poster />
        <Profiles />
      </main>
      <Vote />
    </MotionConfig>
  );
}
