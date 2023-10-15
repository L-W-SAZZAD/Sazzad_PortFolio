import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CgArrowRight } from "react-icons/cg";
import { AuthContext } from "../../Context/UseContext";

const projectItems = [
  {
    id: 1,
    projectName: "Epd It Solution",
    img: "https://i.ibb.co/XYfwyCV/screencapture-epdbd-2023-06-15-15-19-55.png",
    useLanguage: ["React", "Redux", "Express js", "Mongodb", "Tailwind"],
    liveLink: "www.epdbd.com",
    githubLink: "https://github.com/L-W-SAZZAD/epd-solution-website",
  },
  {
    id: 2,
    projectName: "Doctor Popy",
    img: "https://i.ibb.co/CKYBNsJ/screencapture-doctorpopy-test-2023-10-15-11-15-27.jpg",
    useLanguage: ["React", "Tailwind", "Swiper js", "Aos Animation", "Php"],
    liveLink: "https://dev-sazzadhossain.github.io/Doctor_Dev/index.html",
    githubLink: "https://github.com/dev-SazzadHossain/Doctor_Dev",
  },
  {
    id: 3,
    projectName: "Noty Project",
    img: "https://i.ibb.co/0YQkW2v/screencapture-fluffy-tapioca-831026-netlify-app-2023-10-15-11-27-49.jpg",
    useLanguage: ["React", "Tailwind"],
    liveLink: "https://fluffy-tapioca-831026.netlify.app/",
    githubLink: "https://github.com/dev-SazzadHossain/Noty_Project",
  },
];

export default function Projects() {
  const { mode } = useContext(AuthContext);
  return (
    <div id="projects">
      <div className="project_wrapper py-10  my-10">
        {/* project header */}
        <div className="projects_header flex justify-between items-center gap-5 pb-10">
          <h2
            className={`${
              mode ? "text-black" : "text-white"
            } text-3xl font-semibold tracking-wide`}
          >
            Pr<span className="text-[var(--text-color-primary)]">o</span>ject
          </h2>
          <span className="flex-1 h-1 bg-[var(--text-color-primary)]"></span>
          <Link
            className={`${
              mode ? "text-black" : "text-white "
            } flex items-center gap-5`}
          >
            View All{" "}
            <CgArrowRight className=" text-[var(--text-color-primary)]" />
          </Link>
        </div>
        {/* project header */}

        {/* all project here */}
        <div className="projects_items grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-5 ">
          {/* item call */}
          {projectItems?.map(
            ({ id, projectName, img, useLanguage, liveLink, githubLink }) => (
              <div
                className="projects_menu ring-2 ring-[var(--text-color-primary)] p-5 rounded-md relative"
                key={id}
              >
                <div className="projects_img">
                  <img
                    className=" max-h-[200px] w-full object-cover rounded-md"
                    src={img}
                    alt=""
                  />
                </div>
                <div className="info">
                  <div>
                    <p
                      className={`text-[16px] ${
                        mode ? "text-black" : "text-white"
                      }`}
                    >
                      {useLanguage?.map((language) => (
                        <span className="pr-2">{language}</span>
                      ))}
                    </p>
                    <h2
                      className={`${
                        mode ? "text-black" : "text-white"
                      } pb-5 text-center`}
                    >
                      <span className="text-xl"> ProjectName</span>:
                      {projectName}
                    </h2>
                    <div className="flex justify-center gap-5">
                      <Link
                        to={liveLink}
                        className={`${
                          mode ? "text-black" : "text-white "
                        } px-5 py-2 shadow-md shadow-black inline-block rounded-md `}
                      >
                        LiveLink
                      </Link>
                      <Link
                        to={githubLink}
                        className={`${
                          mode ? "text-black" : "text-white "
                        } px-5 py-2 shadow-md shadow-black inline-block rounded-md`}
                      >
                        GitHubLink
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
        {/* all project here */}
      </div>
    </div>
  );
}
