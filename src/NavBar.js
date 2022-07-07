import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { useState } from "react";

// css
import "./NavBar.css";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  function clickBurgerBtn() {
    console.log(isOpen);
    setIsOpen(!isOpen);
  }

  return (
    <>
      <button onClick={clickBurgerBtn} className="hamburgerBtn">
        <GiHamburgerMenu />
      </button>
      <nav className={isOpen ? "navbar showNavbar" : "navbar"}>
        <div className="logo-div">
          <h1>Alyan Developer</h1>
        </div>
        <ul className="links-div">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Profile</a>
          </li>
        </ul>
        <ul className="socials">
          <li>
            <a href="https://twitter.com/AlyanDeveloper" target={"_blank"}>
              <FaTwitter />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/alyan-hanif-2542b11ba/"
              target={"_blank"}
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="https://github.com/MuhammadAlyan1" target={"_blank"}>
              <FaGithub />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
