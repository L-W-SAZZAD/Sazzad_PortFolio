import React, { useContext } from "react";
import footerLogo from "../../assets/logo.png";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { AuthContext } from "../../Context/UseContext";

export default function Footer() {
  const { mode } = useContext(AuthContext);
  return (
    <div className="footer">
      <div className="py-5 border-t-2 border-[var(--text-gray)]">
        <div
          className={`footer_wrapper lg:flex md:flex lg:justify-between md:justify-between lg:items-center md:items-center sm:flex sm:justify-between sm:items-center ${
            mode ? "text-black" : "text-white"
          }`}
        >
          <div className="left">
            <div className="img flex items-center gap-2">
              <img
                className=" bg-[#000] p-1 rounded-full "
                src={footerLogo}
                alt="logo"
              />
              <h2>Sazzad</h2>
            </div>
            <p className="pt-2 pb-5">Web Designer And Font-End-Developer</p>
          </div>
          <div className="right">
            <h2 className=" lg:text-center md:text-center sm:text-center text-start pb-2">
              Media
            </h2>
            <div className="media_icons lg:flex md:flex sm:flex items-center gap-5 flex justify-center ">
              <FaFacebook className="text-2xl" />
              <FaGithub className="text-2xl" />
              <FaLinkedin className="text-2xl" />
            </div>
          </div>
        </div>
        <p className={`text-center ${mode ? "text-black" : "text-white"} pt-5`}>
          © Copyright 2022. Made by{" "}
          <span className="text-[var(--text-color-primary)] text-2xl">
            sazzad
          </span>
        </p>
      </div>
    </div>
  );
}
