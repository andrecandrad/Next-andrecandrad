import React from "react";
import { FaLinkedin, FaDiscord, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <section className="cont flex justify-center">
        <div className="h-1 w-36 bg-purple1"></div>
      </section>
      <section className="relative mt-48 h-[500px] w-full">
        <div className="teste hidden shadow-2xl shadow-black lg:block"></div>
        <div className="cont relative flex flex-col items-center py-8 lg:items-end">
          <h2 className="text-center font-Poppins text-3xl font-semibold sm:text-5xl">
            Quer entrar em contato?
          </h2>
          <h3 className="mb-12 text-center text-2xl font-semibold text-purple1 sm:text-3xl">
            Me procure nas redes sociais
          </h3>
          <div className="mb-12 flex items-center gap-12">
            <div className="flex flex-col border-r-2 border-gray-400 pr-[80px] lg:pr-[90px]">
              <h4 className="font-Poppins text-xl font-medium text-black/70 lg:text-2xl">
                Linkedin
              </h4>
              <p className="text-md text-gray-400 lg:text-lg">@andrecandrad</p>
            </div>
            <FaLinkedin className="text-6xl text-gray-400 sm:text-7xl" />
          </div>

          <div className="mb-12 flex items-center gap-12">
            <div className="flex flex-col border-r-2 border-gray-400 pr-12">
              <h4 className="font-Poppins text-xl font-medium text-black/70 sm:text-2xl">
                Discord
              </h4>
              <p className="text-md text-gray-400 sm:text-lg">
                andrecandrad#9079
              </p>
            </div>
            <FaDiscord className="text-6xl text-gray-400 sm:text-7xl" />
          </div>

          <div className="mb-12 flex items-center gap-12">
            <div className="flex flex-col border-r-2 border-gray-400 pr-[72px]">
              <h4 className="font-Poppins text-xl font-medium text-black/70 sm:text-2xl">
                Whatsapp
              </h4>
              <p className="text-md text-gray-400 sm:text-lg">
                (31)9 9582-4620
              </p>
            </div>
            <FaWhatsapp className="text-6xl text-gray-400 sm:text-7xl" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
