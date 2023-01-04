import Image from "next/image";
import React from "react";
import Terminal from "./SVGs/Terminal";
import { FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="about" className="polygon w-full py-8 lg:mt-24">
      <main className="cont flex flex-col justify-between gap-6 lg:flex-row">
        <section className="w-full lg:w-[55%]">
          <Terminal />
        </section>
        <section className="w-full px-5 text-center lg:mt-0 lg:w-[45%] lg:text-left">
          <h1 className="font-Poppins text-3xl font-semibold sm:text-5xl">
            Não Entendeu Nada?
          </h1>
          <h3 className="text-2xl font-semibold text-purple1 sm:text-3xl">
            Eu te explico!
          </h3>
          <div className="mt-6 text-lg font-normal text-gray-600">
            Meu nome é Andre, tenho 20 anos e moro em Belo Horizonte, Minas
            Gerais. Sou técnico de informática, estudante de Sistemas de
            Informação e atuo há quase 1 ano como estagiário em desenvolvimento.
            No meu tempo livre adoro estudar e praticar meu Front-End com React
            e CSS, desenvolvendo sites como este.
          </div>
          <div className="mt-6 flex w-full flex-col-reverse items-center justify-between gap-6 lg:flex-row lg:gap-0">
            <div className="flex gap-9 text-gray-400">
              <a
                href="https://www.linkedin.com/in/andrecandrad/"
                target="_blank"
                rel="noreferrer"
                className="duration-150 hover:text-purple1"
              >
                <FaLinkedin size={40} />
              </a>
              <a
                href="https://github.com/andrecandrad"
                target="_blank"
                rel="noreferrer"
                className="duration-150 hover:text-purple1"
              >
                <FaGithub size={40} />
              </a>
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className="duration-150 hover:text-purple1"
              >
                <FaDiscord size={40} />
              </a>
            </div>
            <Image
              className="cursor-pointer duration-150 hover:scale-105"
              src={"/images/me-positive.webp"}
              width={160}
              height={160}
              alt="meu avatar memoji joinha"
            />
          </div>
        </section>
      </main>
    </section>
  );
};

export default Hero;
