import React from "react";
import logo from "../.././LOGO_OFICIAL-png.png";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

function Footer() {
  return (
    <div className="bg-gradient-to-r from-slate-600 via-slate-800 to-slate-600 ">
      <footer className="px-10 bottom-0 w-full">
        <div className="flex justify-around items-center pt-2.5 ">
          <div className="flex-1 text-center">
            <img src={logo} className="h-20 mb-1.5" alt="logo" />
            <p className="text-white text-left text-[10px]">
              Lorem ipsum dolor sit amet,<br></br> consecteturadipiscing
            </p>
          </div>
          <div className="flex-1 pt-5">
            <h3 className="text-lime-500">Horario de atención</h3>
            <div className="absolute border-2 w-32 border-white"></div>
            <p className="pt-2.5 text-neutral-400 text-[15px]">
              De Lunes a sábado
              <br />
              8:00 - 20:00 h
            </p>
            <a href="mailto:ingelabs@gmail.com" className="flex text-lime-500 ">
              <CgMail className=" mr-2 w-6 h-6" />
              ingelabs@gmail.com
            </a>
          </div>
          <div className="flex-1 pt-5">
            <h3 className="text-lime-500">Síguenos</h3>
            <div className="absolute border-2 w-14 border-white"></div>
            
            <div className="flex pt-2">
              <div className="bg-gray-900 rounded-full w-10 h-10 mr-2 place-content-center	justify-center pl-2 cursor-pointer">
              <FaInstagram className=" mr-2 w-6 h-6 text-white " />
              </div>
              <div className="bg-gray-900 rounded-full w-10 h-10 mr-2 place-content-center	justify-center pl-2 cursor-pointer">
              <FaFacebook  className=" mr-2 w-6 h-6 text-white " />
              </div>
              <div className="bg-gray-900 rounded-full w-10 h-10 mr-2 place-content-center	justify-center pl-2 cursor-pointer ">
              <FaLinkedin className=" mr-2 w-6 h-6 text-white " />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center pt-3 text-[12px] text-gray-500">
          <p>All Rights Reserved © 2024 - Inge Lab</p>
        </div>
        <div className="w-[194px] h-[0px] border-4 border-transparent"></div>
      </footer>
    </div>
  );
}

export default Footer;
