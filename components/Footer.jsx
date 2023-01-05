import React from "react";
import { FaHeart } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <section className="mt-28 w-full border-b-4 border-purple1">
      <footer className="cont flex flex-col items-center justify-between gap-4 font-Poppins text-xs sm:flex-row sm:gap-0 sm:text-base">
        <h5 className="flex flex-col sm:flex-row items-center gap-2">
          Projetado e desenvolvido com <FaHeart className="text-red-400" /> por
          André Andrade
        </h5>
        <h5 className="flex items-center gap-2">
          <FiMail /> andrecandrad@gmail.com
        </h5>
      </footer>
    </section>
  );
};

export default Footer;
