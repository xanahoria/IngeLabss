import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaTools } from "react-icons/fa";
import { GiTestTubes } from "react-icons/gi";
import { HiUserGroup } from "react-icons/hi2";
import { Link, animateScroll as scroll } from 'react-scroll';


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('Ensayos');

  const categoryContent = {
    'Ensayos': [
      {
        img: '/src/assets/ENSAYO DE TRACCION.jpg',
        title: 'Ensayo de Tracción',
        description: 'Descripción detallada sobre el ensayo de tracción.',
      },
      {
        img: '/src/assets/ENSAYO DE TRACCION.jpg',
        title: 'Ensayo de Compresión',
        description: 'Descripción detallada sobre el ensayo de compresión.',
      },
      {
        img: '/src/assets/ENSAYO DE TRACCION.jpg',
        title: 'Ensayo de Dureza',
        description: 'Descripción detallada sobre el ensayo de dureza.',
      },
      
    ],
    'Probetas': [
      {
        img: '/src/assets/PROBETAS.jpg',
        title: 'Probetas de Acero',
        description: 'Descripción sobre probetas de acero.',
      },
      {
        img: '/src/assets/PROBETAS.jpg',
        title: 'Probetas de Aluminio',
        description: 'Descripción sobre probetas de aluminio.',
      },
      {
        img: '/src/assets/ENSAYO DE TRACCION.jpg',
        title: 'Probetas de Plástico',
        description: 'Descripción sobre probetas de plástico.',
      },
      
    ],
    'Mantenimiento': [
      {
        img: '/src/assets/MANTENIMIENTO.jpg',
        title: 'Mantenimiento Preventivo',
        description: 'Descripción sobre mantenimiento preventivo.',
      },
      {
        img: '/src/assets/ENSAYO DE TRACCION.jpg',
        title: 'Mantenimiento Correctivo',
        description: 'Descripción sobre mantenimiento correctivo.',
      },
      {
        img: '/src/assets/MANTENIMIENTO.jpg',
        title: 'Mantenimiento Predictivo',
        description: 'Descripción sobre mantenimiento predictivo.',
      },
    

    ],
    'Asesoria': [
      {
        img: '/src/assets/ASESORIAS.jpg',
        title: 'Asesoría Técnica',
        description: 'Descripción sobre asesoría técnica.',
      },
      {
        img: '/src/assets/ASESORIAS.jpg',
        title: 'Asesoría en Diseño',
        description: 'Descripción sobre asesoría en diseño.',
      },
      {
        img: '/src/assets/ASESORIAS.jpg',
        title: 'Asesoría en Normativas',
        description: 'Descripción sobre asesoría en normativas.',
      },
      
    ],
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

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
            <Link
          to="Servicios"
          smooth={true}
          duration={500}
          className="font-semibold py-3 text-center hover:font-bold cursor-pointer"
        >
          Servicios
        </Link>
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

      <section className="container mx-auto" id="Servicios">
        <div>
          <div className="flex pt-12 justify-center items-center" >
            <span>
              <div
                className="bg-[#4d36d7] rounded-full w-16 h-16 mx-20 place-content-center pl-3.5 cursor-pointer hover:bg-[#5ceb19]"
                onClick={() => handleCategoryClick('Ensayos')}
              >
                <IoDocumentTextSharp className="mr-2 w-10 h-10 text-black" />
              </div>
              <p className="text-white font-light text-sm pt-2 text-center cursor-pointer">
                Ensayos
              </p>
            </span>
            <span>
              <div
                className="bg-[#4d36d7] rounded-full w-16 h-16 mx-20 place-content-center pl-3.5 cursor-pointer hover:bg-[#5ceb19]"
                onClick={() => handleCategoryClick('Probetas')}
              >
                <GiTestTubes className="mr-2 w-10 h-10 text-black" />
              </div>
              <p className="text-white font-light text-sm pt-2 text-center cursor-pointer">
                Probetas
              </p>
            </span>
            <span>
              <div
                className="bg-[#4d36d7] rounded-full w-16 h-16 mx-20 place-content-center pl-3.5 cursor-pointer hover:bg-[#5ceb19]"
                onClick={() => handleCategoryClick('Mantenimiento')}
              >
                <FaTools className="mr-2 w-10 h-10 text-black" />
              </div>
              <p className="text-white font-light text-sm pt-2 text-center cursor-pointer">
                Mantenimiento
              </p>
            </span>
            <span>
              <div
                className="bg-[#4d36d7] rounded-full w-16 h-16 mx-20 place-content-center pl-3.5 cursor-pointer hover:bg-[#5ceb19]"
                onClick={() => handleCategoryClick('Asesoria')}
              >
                <HiUserGroup className="mr-2 w-10 h-10 text-black" />
              </div>
              <p className="text-white font-light text-sm pt-2 text-center cursor-pointer">
                Asesoría
              </p>
            </span>
          </div>
        </div>
        <div>
          
            <div className="flex justify-center gap-10 pt-12">
              {categoryContent[selectedCategory].map((item, index) => (
                <div
                  key={index}
                  className="bg-white max-w-64 rounded-[50px] overflow-hidden p-8"
                >
                  <div className="overflow-hidden rounded-[20px]">
                    <img className="h-44 w-full object-cover" src={item.img} alt={item.title} />
                  </div>
                  <h1 className="text-center font-medium p-3 ">{item.title}</h1>
                  <p className="text-center text-sm text-gray-600">{item.description}</p>
                  <div className="flex justify-center pt-4">
                    <NavLink to="/" className="font-medium text-gray-950 hover:text-[#4cfb0e] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 w-24 bg-[#39f809] hover:bg-[#0921f8] rounded-full p-2 text-center font-medium">
                      Más
                    </NavLink>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </section>
      <br />
      <section className="container mx-auto pt-12">
        <h1 className="text-center text-2xl text-shadow font-semibold text-[#00ff66]">Sectores especializados</h1>
        <div className="flex flex-wrap pt-12 justify-center items-center">
          <div className="rounded-[50px] overflow-hidden relative w-[450px] h-[300px] m-5">
            <img className="opacity-25 h-full" src="/src/assets/SectorMinero.jpg" alt="Sector especializado" />
            <h1 className="absolute text-white top-[43%] left-[40%] text-2xl font-medium">Minería</h1>
          </div>
          <div className="rounded-[50px] overflow-hidden relative w-[450px] h-[300px] m-5">
            <img className="opacity-25 h-full" src="/src/assets/SectorCivil.jpg" alt="Sector especializado" />
            <h1 className="absolute text-white top-[43%] left-[45%] text-2xl font-medium">Civil</h1>
          </div>
          <div className="rounded-[50px] overflow-hidden relative w-[450px] h-[300px] m-5">
            <img className="opacity-25 h-full" src="/src/assets/SectorMecanica.jpg" alt="Sector especializado" />
            <h1 className="absolute text-white top-[43%] left-[40%] text-2xl font-medium">Mecánica</h1>
          </div>
          <div className="rounded-[50px] overflow-hidden relative w-[450px] h-[300px] m-5">
            <img className="opacity-25 h-full" src="/src/assets/Sectordental.jpg" alt="Sector especializado" />
            <h1 className="absolute text-white top-[43%] left-[40%] text-2xl font-medium">Dental</h1>
          </div>
          <div className="rounded-[50px] overflow-hidden relative w-[450px] h-[300px] m-5">
            <img className="opacity-25 w-full h-full" src="/src/assets/SectorHidraulico.jpg" alt="Sector especializado" />
            <h1 className="absolute text-white top-[43%] left-[40%] text-2xl font-medium">Hidráulica</h1>
          </div>
          <div className="rounded-[50px] overflow-hidden relative w-[450px] h-[300px] m-5">
            <img className="opacity-25 h-full" src="/src/assets/SectorElectrico.jpg" alt="Sector especializado" />
            <h1 className="absolute text-white top-[43%] left-[40%] text-2xl font-medium">Eléctrico</h1>
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
