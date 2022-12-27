import React from "react";

const Section = () => {
  const timelapse = [
    {
      title: "First Certificate in English",
      place: "Cambridge University",
      date: "11/2019",
      desc: "Certificação de Fluência em Inglês",
    },
    {
      title: "Técnico em Informática",
      place: "Colégio Cotemig",
      date: "02/2020 - 12/2021",
      desc: "Ensino técnico em informática pelo colégio Cotemig",
    },
    {
      title: "1° Estágio em desenvolvimento",
      place: "4mti",
      date: "02/2022 - 06/2022",
      desc: "JavaScript, PHP, MySql, Python...",
    },
    {
      title: "2° Estágio em desenvolvimento",
      place: "Levty",
      date: "07/2022 - Hoje",
      desc: "POO, Api, JavaScript, NoSql...",
    },
    {
      title: "Graduação - Sistemas de Informação",
      place: "PUC Minas",
      date: "07/2022 - 07/2026",
      desc: "Criação e gerenciamento de Software",
    },
  ];
  return (
    <section className="mb-36 mt-36 w-full py-8">
      <div className="cont">
        <h1 className="mb-12 font-Poppins text-3xl font-semibold sm:text-5xl">
          Experiências
          <span className="text-purple1">.</span>
        </h1>
        <div className="flex w-full gap-10">
          <ul className="shrink-0 basis-72 rounded-sm shadow-xl">
            <li className="border-l-[5px] border-b-[5px] border-purple1 py-6 px-8">
              <a
                href=""
                className="font-Poppins text-xl font-semibold text-purple1"
              >
                Hotmart
              </a>
            </li>
            <li className="py-6 px-8">
              <a href="" className="font-Poppins text-xl">
                4mti
              </a>
            </li>
            <li className="py-6 px-8">
              <a href="" className="font-Poppins text-xl">
                Levty
              </a>
            </li>
            <li className="py-6 px-8">
              <a href="" className="font-Poppins text-xl">
                Teste
              </a>
            </li>
          </ul>

          <div className="">
            <div className="mb-6 flex items-baseline justify-between">
              <h3 className="font-Poppins text-2xl font-normal">
                Jovem Aprendiz
              </h3>
              <h5 className="text-base font-medium text-gray-600">
                Set 2020 - Ago 2021 (11 meses)
              </h5>
            </div>

            <h5 className="mb-6 font-Poppins text-xl font-medium text-purple1">
              Hotmart
            </h5>

            <p className="text-xl font-normal text-gray-600">
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
