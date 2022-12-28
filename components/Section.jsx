import React from "react";
import { useState } from "react";

const Section = () => {
  const experiencias = [
    {
      title: "Jovem Aprendiz",
      company: "Hotmart",
      period: "Set 2020 - Ago 2021 (11 meses)",
      desc: "Ajudei o time nos pagamentos dos nossos produtores e afiliados, atendimento de dúvidas relacionadas a área e ajuda com comprovantes bancários.",
      tags: [
        "BackOffice",
        "Bancos",
        "Excel",
        "Transações",
        "Zendesk",
        "Atendimento",
      ],
    },
    {
      title: "Estagiário em Desenvolvimento",
      company: "4mti",
      period: "Fev 2022 - Jun 2022 (5 meses)",
      desc: "Estágio técnico em desenvolvimento web full-stack. Trabalhei criando novas funcionalidades e dando manutenção nos softwares da empresa, utilizando tecnologias para web, bancos de dados e metodologias ágeis.",
      tags: [
        "Html",
        "Css",
        "JavaScript",
        "jQuery",
        "MySql",
        "Python",
        "Flask",
        "Php",
        "Git",
      ],
    },
    {
      title: "Estagiário em Desenvolvimento",
      company: "Levty",
      period: "Jul 2022 - Hoje (5 meses)",
      desc: "Estágio técnico em desenvolvimento de software. Trabalho na plataforma SYDLE-ONE aplicando os conceitos de orientação a objetos, API, banco de dados, código limpo e metodologias ágeis.",
      tags: [
        "Sydle-One",
        "POO",
        "Javascript",
        "Código Limpo",
        "Scrum",
        "Kanban",
        "Api's",
        "No-Sql",
      ],
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
    <section className="mt-28 mb-36 w-full py-8">
      <div className="cont">
        <h1 className="mb-12 font-Poppins text-3xl font-semibold sm:text-5xl">
          Experiências
          <span className="text-purple1">.</span>
        </h1>
        <div className="flex w-full flex-col gap-10 md:flex-row">
          <ul className="flex max-h-[233px] w-full shrink-0 flex-col justify-between rounded-sm shadow-xl sm:basis-72">
            {experiencias.map((experiencia) => {
              return (
                <li
                  key={experiencia.company}
                  {...(activeJob.company === experiencia.company
                    ? (isSelectedJob =
                        "cursor-pointer py-6 px-8 font-Poppins text-xl text-purple1 ease-in duration-150 font-semibold border-l-[5px] border-b-[5px] border-purple1 hover:font-semibold hover:text-purple1")
                    : (isSelectedJob =
                        "cursor-pointer py-6 px-8 font-Poppins text-xl ease-in duration-150 hover:font-semibold hover:text-purple1"))}
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
            <div className="mb-6 flex flex-col flex-wrap items-baseline justify-between sm:flex-row">
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

            <div className="mt-6 flex w-full flex-wrap gap-2">
              {activeJob.tags.map((tag) => {
                return (
                  <p
                    key={tag}
                    className="cursor-pointer rounded-full bg-purple1 px-3 font-medium text-white duration-150 ease-in hover:bg-white hover:text-purple1"
                  >
                    {tag}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
