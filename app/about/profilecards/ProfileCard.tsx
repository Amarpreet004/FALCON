"use client";

import React, { useEffect, useState } from "react";
import { CardBody, CardContainer, CardItem } from "./3d-card";
import PopupCard from "./popupcard";

type Profile = {
  name: string;
  role: string;
  image: string;
  batch: string;
  socials: {
    github: string;
    linkedin: string;
    instagram: string;
  };
  skills: string[];
  about: string;
  achievements: { title: string; date?: string; desc?: string }[];
};

export function ThreeDCardDemo() {
  const [showSecondCard, setShowSecondCard] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupProfile, setPopupProfile] = useState<Profile | null>(null);

  // Profile data for both cards
  const profile1 = {
    name: "Amarpreet Singh",
    role: "Full Stack Developer || Graphic Designer & Video Editor ",
    image: "/IMG_6268.jpeg",
    batch: "The Uniques 3.0",
    socials: {
      github: "https://github.com/your-github",
      linkedin: "https://www.linkedin.com/in/amarpreet-singh-9022a62a6/",
      instagram: "https://instagram.com/your-instagram"
    },
    skills: [
      "Next.js", "React.js", "React.Native", "Bootstrap", "Wordpress", "HTML", "CSS", "Adobe Premiere pro 2025", "Wonder share Filmora 2025", "Capcut"
    ],
    about:
      "I’m multi-disciplinary tech enthusiast passionate about building impactful digital experiences that merge creativity with code. With over 2 years of hands-on experience, I work at the exciting intersection of web development, visual storytelling, and user-centered design. Currently pursuing a B.Tech in Computer Science & Design, I specialize in crafting everything from responsive web platforms to captivating visuals and motion graphics.",
    achievements: [
      { title: "3rd Position Winner at BharatTech Hackathon", date: "2025-02-08" },
      { title: "2nd Prize in Drawing Competition", date: "2022-10-20", desc: "In 2022, I was awarded 2nd Prize in a Drawing Competition held at my school, Kendriya Vidyalaya, AFS High Ground, Chandigarh. This recognition reflected my creativity, attention to detail, and passion for visual art. Competing among many talented students, this achievement boosted my confidence and further encouraged my interest in the field of art and design." },
      { title: "Token of Appreciation – ELEVATE 2024" },
      { title: "School Captain & Head Boy (Twice)" }
    ]
  };
  const profile2 = {
    name: "Kapil Kumar Gupta ",
    role: "Frontend Developer || Graphic Designer & UI/UX",
    image: "/Screenshot 2025-07-07 at 1.04.23 AM.png",
    batch: "The Uniques 3.0",
    socials: {
      github: "https://github.com/kapilgupta",
      linkedin: "https://www.linkedin.com/in/amarpreet-singh-9022a62a6/",
      instagram: "https://instagram.com/kapilgupta"
    },
    skills: [
      "Next.js", "React.js", "UI/UX", "Bootstrap", "HTML", "CSS", "Figma", "Photoshop"
    ],
    about:
      "Kapil is a creative frontend developer and designer with a passion for UI/UX. He specializes in building beautiful, user-friendly interfaces and has a strong background in graphic design.",
    achievements: [
      { title: "3rd Position Winner at BharatTech Hackathon", date: "2025-02-08" },
      { title: "2nd Prize in Drawing Competition", date: "2022-10-20", desc: "In 2022, I was awarded 2nd Prize in a Drawing Competition held at my school, Kendriya Vidyalaya, AFS High Ground, Chandigarh. This recognition reflected my creativity, attention to detail, and passion for visual art. Competing among many talented students, this achievement boosted my confidence and further encouraged my interest in the field of art and design." },
      { title: "Token of Appreciation – ELEVATE 2024" },
      { title: "School Captain & Head Boy (Twice)" }
    ]
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSecondCard((prev) => !prev);
    }, 10000);
    return () => clearTimeout(timer);
  }, [showSecondCard]);

  return (
    <div className="min-h-screen px-10 py-20">
      <div className="flex flex-col md:flex-row items-start gap-20">
        {/* Left side: 3D card */}
        <CardContainer className="inter-var" containerClassName="p-0">
          <CardBody className="rounded-xl border overflow-hidden shadow-xl bg-gray-50 dark:bg-black border-black/[0.1] dark:border-white/[0.2] w-96 h-[22rem]">
            <CardItem translateZ={100} className="relative w-full h-full">
              <img
                src={
                  showSecondCard
                    ? "/kapil.jpeg"
                    : "/preet.JPG"
                }
                alt="card image"
                className="w-full h-full object-cover"
              />
            </CardItem>
          </CardBody>
        </CardContainer>
        {/* Right side: Page content (synchronized with card) */}
        <div className="flex-1 text-gray-800 dark:text-white mt-5 md:mt-0">
          {showSecondCard ? (
            <>
              <h1 className="text-4xl font-bold">Kapil Kumar Gupta</h1>
              <h4 className="text-1xl font-bold">Co Founder</h4>
              <p className="mt-4 max-w-xl">
               As the Co-Founder of Falcon Web Solution, Kapil brings a powerful blend of strategic thinking and creative vision to the team. His expertise lies in project planning, client communication, and delivering seamless user experiences across web and digital platforms.
Kapil plays a key role in ensuring that each project not only meets the technical and visual benchmarks but also aligns with the client’s brand goals. From overseeing custom website builds to managing graphic and video projects, Kapil ensures that Falcon Web Solution consistently delivers excellence across every touchpoint.
Together with the founding team, Kapil is committed to scaling Falcon into a leading digital solutions provider, where innovation, design, and performance go hand in hand.          </p>
            </>
          ) : (
            <>
              <h1 className="text-4xl font-bold">Amarpreet Singh</h1>
              <h4 className="text-1xl font-bold">Founder</h4>
                <p className="mt-4 max-w-xl">
                  As the founder of Falcon Web Solution, my vision was clear from day one—to create a one-stop digital powerhouse that delivers modern, meaningful, and measurable results. What started as a passion for web design and visual creativity has now grown into a full-fledged digital solutions startup.
At Falcon Web Solution, we specialize in website design & development, graphic design, video editing, and digital courses. We've already successfully delivered over 5 modern websites, each tailored to meet our clients’ unique needs. But we don’t just build websites—we take full ownership of our clients' online presence, from social media management to ongoing web maintenance and digital branding.
Our goal is simple: Empower businesses to grow through design, technology, and strategy.
With every project, we aim to blend creativity with functionality, offering not just a service—but a solution.
                </p>
            </>
          )}
        </div>
        {/* PopupCard for More button, only shows the profile that was clicked */}
        <PopupCard open={popupOpen} onClose={() => setPopupOpen(false)} profile={popupProfile} />
      </div>
    </div>
  );
}

function SequentialBurstText({ showSecondCard }: { showSecondCard: boolean }) {
  const [visible, setVisible] = useState<boolean[]>([]);
  const [currentText, setCurrentText] = useState(showSecondCard);

  // Texts for both states
  const texts = showSecondCard
    ? [
        'Meet', 'Alex', 'Kim', '\n',
        'Kapil ', 'is', 'a', 'Product', 'Designer', '&', 'UI/UX', 'Specialist.', 'Explore', 'his', 'portfolio', 'or', 'get', 'in', 'touch', 'to', 'collaborate', 'on', 'your', 'next', 'project!'
      ]
    : [
        'Welcome', 'to', 'Our', 'Platform', '\n',
        'Amarpreet', 'Singh', 'is', 'the', 'Founder.', 'Discover', 'our', 'features', 'and', 'sign', 'up', 'to', 'get', 'started!'
      ];

  useEffect(() => {
    setCurrentText(showSecondCard);
    setVisible(Array(texts.length).fill(false));
    texts.forEach((_, i) => {
      setTimeout(() => {
        setVisible((v) => {
          const copy = [...v];
          copy[i] = true;
          return copy;
        });
      }, i * 50 + 100);
    });
    // eslint-disable-next-line
  }, [showSecondCard]);

  // Split into title and paragraph by \n
  const titleWords: string[] = [];
  const paraWords: string[] = [];
  let foundBreak = false;
  texts.forEach((w) => {
    if (w === '\\n') foundBreak = true;
    else if (!foundBreak) titleWords.push(w);
    else paraWords.push(w);
  });

  let paraIdx = titleWords.length + 1;

  // To prevent layout shift, always render all words (with opacity 0 if not visible)
  return (
    <div className="flex-1 text-gray-800 dark:text-white mt-5 md:mt-0 min-h-[140px]">
      <h1 className="text-4xl font-bold flex flex-wrap gap-2">
        {titleWords.map((word, i) => (
          <span
            key={i}
            style={{
              display: 'inline-block',
              opacity: visible[i] ? 1 : 0,
              transform: visible[i] ? 'scale(1)' : 'scale(0.7)',
              transition: 'opacity 0.3s, transform 0.3s',
              transitionDelay: `${i * 50}ms`,
              minWidth: word === '\\n' ? '100%' : undefined,
            }}
          >
            {word === '\\n' ? <br /> : word}
          </span>
        ))}
      </h1>
      <p className="mt-4 max-w-xl flex flex-wrap gap-2">
        {paraWords.map((word, i) => (
          <span
            key={i}
            style={{
              display: 'inline-block',
              opacity: visible[paraIdx + i] ? 1 : 0,
              transform: visible[paraIdx + i] ? 'scale(1)' : 'scale(0.7)',
              transition: 'opacity 0.3s, transform 0.3s',
              transitionDelay: `${(paraIdx + i) * 50}ms`,
            }}
          >
            {word}
          </span>
        ))}
      </p>
    </div>
  );
}
