import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaTools } from "react-icons/fa";
import { GiTestTubes } from "react-icons/gi";
import { HiUserGroup } from "react-icons/hi2";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Home = () => {
 
  return (
    <>
      <section className=" container none flex items-center w-[100%]">
        <div className="bg-[url('/src/assets/Home.png')] bg-cover bg-center w-full h-screen flex">
          <div className="pl-36">
            <h1 className="text-white text-left text-6xl font-bold pt-60">
              Mantentesiempre<br></br>conectado
            </h1>
            <br></br>
            <br></br>
            <br></br>
            <div className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 w-32 bg-gradient-to-r from-cyan-800 to-lime-200 rounded-full flex justify-center">
              <NavLink
                to="/servicios"
                className=" font-semibold py-3 text-center hover:font-bold"
              >
                Servicios
              </NavLink>
            </div>
          </div>
          <div className="flex w-full pt-12">
            <Swiper
              style={{
                "--swiper-pagination-color": "#fff",
              }}
              lazy={true}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className=" w-96 h-5/6 "
            >
              <SwiperSlide>
                <img
                  className="w-auto h-auto max-w-full max-h-full transform -translate-x-1/2 -translate-y-1/2 absolute left-2/4 top-2/4 z-10"
                  src="/src/assets/INGENIERO.png"
                  loading="lazy"
                />
                <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-auto h-auto max-w-full max-h-full transform -translate-x-1/2 -translate-y-1/2 absolute left-2/4 top-2/4"
                  src="/src/assets/INGENIERO.png"
                  loading="lazy"
                />
                <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-auto h-auto max-w-full max-h-full transform -translate-x-1/2 -translate-y-1/2 absolute left-2/4 top-2/4"
                  src="/src/assets/INGENIERO.png"
                  loading="lazy"
                />
                <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      <br></br>

      <section className="container mx-auto">
        <div>
          <div className="flex pt-12 justify-center items-center">
            <span classname="">
              <div className="bg-[#4d36d7] rounded-full w-16 h-16 mx-20 place-content-center pl-3.5 cursor-pointer hover:bg-[#5ceb19]">
                <IoDocumentTextSharp className=" mr-2 w-10 h-10 text-black " />
              </div>
              <p className="text-white font-light text-sm pt-2 text-center cursor-pointer">
                Ensayos
              </p>
            </span>
            <span classname="">
              <div className="bg-[#4d36d7] rounded-full w-16 h-16 mx-20 place-content-center pl-3.5 cursor-pointer hover:bg-[#5ceb19]">
                <GiTestTubes className=" mr-2 w-10 h-10 text-black " />
              </div>
              <p className="text-white font-light text-sm pt-2 text-center cursor-pointer">
                Probetas
              </p>
            </span>
            <span classname="">
              <div className="bg-[#4d36d7] rounded-full w-16 h-16 mx-20 place-content-center pl-3.5 cursor-pointer hover:bg-[#5ceb19]">
                <FaTools className=" mr-2 w-10 h-10 text-black " />
              </div>
              <p className="text-white font-light text-sm pt-2 text-center cursor-pointer">
                Mantenimiento
              </p>
            </span>
            <span classname="">
              <div className="bg-[#4d36d7] rounded-full w-16 h-16 mx-20 place-content-center pl-3.5 cursor-pointer hover:bg-[#5ceb19]">
                <HiUserGroup className=" mr-2 w-10 h-10 text-black " />
              </div>
              <p className="text-white font-light text-sm pt-2 text-center cursor-pointer">
                Asesoria
              </p>
            </span>
          </div>
        </div>
        <div className="">
          <div className="flex pt-12 justify-center items-center">
            <div className="bg-white max-w-64 rounded-[50px] overflow-hidden p-8 mr-10">
              <div className="overflow-hidden rounded-[20px] ">
                <img
                  className="h-44"
                  src="/src/assets/ENSAYO DE TRACCION.jpg"
                ></img>
              </div>
              <h1 className="text-center font-medium p-3 ">
                ENSAYO DE TRACCION
              </h1>
              <p className="text-center text-sm ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                lacinia odio vitae vestibulum vestibulum.
              </p>
              <br></br>
              <div className="pl-11">
                <div className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 w-24  bg-[#39f809] hover:bg-[#0921f8] rounded-[50px] p-1 text-center">
                  <NavLink
                    to="/"
                    className="font-medium hover:text-[#4cfb0e]  "
                  >
                    Más
                  </NavLink>
                </div>
              </div>
            </div>

            <div className="bg-white max-w-64 rounded-[50px] overflow-hidden p-8 mr-10">
              <div className="overflow-hidden rounded-[20px] ">
                <img
                  className="h-44"
                  src="/src/assets/ENSAYO DE TRACCION.jpg"
                ></img>
              </div>
              <h1 className="text-center font-medium p-3 ">
                ENSAYO DE TRACCION
              </h1>
              <p className="text-center text-sm ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                lacinia odio vitae vestibulum vestibulum.
              </p>
              <br></br>
              <div className="pl-11">
                <div className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 w-24  bg-[#39f809] hover:bg-[#0921f8] rounded-[50px] p-1 text-center">
                  <NavLink
                    to="/"
                    className="font-medium hover:text-[#4cfb0e]  "
                  >
                    Más
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="bg-white max-w-64 rounded-[50px] overflow-hidden p-8 mr-10">
              <div className="overflow-hidden rounded-[20px] ">
                <img
                  className="h-44"
                  src="/src/assets/ENSAYO DE TRACCION.jpg"
                ></img>
              </div>
              <h1 className="text-center font-medium p-3 ">
                ENSAYO DE TRACCION
              </h1>
              <p className="text-center text-sm ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                lacinia odio vitae vestibulum vestibulum.
              </p>
              <br></br>
              <div className="pl-11">
                <div className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 w-24  bg-[#39f809] hover:bg-[#0921f8] rounded-[50px] p-1 text-center">
                  <NavLink
                    to="/"
                    className="font-medium hover:text-[#4cfb0e]  ">
                    Más
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="bg-white max-w-64 rounded-[50px] overflow-hidden p-8 mr-10">
              <div className="overflow-hidden rounded-[20px] ">
                <img
                  className="h-44"
                  src="/src/assets/ENSAYO DE TRACCION.jpg"
                ></img>
              </div>
              <h1 className="text-center font-medium p-3 ">
                ENSAYO DE TRACCION
              </h1>
              <p className="text-center text-sm ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                lacinia odio vitae vestibulum vestibulum.
              </p>
              <br></br>
              <div className="pl-11">
                <div className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 w-24  bg-[#39f809] hover:bg-[#0921f8] rounded-[50px] p-1 text-center">
                  <NavLink
                    to="/"
                    className="font-medium hover:text-[#4cfb0e]  "
                  >
                    Más
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br></br>
      <section className="container mx-auto  pt-12">
      <h1 className="text-center text-2xl text-shadow font-semibold text-[#00ff66]">Sectores especializados</h1>
        <div className="flex flex-wrap pt-12 justify-center items-center">

          <div className="rounded-[50px] overflow-hidden relative w-[450px] h-[300px] m-5 ">
            <img className="opacity-25  h-full" src="/src/assets/SectorMinero.jpg" alt=""/>
            <h1 className="absolute text-white top-[43%] left-[40%] text-2xl font-medium"  >Mineria</h1>
          </div>
          <div className="rounded-[50px] overflow-hidden relative w-[450px] h-[300px] m-5 ">
            <img className="opacity-25 h-full" src="/src/assets/SectorCivil.jpg" alt=""/>
            <h1 className="absolute text-white top-[43%] left-[45%] text-2xl font-medium"  >Civil</h1>
          </div>
          <div className="rounded-[50px] overflow-hidden relative w-[450px] h-[300px] m-5">
            <img className="opacity-25 h-full" src="/src/assets/SectorMecanica.jpg" alt=""/>
            <h1 className="absolute text-white top-[43%] left-[40%] text-2xl font-medium"  >Mecanica</h1>
          </div>
          <div className="rounded-[50px] overflow-hidden relative w-[450px] h-[300px] m-5">
            <img className="opacity-25 h-full" src="/src/assets/Sectordental.jpg" alt=""/>
            <h1 className="absolute text-white top-[43%] left-[40%] text-2xl font-medium"  >Dental</h1>
          </div>
          <div className="rounded-[50px] overflow-hidden relative w-[450px] h-[300px] m-5">
            <img className="opacity-25 w-full h-full" src="/src/assets/SectorHidraulico.jpg" alt=""/>
            <h1 className="absolute text-white top-[43%] left-[40%] text-2xl font-medium"  >Hidraulica</h1>
          </div>
          <div className="rounded-[50px] overflow-hidden relative w-[450px] h-[300px] m-5">
            <img className="opacity-25 h-full" src="/src/assets/SectorElectrico.jpg" alt=""/>
            <h1 className="absolute text-white top-[43%] left-[40%] text-2xl font-medium"  >Electrico</h1>
          </div> 
          </div> 
      </section>
      <br></br>
      <section>

      </section>
    </>
  );
};

export default Home;
