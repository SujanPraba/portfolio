"use client"
import logo from "@/app/assets/Group 1.svg";
import Confetti, { ConfettiRef } from "@/components/ui/confetti";
import GradualSpacing from "@/components/ui/gradual-spacing";
import Meteors from "@/components/ui/meteors";
import ShimmerButton from "@/components/ui/shimmer-button";
import Image from "next/image";
import { useRef } from "react";
import HeaderScetion from "./AppComponents/HeaderScetion";
import Skills from "./AppComponents/Skills";
// import Projects from "./AppComponents/Projects"; // Import your Projects component
// import AboutMe from "./AppComponents/AboutMe"; // Import your AboutMe component
// import Contact from "./AppComponents/Contact"; // Import your Contact component

// NavBar component with all section click handlers
function NavBar({
  onSkillsClick,
  onProjectsClick,
  onAboutMeClick,
  onContactClick,
}: {
  onSkillsClick: () => void;
  onProjectsClick: () => void;
  onAboutMeClick: () => void;
  onContactClick: () => void;
}) {
  return (
    <nav className="md:flex w-full justify-between items-center text-black absolute top-4 px-8 !z-1000 nav_bar hidden">
      <div className="text-xl font-bold">
        <Image src={logo} alt="Logo" className="w-14" />
      </div>
      <div className="flex space-x-10">
        <a onClick={onProjectsClick} className="hover:text-gray-300 cursor-pointer">Projects</a>
        <a onClick={onSkillsClick} className="hover:text-gray-300 cursor-pointer">Skills</a>
        <a onClick={onContactClick} className="hover:text-gray-300 cursor-pointer">Contact</a>
      </div>
      <div>
        <ShimmerButton name="About me">About Me</ShimmerButton>
      </div>
    </nav>
  );
}

export default function MeteorDemo() {
  const confettiRef = useRef<ConfettiRef>(null);

  // Refs for each section
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Scroll functions for each section
  const scrollToSkills = () => skillsRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToProjects = () => projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToAboutMe = () => aboutMeRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToContact = () => contactRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <div className="relative w-full">
        <div className="relative flex md:h-[300px] h-[180px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
          <Meteors number={80} />
          <NavBar
            onSkillsClick={scrollToSkills}
            onProjectsClick={scrollToProjects}
            onAboutMeClick={scrollToAboutMe}
            onContactClick={scrollToContact}
          />

          <GradualSpacing
            className="font-display text-start text-4xl font-bold -tracking-widest bg-gradient-to-r from-gray-700 to-[#445964] bg-clip-text text-[#4D7F9F] md:text-7xl md:leading-[5rem]"
            text="Hey! there"
            delayMultiple={0.06}
          />

          <Confetti
            ref={confettiRef}
            className="absolute left-0 top-0 z-0 size-full"
            onMouseEnter={() => {
              confettiRef.current?.fire({});
            }}
          />
        </div>
      </div>

      <HeaderScetion />

      {/* Sections with refs */}
      {/* <div ref={projectsRef}>
        <Projects />
      </div> */}
      <div ref={skillsRef}>
        <Skills />
      </div>
      {/* <div ref={aboutMeRef}>
        <AboutMe />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div> */}
    </>
  );
}
