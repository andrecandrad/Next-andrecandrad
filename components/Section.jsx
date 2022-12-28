import React from "react";
import { useState } from "react";

const Section = () => {
  const experiencias = [
    {
      title: "Jovem Aprendiz",
      company: "Hotmart",
      period: "Set 2020 - Ago 2021 (11 meses)",
      desc: "Ajudei o time nos pagamentos dos nossos produtores e afiliados, atendimento de dúvidas relacionadas a área e ajuda com comprovantes bancários.",
    },
    {
      title: "Estagiário em Desenvolvimento",
      company: "4mti",
      period: "Fev 2022 - Jun 2022 (5 meses)",
      desc: "Estágio em desenvolvimento full-stack. Trabalhei com tecnologias como: HTML/CSS,Javascript, jQuery, PHP, Python, MySql.",
    },
    {
      title: "Estagiário em Desenvolvimento",
      company: "Levty",
      period: "Jul 2022 - Hoje (5 meses)",
      desc: "Estágio técnico em desenvolvimento de software. Trabalho na plataforma SYDLE-ONE com JavaScript utilizando aplicando os conceitos de orientação a objetos, api e banco de dados.",
    },
  ];

  const [activeJob, setActiveJob] = useState(
    experiencias.find((experiencia) => experiencia.company === "Hotmart")
  );

  function handleJob(job) {
    let trabalho = experiencias.find(
      (experiencia) => experiencia.company === job
    );
    setActiveJob(trabalho);
  }

  let isSelectedJob = null;

  return (
    <section className="mb-36 mt-36 w-full py-8">
      <div className="cont">
        <h1 className="mb-12 font-Poppins text-3xl font-semibold sm:text-5xl">
          Experiências
          <span className="text-purple1">.</span>
        </h1>
        <div className="flex w-full flex-col gap-10 sm:flex-row">
          <ul className="w-full shrink-0 rounded-sm shadow-xl sm:basis-72">
            {experiencias.map((experiencia) => {
              return (
                <li
                  key={experiencia.company}
                  {...(activeJob.company === experiencia.company
                    ? (isSelectedJob =
                        "cursor-pointer py-6 px-8 font-Poppins text-xl text-purple1 ease-in duration-150 font-semibold border-l-[5px] border-b-[5px] border-purple1")
                    : (isSelectedJob =
                        "cursor-pointer py-6 px-8 font-Poppins text-xl ease-in duration-150"))}
                  className={isSelectedJob}
                  onClick={() => {
                    handleJob(experiencia.company);
                  }}
                >
                  {experiencia.company}
                </li>
              );
            })}
          </ul>

          <div>
            <div className="mb-6 flex flex-col items-baseline justify-between sm:flex-row">
              <h3 className="mb-6 font-Poppins text-2xl font-normal sm:mb-0">
                {activeJob.title}
              </h3>
              <h5 className="text-base font-medium text-gray-600">
                {activeJob.period}
              </h5>
            </div>

            <h5 className="mb-6 font-Poppins text-xl font-medium text-purple1">
              {activeJob.company}
            </h5>

            <p className="text-lg font-normal text-gray-600 sm:text-xl">
              {activeJob.desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
