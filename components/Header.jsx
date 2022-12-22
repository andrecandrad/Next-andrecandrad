import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navLinks = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "Sobre",
      link: "#about",
    },
    {
      name: "Contato",
      link: "#contact",
    },
  ];

  return (
    <div className="sticky left-0 top-0 w-full bg-background">
      <header className="cont flex flex-col items-center justify-center gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="z-10 flex flex-col items-center text-black sm:items-start">
          <h2 className="text-4xl font-semibold">André Andrade</h2>
          <p className="text-lg font-medium text-purple1 hover:font-medium">
            Desenvolvimento Front-End
          </p>
        </div>
        <nav className="hidden sm:flex">
          <ul className="flex gap-6">
            {navLinks.map((element) => {
              return (
                <li key={element.name}>
                  <a
                    className="text-xl font-medium hover:text-purple1"
                    href={element.link}
                  >
                    {element.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/*Menu Mobile Button*/}
        <div className="z-10 block sm:hidden" onClick={handleNav}>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        <nav
          className={
            nav
              ? "absolute top-0 left-0 right-0 bottom-0 flex h-screen w-full items-center justify-center bg-background text-center duration-300 ease-in sm:hidden"
              : "absolute top-0 -left-[100%] right-0 bottom-0 flex h-screen w-full items-center justify-center bg-background text-center duration-300 ease-in sm:hidden"
          }
        >
          <ul className="flex flex-col items-center gap-12">
            {navLinks.map((element) => {
              return (
                <li key={element.name}>
                  <a
                    className="text-4xl font-medium hover:text-purple1"
                    href={element.link}
                  >
                    {element.name}
                  </a>
                </li>
              );
            })}
            <li className="absolute bottom-0">
              <Image
                src="/images/me-heart.webp"
                width={200}
                height={200}
                alt="Meu avatar memoji"
              ></Image>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
