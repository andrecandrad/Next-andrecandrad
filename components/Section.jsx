import React from "react";
import { useState } from "react";

const Section = () => {
  const [activeJob, setActiveJob] = useState("hotmart");

  const experiencias = [
    {
      name: "hotmart",
    },
    {
      name: "4mti",
    },
    {
      name: "levty",
    },
  ];

  function handleJob(job) {
    setActiveJob(job);
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
          <ul className="w-full shrink-0 basis-72 rounded-sm shadow-xl">
            {experiencias.map((experiencia) => {
              return (
                <li
                  key={experiencia.name}
                  {...(activeJob === experiencia.name
                    ? (isSelectedJob =
                        "cursor-pointer py-6 px-8 font-Poppins text-xl text-purple1 font-semibold border-l-[5px] border-b-[5px] border-purple1")
                    : (isSelectedJob =
                        "cursor-pointer py-6 px-8 font-Poppins text-xl"))}
                  className={isSelectedJob}
                  onClick={() => {
                    handleJob(experiencia.name);
                  }}
                >
                  {experiencia.name.charAt(0).toUpperCase() +
                    experiencia.name.slice(1)}
                </li>
              );
            })}
          </ul>

          <div>
            <div className="mb-6 flex flex-col items-baseline justify-between sm:flex-row">
              <h3 className="mb-6 font-Poppins text-2xl font-normal sm:mb-0">
                Jovem Aprendiz
              </h3>
              <h5 className="text-base font-medium text-gray-600">
                Set 2020 - Ago 2021 (11 meses)
              </h5>
            </div>

            <h5 className="mb-6 font-Poppins text-xl font-medium text-purple1">
              Hotmart
            </h5>

            <p className="text-lg font-normal text-gray-600 sm:text-xl">
              Ajudei o time nos pagamentos dos nossos produtores e afiliados,
              atendimento de dúvidas relacionadas a área e ajuda com
              comprovantes bancários.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
