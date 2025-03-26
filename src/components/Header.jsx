import { useState } from "react";
import Button from "./Button";
import HamburgerMenu from "./HamburgerMenu";

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <header className="h-16 relative">
      <div className="h-full max-width flex items-center justify-between">
        <a href="/">
          <h2 className="text-3xl">
            Zohaib<span className="text-[#32F900]">.</span>
          </h2>
        </a>
        <nav
          className="hidden md:block md:space-x-10 lg:space-x-14 text-lg"
          id="nav"
        >
          <a href="#hero">Home</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
        <a href="#contact">
          <Button
            content={"Lets Talk"}
            bgColor={"#32F900"}
            color={"#121212"}
            borderColor={"#32F900"}
            hoverBgColor={"#F6F6F6"}
            responsive={true}
            width={"fit-content"}
          />
        </a>
        <HamburgerMenu isClicked={isClicked} setIsClicked={setIsClicked} />
      </div>
      <div
        className={`absolute top-0 ${
          isClicked ? "-right-0 opacity-100" : "-right-full opacity-0"
        } h-screen w-full bg-[#121212] z-10 pt-20 px-6 transition-all duration-700 ease-in-out`}
      >
        <nav className="flex flex-col gap-7 text-3xl mb-10">
          <a
            onClick={() => {
              setIsClicked(false);
            }}
            href="#hero"
          >
            Home
          </a>
          <a
            onClick={() => {
              setIsClicked(false);
            }}
            href="#portfolio"
          >
            Portfolio
          </a>
          <a
            onClick={() => {
              setIsClicked(false);
            }}
            href="#experience"
          >
            Experience
          </a>
          <a
            onClick={() => {
              setIsClicked(false);
            }}
            href="#contact"
          >
            Contact
          </a>
        </nav>
        <a href="#contact">
          <Button
            setIsClicked={setIsClicked}
            content={"Lets Talk"}
            bgColor={"#32F900"}
            color={"#121212"}
            borderColor={"#32F900"}
            hoverBgColor={"#F6F6F6"}
            responsive={false}
            width={"100%"}
            hamburgerBtn={true}
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
