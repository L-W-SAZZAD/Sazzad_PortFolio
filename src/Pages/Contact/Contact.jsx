import React, { useContext } from "react";
import { AuthContext } from "../../Context/UseContext";
import { MdOutlineMailOutline } from "react-icons/md";

export default function Contact() {
  const { mode } = useContext(AuthContext);
  return (
    <div className="py-20 my-10 relative " id="contacts">
      <div className="contact_wrapper ">
        {/* contact headers */}
        <div className="skills-header projects_header flex justify-between items-center gap-5 pb-10">
          <h2
            className={`${
              mode ? "text-black" : "text-white"
            } text-3xl font-semibold tracking-wide`}
          >
            C<span className="text-[var(--text-color-primary)]">o</span>ntacts
          </h2>
          <span className="flex-1 h-1 bg-[var(--text-color-primary)]"></span>
        </div>
        {/* contact headers */}
        <div className="about_para">
          <p
            className={`${
              mode ? "text-black" : "text-[var(--text-gray)]"
            } tracking-wide text-justify p-5 `}
          >
            <span className=" text-xl text-[var(--text-color-primary)] ">
              As-salamu alaykum
            </span>
            I’m interested in freelance opportunities. However, if you have
            other request or question, don’t hesitate to contact me...--
          </p>
        </div>
        {/*  contact*/}
        <div
          className={`${
            mode ? "text-black" : "text-[var(--text-gray)]"
          } tracking-wide text-center shadow-md shadow-[var(--text-color-primary)] max-w-[300px] p-5 rounded-md absolute bottom-0 right-0`}
        >
          <p>Message Me Here</p>
          <div className="flex items-center gap-2 justify-center">
            <MdOutlineMailOutline />
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">
              sazzadssd512@gmail.com
            </a>
          </div>
        </div>
        {/*  contact*/}
      </div>
    </div>
  );
}
