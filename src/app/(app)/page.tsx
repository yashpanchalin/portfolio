import React from "react";
import { TailwindcssButtons } from "@/components/Button";
import Footer from "@/components/Footer";
import TechStack from "@/components/TechStack";

interface TechItem {
  name: string;
  icon: string;
}

const Home = () => {
  const techStackData: TechItem[] = [
    { name: "Javascript", icon: "/javascript.svg" },
    { name: "Java", icon: "/java.svg" },
    { name: "Next.js", icon: "/nextIcon.svg" },
    { name: "MongoDB", icon: "/mongodb.svg" },
    { name: "Typescript", icon: "/typescript.svg" },
    { name: "C/C++", icon: "/c-svg.svg" },
    { name: "React", icon: "/react.svg" },
    { name: "Node.js", icon: "/nodejs.svg" },
    { name: "Git", icon: "/git.svg" },
    { name: "Python", icon: "/python.svg" },
    { name: "HTML/CSS", icon: "/web.svg" },
    { name: "Tailwind", icon: "/tailwind.svg" },
    { name: "Express.js", icon: "/express.svg" },
    { name: "Github", icon: "/github.svg" },
  ];
  return (
    <>
      {/* Radial gradient for the container to give a faded look */}

      <h1 className="text-4xl sm:text-7xl font-title font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 text-center py-8">
        Yash Panchal
      </h1>
      <p className=" text-xl w-8/12 sm:text-base text-xs font-title font-semibold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
        A CSE student with a passion for web development. I&apos;m driven to
        build innovative projects that tackle real-world problems. Currently
        working on few projects and learning new things every day. As an
        aspiring content creator, I&apos;m eager to share my knowledge and
        contribute to the open-source community.
      </p>

      <p className=" text-xl w-8/12 sm:text-base text-xs font-title font-semibold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 leading-loose">
        Let&apos;s catchup if you live in Delhi !! Looking for Connections and
        Opportunities. Get in touch{" "}
        <a
          href="https://twitter.com/yashpanchaljs"
          className=" z-20 bg-clip-text text-transparent bg-gradient-to-b from-red-200 to-red-500"
        >
          @yashpanchaljs
        </a>
      </p>
      <TechStack techStack={techStackData} />
    </>
  );
};

export default Home;
