import React, { useContext } from "react";
import { AuthContext } from "../../Context/UseContext";

export default function About() {
  const { mode } = useContext(AuthContext);
  return (
    <div className="py-10 my-10" id="about-me">
      <div className="about_wrapper">
        {/* about headers */}
        <div className="skills-header projects_header flex justify-between items-center gap-5 pb-10">
          <h2
            className={`${
              mode ? "text-black" : "text-white"
            } text-3xl font-semibold tracking-wide`}
          >
            About-M<span className="text-[var(--text-color-primary)]">e</span>
          </h2>
          <span className="flex-1 h-1 bg-[var(--text-color-primary)]"></span>
        </div>
        {/* about headers */}

        <div className="about_para">
          <p
            className={`${
              mode ? "text-black" : "text-[var(--text-gray)]"
            } tracking-wide text-justify p-5`}
          >
            <span className=" text-xl text-[var(--text-color-primary)]">
              {" "}
              As-salamu alaykum
            </span>
            , i’m sazzad! I’m a self-taught front-end developer. I can develop
            responsive websites from scratch and raise them into modern
            user-friendly web experiences. Transforming my creativity and
            knowledge into a websites has been my passion for over a year. I
            have been helping various clients to establish their presence
            online. I always strive to learn about the newest technologies and
            frameworks....
          </p>
        </div>
      </div>
    </div>
  );
}
