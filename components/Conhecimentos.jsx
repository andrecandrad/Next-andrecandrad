import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaReact,
  FaFigma,
  FaPhp,
  FaPython,
} from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss, SiJavascript } from "react-icons/si";

const Conhecimentos = () => {
  return (
    <div className="elipse mt-16 py-8 lg:mt-24">
      <div className="cont mb-10">
        <h1 className="font-Poppins text-3xl font-semibold sm:text-5xl">
          Conhecimentos
          <span className="text-purple1">.</span>
        </h1>
        <h4 className="text-md block font-normal text-gray-600 sm:text-xl lg:hidden">
          (Deslize para o lado para ver tudo)
        </h4>
      </div>
      <section className="cont mb-28 flex gap-10 overflow-auto py-8 px-5 lg:justify-between lg:gap-0">
        <div>
          <FaHtml5 className="mb-2 text-8xl text-red-400" />
          <h3 className="text-center font-Poppins font-medium">HTML</h3>
        </div>
        <div>
          <FaCss3Alt className="mb-2 text-8xl text-blue-400" />
          <h3 className="text-center font-Poppins font-medium">CSS</h3>
        </div>

        <div>
          <SiJavascript className="mb-2 text-8xl text-yellow-400" />
          <h3 className="text-center font-Poppins font-medium">Javascript</h3>
        </div>

        <div>
          <FaReact className="mb-2 text-8xl text-cyan-400" />
          <h3 className="text-center font-Poppins font-medium">React.js</h3>
        </div>
        <div>
          <TbBrandNextjs className="mb-2 text-8xl" />
          <h3 className="text-center font-Poppins font-medium">Next.js</h3>
        </div>

        <div>
          <FaSass className="mb-2 text-8xl text-pink-400" />
          <h3 className="text-center font-Poppins font-medium">Sass</h3>
        </div>
        <div>
          <SiTailwindcss className="mb-2 text-8xl text-cyan-500" />
          <h3 className="text-center font-Poppins font-medium">Tailwind</h3>
        </div>
        <div>
          <FaFigma className="mb-2 text-8xl text-purple-400" />
          <h3 className="text-center font-Poppins font-medium">Figma</h3>
        </div>
        <div>
          <FaPhp className="mb-2 text-8xl text-blue-800" />
          <h3 className="text-center font-Poppins font-medium">PHP</h3>
        </div>
        <div>
          <FaPython className="mb-2 text-8xl text-orange-300" />
          <h3 className="text-center font-Poppins font-medium">Python</h3>
        </div>
      </section>
    </div>
  );
};

export default Conhecimentos;
