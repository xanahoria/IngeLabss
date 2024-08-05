import React from "react";
import logo from "../.././LOGO_OFICIAL-png.png";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

function Footer() {
  return (
    <div className="bg-gradient-to-r from-slate-600 via-slate-800 to-slate-600">
      <footer className="px-4 md:px-12 lg:px-16 py-6">
        <div className="flex flex-col md:flex-row justify-around items-center">
          {/* Logo and description */}
          <div className="flex-1 text-center md:text-left mb-4 md:mb-0">
            <img src={logo} className="h-20 mb-2" alt="logo" />
            <p className="text-white text-xs">
              Lorem ipsum dolor sit amet,<br /> consectetur adipiscing
            </p>
          </div>

          {/* Hours and contact */}
          <div className="flex-1 text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-lime-500 ">Horario de atención</h3>
            <div className="border-2 border-white w-32 mx-auto md:mx-0 mb-2"></div>
            <p className="text-neutral-400 text-sm">
              De Lunes a sábado<br />8:00 - 20:00 h
            </p>
            <a href="mailto:ingelabs@gmail.com" className="flex items-center justify-center md:justify-start text-lime-500 mt-2">
              <CgMail className="mr-2 w-6 h-6" />
              ingelabs@gmail.com
            </a>
          </div>

          {/* Social Media Links */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-lime-500 ">Síguenos</h3>
            <div className="border-2 border-white w-14 mx-auto md:mx-0 mb-2"></div>
            <div className="flex pt-2 justify-center md:justify-start space-x-2">
              <a href="https://instagram.com" className="bg-gray-900 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer">
                <FaInstagram className="w-6 h-6 text-white" />
              </a>
              <a href="https://facebook.com" className="bg-gray-900 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer">
                <FaFacebook className="w-6 h-6 text-white" />
              </a>
              <a href="https://linkedin.com" className="bg-gray-900 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer">
                <FaLinkedin className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center pt-2 text-xs md:text-sm text-gray-500">
          <p>All Rights Reserved © 2024 - Inge Lab</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
