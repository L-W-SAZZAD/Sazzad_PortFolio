import React, { useContext } from "react";
import { AuthContext } from "../../Context/UseContext";

const expertise = [
  "Javascript,",
  "React,",
  "Html,",
  "Css,",
  "Daisy UI,",
  "Bootstrap,",
  "Tailwind,",
];
const comfortable = [
  "Node js,",
  "MongoDB,",
  "Express js,",
  "Material UI,",
  "Firebase,",
];
const tools = [
  "VS Code,",
  "Npm,",
  "Yarn,",
  "Git,",
  "Figma,",
  "Notion,",
  "Netlify",
];
const softSkills = [
  " Communication skills,",
  "Time management,",
  "Organization systems,",
  "Content writing,",
];
const familiar = ["Redux,"];

export default function Skills() {
  const { mode } = useContext(AuthContext);
  return (
    <div className="py-10 my-10" id="skills">
      <div className="skills_wrapper">
        {/* skills headers */}
        <div className="skills-header projects_header flex justify-between items-center gap-5 pb-10">
          <h2
            className={`${
              mode ? "text-black" : "text-white"
            } text-3xl font-semibold tracking-wide`}
          >
            Skill<span className="text-[var(--text-color-primary)]">s</span>
          </h2>
          <span className="flex-1 h-1 bg-[var(--text-color-primary)]"></span>
        </div>
        {/* skills headers */}
        {/* expertise skills here */}
        <div className="skills_items lg:flex md:flex items-center gap-2 pb-10">
          <div className="flex items-center gap-2 pb-10 lg:pb-0 md:pb-0">
            <span className="w-[20px] h-[20px] bg-[var(--text-color-primary)] inline-block rounded-full"></span>
            <li
              className={`${
                mode ? "text-black" : "text-white"
              } text-xl font-semibold tracking-wide `}
            >
              Expertise:
            </li>
          </div>
          <li
            className={`${
              mode ? "text-black" : "text-white"
            } text-lg font-semibold tracking-wide lg:flex md:flex flex-wrap gap-3 cursor-pointer`}
          >
            {expertise?.map((expert, index) => (
              <li
                className=" px-5 py-2 shadow-md shadow-[var(--text-color-primary)] rounded-md lg:text-start md:text-start text-center"
                key={index}
              >
                {expert}
              </li>
            ))}
          </li>
        </div>
        {/* expertise skills here */}
        {/* comfortable here */}
        <div className="skills_items lg:flex md:flex items-center gap-2 pb-10">
          <div className="flex items-center gap-2 pb-10 lg:pb-0 md:pb-0">
            <span className="w-[20px] h-[20px] bg-[var(--text-color-primary)] inline-block rounded-full"></span>
            <li
              className={`${
                mode ? "text-black" : "text-white"
              } text-xl font-semibold tracking-wide `}
            >
              Comfortable :
            </li>
          </div>
          <li
            className={`${
              mode ? "text-black" : "text-white"
            } text-lg font-semibold tracking-wide lg:flex md:flex flex-wrap gap-3 cursor-pointer`}
          >
            {comfortable?.map((expert, index) => (
              <li
                className=" px-5 py-2 shadow-md shadow-[var(--text-color-primary)] rounded-md lg:text-start md:text-start text-center"
                key={index}
              >
                {expert}
              </li>
            ))}
          </li>
        </div>
        {/* comfortable here */}

        {/*  Familiar here */}
        <div className="skills_items lg:flex md:flex items-center gap-2 pb-10">
          <div className="flex items-center gap-2 pb-10 lg:pb-0 md:pb-0">
            <span className="w-[20px] h-[20px] bg-[var(--text-color-primary)] inline-block rounded-full"></span>
            <li
              className={`${
                mode ? "text-black" : "text-white"
              } text-xl font-semibold tracking-wide `}
            >
              Familiar with :
            </li>
          </div>
          <li
            className={`${
              mode ? "text-black" : "text-white"
            } text-lg font-semibold tracking-wide lg:flex md:flex flex-wrap gap-3 cursor-pointer`}
          >
            {familiar?.map((expert, index) => (
              <li
                className=" px-5 py-2 shadow-md shadow-[var(--text-color-primary)] rounded-md lg:text-start md:text-start text-center"
                key={index}
              >
                {expert}
              </li>
            ))}
          </li>
        </div>
        {/*  Familiar here */}

        {/* tools here */}
        <div className="skills_items lg:flex md:flex items-center gap-2 pb-10">
          <div className="flex items-center gap-2 pb-10 lg:pb-0 md:pb-0">
            <span className="w-[20px] h-[20px] bg-[var(--text-color-primary)] inline-block rounded-full"></span>
            <li
              className={`${
                mode ? "text-black" : "text-white"
              } text-xl font-semibold tracking-wide `}
            >
              Tools:
            </li>
          </div>
          <li
            className={`${
              mode ? "text-black" : "text-white"
            } text-lg font-semibold tracking-wide lg:flex md:flex flex-wrap gap-3 cursor-pointer`}
          >
            {tools?.map((expert, index) => (
              <li
                className=" px-5 py-2 shadow-md shadow-[var(--text-color-primary)] rounded-md lg:text-start md:text-start text-center"
                key={index}
              >
                {expert}
              </li>
            ))}
          </li>
        </div>
        {/* tools here */}
        {/* soft skills here */}
        <div className="skills_items lg:flex md:flex items-center gap-2 pb-10">
          <div className="flex items-center gap-2 pb-10 lg:pb-0 md:pb-0">
            <span className="w-[20px] h-[20px] bg-[var(--text-color-primary)] inline-block rounded-full"></span>
            <li
              className={`${
                mode ? "text-black" : "text-white"
              } text-xl font-semibold tracking-wide `}
            >
              Soft skills:
            </li>
          </div>
          <li
            className={`${
              mode ? "text-black" : "text-white"
            } text-lg font-semibold tracking-wide lg:flex md:flex flex-wrap gap-3 cursor-pointer`}
          >
            {softSkills?.map((expert, index) => (
              <li
                className=" px-5 py-2 shadow-md shadow-[var(--text-color-primary)] rounded-md lg:text-start md:text-start text-center"
                key={index}
              >
                {expert}
              </li>
            ))}
          </li>
        </div>
        {/* soft skills here */}
      </div>
    </div>
  );
}
