import Image from "next/image";
import React from "react";

const Works = () => {
  const works = [
    {
      name: "Post Something",
      desc: "É um projeto que simula uma rede social como o twitter desenvolvido com Next.js, Tailwind Css e Firebase para armazenar as informações e fazer autenticação pela conta da Google.",
      link: "https://post-something.vercel.app/",
    },
    {
      name: "Meu Portfólio (esse mesmo)",
      desc: "Este meu portfólio foi desenvolvido em Next.js e Tailwind, e é resultado de muito tempo de estudo e entusiasmo em desenvolvimento Front-end e Design.",
      link: "https://portfolio-ebon-omega.vercel.app/",
    },
    {
      name: "Andratex",
      desc: "Este foi um site do tipo landing page institucional desenvolvido para uma empresa de representação comercial. Foi desenvolvido com Next.js e Tailwind.",
      link: "https://andratex.vercel.app/",
    },
  ];

  return (
    <section className="geometry w-full py-16">
      <h1 className="cont mb-12 font-Poppins text-3xl font-semibold text-white sm:text-5xl">
        Projetos
        <span className="text-cyan-400">.</span>
      </h1>
      <div className="cont flex flex-col justify-between gap-6 md:flex-row">
        {works.map((work) => {
          return (
            <div
              key={work.name}
              className="flex w-full cursor-pointer flex-col justify-between gap-6 border-2 border-white p-5 text-white duration-300 ease-in hover:scale-105 hover:bg-white hover:text-purple1 md:max-w-[400px]"
            >
              <h2 className="font-Poppins text-2xl font-bold">{work.name}</h2>
              <p className="text-lg">{work.desc}</p>
              <a
                href={work.link}
                target="_blank"
                rel="noreferrer"
                className="font-Poppins text-xl font-semibold"
              >
                Visitar Projeto
              </a>
            </div>
          );
        })}
      </div>
      <div className="cont mt-8 flex flex-col items-center gap-8 md:flex-row">
        <Image
          className="dashed cursor-pointer rounded-full border-2 border-dashed border-white duration-150 hover:scale-105"
          src={"/images/me-positive.webp"}
          width={200}
          height={200}
          alt="meu avatar memoji joinha"
        />
        <p className="text-center text-lg font-normal text-white sm:text-xl md:text-left">
          Estes são os meus projetos mais recentes e importantes. No meu github,
          existem muitos outros repositórios, com projetos não tão
          interessantes, mas que traduzem minha trajetória desde meu
          ensino-técnico até agora. Caso queira visitar meus repositórios
          abertos,{" "}
          <a
            href="https://github.com/andrecandrad"
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer font-bold underline"
          >
            clique aqui
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default Works;
