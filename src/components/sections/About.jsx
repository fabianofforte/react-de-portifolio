import React, { useState } from "react";
import { Download, Code2, Sparkles } from "lucide-react";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiMongodb } from "react-icons/si";
import { PERSONAL_INFO, ABOUT_STATS } from "../../utils/constants";
import FadeIn from "../animations/FadeIn";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground";

const About = () => {

  // Skills
  const skills = [
    { name: 'React.js', icon: SiReact, color: '#61DAFB' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  ];
  return <section id="about" className="">
    <RadialGradientBackground variant="about" />
    <div className="">
      {/* Main Grid */}
      <div className="">
        {/* Left Column - Content */}
        <div className="">
          <div className="">
            <FadeIn delay={60}>
              <div className="">
                <Code2 className="" />
                <span className="">
                  Full-Stack Developer
                </span>
                <Sparkles className="" />
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <h2 className="">
                Criando experiências digitais que fazem a diferença.
              </h2>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="">
                {PERSONAL_INFO.bio.map((parag))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  </section>
};

export default About;
