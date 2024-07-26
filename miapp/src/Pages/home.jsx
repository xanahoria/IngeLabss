import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";




// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination} from 'swiper/modules';

const Home = () => {
  return (

    <>
      <section className=" container max-width flex items-center ">
        <div className="bg-[url('/src/assets/Home.jpg')] bg-cover bg-center w-screen h-screen flex">
          <div>
          <h1 className="text-white text-left text-6xl font-bold pt-60 ">
            Mantentesiempre<br></br>conectado
          </h1>
          <br></br>
          <br></br>
          <br></br>
          <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 w-32 bg-gradient-to-r from-cyan-800 to-lime-200 rounded-full flex justify-center">
            <NavLink
              to="/servicios"
              className="font-semibold py-3 text-center hover:font-bold"
            >
              Servicios
            </NavLink>
          </div>
          </div>
          <div className="flex w-full">
          <Swiper
              style={{
                "--swiper-pagination-color": "#fff",
              }}
              lazy={true}
              pagination={{
                clickable: true,
              }}
              
              modules={[Pagination]}
              className=" w-96 h-5/6"     
            >
              <SwiperSlide >
                <img className="w-auto h-auto max-w-full max-h-full transform -translate-x-1/2 -translate-y-1/2 absolute left-2/4 top-2/4 z-10" src="../../INGENIERO-removebg-preview.png" loading="lazy" />
                <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
              </SwiperSlide>
              <SwiperSlide>
                <img className="w-auto h-auto max-w-full max-h-full transform -translate-x-1/2 -translate-y-1/2 absolute left-2/4 top-2/4" src="../../INGENIERO-removebg-preview.png" loading="lazy" />
                <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
              </SwiperSlide>
              <SwiperSlide>
                <img className="w-auto h-auto max-w-full max-h-full transform -translate-x-1/2 -translate-y-1/2 absolute left-2/4 top-2/4" src="../../INGENIERO-removebg-preview.png" loading="lazy" />
                <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      <section>
        <div></div>
      </section>
    </>
  );
};

export default Home;
