import React, { useContext, useEffect, useState } from "react";
import logo from "../../../assets/logo.png";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { FcMenu } from "react-icons/fc";
import { AuthContext } from "../../../Context/UseContext";

export default function Navbar() {
  const { setMode, mode } = useContext(AuthContext);
  const [menu, setMenu] = useState(true);

  useEffect(() => {}, [menu, mode]);
  return (
    <div className="">
      <div className="wrapper lg:flex md:flex sm:flex flex lg:justify-between md:justify-between sm:justify-between justify-between lg:items-center md:items-center sm:items-center items-center py-5">
        {/* logo  */}
        <div className="nav_left">
          <div className="logo lg:flex md:flex sm:flex flex items-center gap-2">
            <div className="img">
              <img
                src={logo}
                alt="logo"
                className=" bg-[#000] p-1 rounded-full "
              />
            </div>
            <strong className=" text-[var(--text-color-primary)] tracking-wide text-lg font-semibold">
              Sazzad
            </strong>
          </div>
        </div>
        {/* logo */}

        <div className="all_items lg:flex md:flex items-center gap-5">
          {/* nav list */}
          <div className="nav_right ">
            <ul
              className={`lg:flex md:flex sm:grid grid place-items-center gap-5 lg:static md:static sm:absolute absolute top-0 ${
                menu ? "left-[-800px]" : "left-[0px]"
              } lg:w-fit md:w-fit w-[70%] lg:bg-inherit md:bg-inherit ${
                mode ? "bg-white" : "bg-[#00000056]"
              } lg:min-h-fit md:min-h-fit min-h-screen lg:shadow-none md:shadow-none shadow-md shadow-slate-50 transition-all ease-linear duration-200 z-50`}
            >
              <li>
                <a
                  href="#home"
                  className={`${
                    mode ? "text-[#000]" : "text-[var(--text-color)]"
                  } font-[var(--text-font)] tracking-wide text-lg hover:underline transition ease-linear duration-200 hover:text-[var(--text-color-primary)]`}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className={`${
                    mode ? "text-[#000]" : "text-[var(--text-color)]"
                  } font-[var(--text-font)] tracking-wide text-lg hover:underline transition ease-linear duration-200 hover:text-[var(--text-color-primary)]`}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className={`${
                    mode ? "text-[#000]" : "text-[var(--text-color)]"
                  } font-[var(--text-font)] tracking-wide text-lg hover:underline transition ease-linear duration-200 hover:text-[var(--text-color-primary)]`}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#about-me"
                  className={`${
                    mode ? "text-[#000]" : "text-[var(--text-color)]"
                  } font-[var(--text-font)] tracking-wide text-lg hover:underline transition ease-linear duration-200 hover:text-[var(--text-color-primary)]`}
                >
                  About-Me
                </a>
              </li>
              <li>
                <a
                  href="#contacts"
                  className={`${
                    mode ? "text-[#000]" : "text-[var(--text-color)]"
                  } font-[var(--text-font)] tracking-wide text-lg hover:underline transition ease-linear duration-200 hover:text-[var(--text-color-primary)]`}
                >
                  Contacts
                </a>
              </li>
            </ul>
          </div>
          {/* nav list */}
          {/* mode change */}
          <div className="mode flex items-center justify-center gap-5">
            <div
              onClick={() => setMode(!mode)}
              className={`${
                mode ? "text-[#000]" : "text-[var(--text-color)]"
              } font-[var(--text-font)] tracking-wide text-lg cursor-pointer`}
            >
              {mode ? <MdDarkMode /> : <MdOutlineLightMode />}
            </div>
            {/* mobile icons */}
            <FcMenu
              color="white"
              onClick={() => setMenu(!menu)}
              className={`${
                menu && "bg-[#000]"
              }  tracking-wide cursor-pointer lg:hidden md:hidden text-3xl rounded-full`}
            />
            {/* mobile icons */}
          </div>
          {/* mode change */}
        </div>
      </div>
    </div>
  );
}
