import React, { useContext } from "react";
import profile from "../../assets/profile.png";
import { AuthContext } from "../../Context/UseContext";
import imagesShadow from "../../assets/imges_shadow.png";
import dots from "../../assets/Dots.png";
import { Link } from "react-router-dom";
import resume from "../../assets/resume/Md Sazzad HossainBarisal,Bangladesh.pdf";

export default function Hero() {
  const { mode } = useContext(AuthContext);
  return (
    <div className=" lg:flex md:flex lg:justify-between lg:items-center py-10 my-10">
      {/* left */}
      <div className="hero_left">
        <h1
          className={`${
            mode ? "text-black" : "text-white"
          } font-semibold text-3xl capitalize pb-5`}
        >
          Sazzad is a
          <span className="text-[var(--text-color-primary)]">
            {" "}
            web designer
          </span>{" "}
          and{" "}
          <span className="text-[var(--text-color-primary)]">
            front-end developer
          </span>
        </h1>
        <p
          className={`${
            mode ? "text-[#000]" : "text-[var(--text-gray)]"
          }  pb-5`}
        >
          He crafts responsive websites where technologies meet creativity
        </p>
        <div className="button">
          <Link
            className={`${
              mode ? "text-black" : "text-white"
            } py-2 px-6 ring-2 ring-[var(--text-color-primary)] border-none outline-none hover:bg-[var(--text-color-primary)] rounded-md duration-200 transition-all ease-linear mr-5`}
          >
            Contact Me
          </Link>
          <a
            href={resume}
            download={"resume"}
            className={`${
              mode ? "text-black" : "text-white"
            } py-2 px-6 ring-2 ring-[var(--text-color-primary)] border-none outline-none hover:bg-[var(--text-color-primary)] rounded-md duration-200 transition-all ease-linear`}
          >
            Download Cv
          </a>
        </div>
      </div>
      {/* left */}
      {/* right */}
      <div className="hero_right relative lg:pt-0 md:pt-0 pt-12">
        <div className="img z-10">
          <img className="relative z-30" src={profile} alt="" />
        </div>
        <div>
          <img
            className=" absolute lg:top-5 top-12 "
            src={imagesShadow}
            alt=""
          />
        </div>
        <div>
          <img className=" absolute bottom-0 right-0 z-50" src={dots} alt="" />
        </div>
      </div>
      {/* right */}
    </div>
  );
}
