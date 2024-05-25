import Projects from "@/components/Projects";
import React from "react";

const About = () => {
  return (
    <>
      <div className=" h-full h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex flex-col items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="flex flex-col px-16 space-x-5 sm: space-x-2 px-7 w-full ">
          <h1 className="text-sm sm:text-2xl font-title font-bold z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 text-center">
            About
          </h1>
          <p className=" opacity-50 text-sm sm:text-xl font-title font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 text-start justify-start items-start py-8">
            Introduction
          </p>
          <p className="text-sm w-8/12 sm:text-lg text-lg font-title font-semibold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
            As a Software Engineer and A Full-Stack Web Developer based in
            India, Currently pursuing Bachelors in Computer Science and
            Engineering. I Leverage my skills across the entire development
            lifecycle with particular intrest of tackling real-world problems
            well-planned and designed projects. As a developer, I&apos;m
            actively seeking opportunities to contribute to the open-source
            communities as well as developer community by creating content that
            educates and inspires others. My goal is to not only build my own
            skillset but also share my knowledge and learnings with the broader
            tech community.
          </p>

          <p className=" opacity-50 text-lg sm:text-xl font-title font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 text-start justify-start items-start py-8">
            Project Focus
          </p>
          <p className=" text-sm w-8/12 sm:text-lg text-lg font-title font-semibold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
            My software development journey is centered around crafting
            innovative solutions that address real-world challenges. I strive to
            go beyond replicating existing applications, instead focusing on the
            design, planning, and implementation of projects that directly
            impact user needs.
          </p>

          <p className=" opacity-50 text-sm sm:text-xl font-title font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 text-start justify-start items-start py-8">
            Areas of Interest
          </p>
          <p className=" text-sm w-8/12 sm:text-lg text-lg font-title font-semibold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
            Beyond web development, I&apos;m actively exploring and learning
            about emerging technologies like Web3, AI/ML, and design principles.
            My passion for continuous learning fuels my desire to stay at the
            forefront of the ever-evolving tech landscape.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
