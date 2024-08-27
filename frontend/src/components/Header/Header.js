import React, { useState } from "react";
import { Container } from "@mui/material";
import "./Header.css";
import { IoMenuSharp, IoCloseSharp } from "react-icons/io5";
import { IoHome } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { AiFillProject } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { GiSkills } from "react-icons/gi";
import { MdFeaturedPlayList } from "react-icons/md";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const MenuContent = (
    <div className="Nav__Menu__Content__Main">
      <Container style={{ marginBottom: "10px" }}>
        <div className="Nav__Menu__Content flex-column color-black">
          <span
            style={{
              margin: "10px 0",
            }}
          >
            <Link
              to="/"
              className="flex-row align-center gap-10 txt-dec color-black"
            >
              <div>
                <IoHome />
              </div>
              <div>
                <p>Home</p>
              </div>
            </Link>
          </span>

          <span
            style={{
              margin: "10px 0",
            }}
          >
            <ScrollLink
              to="features"
              spy={true}
              smooth={true}
              offset={-20}
              duration={1000}
              className="flex-row align-center gap-10 txt-dec color-black cursor-pointer"
            >
              <div>
                <MdFeaturedPlayList />
              </div>
              <div>
                <p>Features</p>
              </div>
            </ScrollLink>
          </span>

          <span
            style={{
              margin: "10px 0",
            }}
          >
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              offset={-20}
              duration={1000}
              className="flex-row align-center gap-10 txt-dec color-black cursor-pointer"
            >
              <div>
                <FaUser />
              </div>
              <div>
                <p>About</p>
              </div>
            </ScrollLink>
          </span>

          <span
            style={{
              margin: "10px 0",
            }}
          >
            <ScrollLink
              to="footer"
              spy={true}
              smooth={true}
              offset={-20}
              duration={1000}
              className="flex-row align-center gap-10 txt-dec color-black cursor-pointer"
            >
              <div>
                <FaPhone />
              </div>
              <div>
                <p>Contact</p>
              </div>
            </ScrollLink>
          </span>
        </div>
      </Container>
    </div>
  );

  const showMenuBarContent = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div className="Nav__Main">
      <Container>
        <div className="Nav__Med">
          <div>
            <h1 className="Logobrand">Project</h1>
          </div>
          {!isMenuOpen && (
            <div>
              <div className="Nav__Links">
                <span>
                  <Link
                    to="/"
                    className="flex-row justify-center align-center gap-10 txt-dec color-black"
                  >
                    <div>
                      <IoHome />
                    </div>
                    <div>
                      <p>Home</p>
                    </div>
                  </Link>
                </span>

                <span>
                  <ScrollLink
                    to="features"
                    spy={true}
                    smooth={true}
                    offset={-20}
                    duration={1000}
                    className="flex-row justify-center align-center gap-10 txt-dec color-black cursor-pointer"
                  >
                    <div>
                      <MdFeaturedPlayList />
                    </div>
                    <div>
                      <p>Features</p>
                    </div>
                  </ScrollLink>
                </span>

                <span>
                  <ScrollLink
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-20}
                    duration={1000}
                    className="flex-row justify-center align-center gap-10 txt-dec color-black cursor-pointer"
                  >
                    <div>
                      <FaUser />
                    </div>
                    <div>
                      <p>About</p>
                    </div>
                  </ScrollLink>
                </span>

                <span>
                  <ScrollLink
                    to="footer"
                    spy={true}
                    smooth={true}
                    offset={-20}
                    duration={1000}
                    className="flex-row justify-center align-center gap-10 txt-dec color-black cursor-pointer"
                  >
                    <div>
                      <FaPhone />
                    </div>
                    <div>
                      <p>Contact</p>
                    </div>
                  </ScrollLink>
                </span>
              </div>
            </div>
          )}
          <div className="Menu-bar">
            <p onClick={showMenuBarContent}>
              {isMenuOpen ? (
                <IoCloseSharp className="cursor-pointer menu-icons-bar" />
              ) : (
                <IoMenuSharp className="cursor-pointer menu-icons-bar" />
              )}
            </p>
          </div>
        </div>
        {isMenuOpen && <>{MenuContent}</>}
      </Container>
    </div>
  );
}
