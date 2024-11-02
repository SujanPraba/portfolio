"use client";

import AnimatedCircularProgressBar from "@/components/ui/animated-circular-progress-bar";
import { CoolMode } from "@/components/ui/cool-mode";
import { useState } from "react";

type SkillInfo = {
  title: string;
  description: string;
  max: number;
};

type SkillsData = {
  framework: SkillInfo[];
  languages: SkillInfo[];
  uiLibraries: SkillInfo[];
  others: SkillInfo[];
};

const skillsData: SkillsData = {
  framework: [
    {
      title: "React.js",
      max: 90,
      description: "I possess excellent skills in React.js, enabling me to create dynamic and responsive user interfaces...",
    },
    {
      title: "Next.js",
      max: 90,
      description: "My expertise in Next.js allows me to leverage its powerful features for server-side rendering...",
    },
  ],
  languages: [
    {
      title: "JavaScript",
      max: 70,
      description: "With intermediate skills in JavaScript, I have a strong grasp of the language's core concepts...",
    },
    {
      title: "TypeScript",
      max: 60,
      description: "I possess intermediate skills in TypeScript, which help me write more robust and maintainable code...",
    },
  ],
  uiLibraries: [
    {
      title: "Tailwind CSS",
      max: 100,
      description: "I have good skills in Tailwind CSS, which empowers me to create aesthetically pleasing and responsive designs quickly...",
    },
    {
      title: "Ant Design",
      max: 95,
      description: "My proficiency in Ant Design enables me to utilize a comprehensive set of high-quality React components for building rich user interfaces...",
    },
    {
      title: "PrimeReact",
      max: 90,
      description: "I have a good understanding of PrimeReact, which provides a wide range of customizable UI components...",
    },
  ],
  others: [
    {
      title: "Framer Motion",
      max: 85,
      description: "With a solid grasp of Framer Motion, I am able to create smooth animations and transitions...",
    },
  ],
};

type SkillCategory = keyof SkillsData;

function Skills() {
  const [skillsSelected, setSkillsSelected] = useState<SkillCategory>("framework");
  const skills: SkillCategory[] = ["framework", "languages", "uiLibraries", "others"];

  return (
    <div className="w-[90%] mx-auto my-8" id="/skills">
      <p className="lg:text-[48px] md:text-[32px] text-[28px] font-[600] text-[#4d7f9f]">My Skills</p>
      <div className="flex space-x-4 mb-4">
        {skills.map((skill) => (
          <CoolMode key={skill} options={{ particleCount: 15, speedHorz: 5, speedUp: 10 }}>
            <button
              onClick={() => setSkillsSelected(skill)}
              className={`py-2 px-3 bg-gray-300 rounded-lg ${
                skillsSelected === skill ? "bg-[#445964] text-[#4D7F9F]" : ""
              }`}
            >
              {skill.charAt(0).toUpperCase() + skill.slice(1).replace(/([A-Z])/g, " $1")}
            </button>
          </CoolMode>
        ))}
      </div>
      {/* Grid layout for skill cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {skillsData[skillsSelected].map((skillInfo) => (
          <div
            key={skillInfo.title}
            className="bg-white shadow-xl rounded-lg p-4 min-h-[150px] flex justify-between"
          >
            <div>
              <h2 className="text-[#445964] text-[18px] font-[600]">{skillInfo.title}</h2>
              <p className="text-[12px] font-[400] text-gray-500">{skillInfo.description}</p>
            </div>
            <AnimatedCircularProgressBar
              min={0}
              max={100}
              value={skillInfo.max}
              gaugeSecondaryColor="#445964"
              gaugePrimaryColor="#4D7F9F"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
