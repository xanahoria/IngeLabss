import React from "react";
import { useState } from "react";
import { TbTargetArrow } from "react-icons/tb";
import { TbEyeSearch } from "react-icons/tb";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      className="  felx justify-center items-center bg-[#260E69] rounded-lg "
    >
      {value === index && <Box sx={{ p: 5 }}>{children}</Box>}
    </div>
  );
}
CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Nosotros = () => {
  const [value, setValue] = useState(0);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <section className="relative w-full  overflow-hidden bg-[url('/src/assets/nosotro.png')] bg-fixed">
        <div className="flex justify-center pt-32 px-40">
          <div className="py-12 pl-12">
            <div className="content-center p-8 space-y-8 bg-white rounded-lg">
              <h1 className="text-gray-600 font-medium text-4xl">
                Sobre Nosotros
              </h1>
              <p className="text-gray-400 text-sm">
                Ofrecemos capacitación sin costo en temas relacionado a
                metrología (mantenimiento, ajuste, verificación, calibración e
                interpretación de certificados de calibración) Ofrecemos
                capacitación sin costo en temas relacionado a metrología
                (mantenimiento, ajuste, verificación, calibración e
                interpretación de certificados de calibración) Ofrecemos
                capacitación sin costo en temas relacionado a metrología
                (mantenimiento, ajuste, verificación, calibración e
                interpretación de certificados de calibración)
              </p>
            </div>
          </div>
          <img
            className="w-[770px] h-[550px] "
            src="/src/assets/IngSeñalando-removebg.png"
          ></img>
        </div>
      </section>
      <section className="bg-gradient-to-tl from-indigo-500 relative w-full h-full overflow-hidden">
        <div class="text-gray-600 body-font">
          <div class="container px-5 py-44 mx-auto flex flex-wrap">
            <div class="flex flex-wrap -m-4">
              <div class="p-4 lg:w-1/2 md:w-full">
                <div class="flex rounded-lg bg-gray-100 bg-opacity-75 p-8 sm:flex-row flex-col">
                  <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-[#101728] flex-shrink-0">
                    <TbTargetArrow className="w-8 h-8 text-white" />
                  </div>
                  <div class="flex-grow">
                    <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                      Mision
                    </h2>
                    <p class="leading-relaxed text-base">
                      Blue bottle crucifix vinyl post-ironic four dollar toast
                      vegan taxidermy. Gastropub indxgo juice poutine.
                    </p>
                  </div>
                </div>
              </div>
              <div class="p-4 lg:w-1/2 md:w-full">
                <div class="flex rounded-lg bg-gray-100 bg-opacity-75 p-8 sm:flex-row flex-col">
                  <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-[#101728] flex-shrink-0">
                    <TbEyeSearch className="w-8 h-8 text-white" />
                  </div>
                  <div class="flex-grow">
                    <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                      Vision
                    </h2>
                    <p class="leading-relaxed text-base">
                      Blue bottle crucifix vinyl post-ironic four dollar toast
                      vegan taxidermy. Gastropub indxgo juice poutine.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[url('/src/assets/LineaTemporal.png')] relative w-full h-[80vh] overflow-hidden">
        <div>
          <Box
            sx={{ width: "100%" }}
            className="w-full h-screen flex flex-col justify-center items-center content-center "
          >
            <Box>
              <Tabs
                value={value}
                onChange={handleChange}
                centered
                TabIndicatorProps={{ style: { backgroundColor: "#00FA12" } }}
                sx={{
                  "& .MuiTab-root": {
                    color: "white", // Color del texto no seleccionado
                    fontSize: "17px", // Tamaño de fuente
                    fontWeight: "bold", // Peso de fuente
                    marginLeft: "35px",
                    "&.Mui-selected": {
                      color: "#00FA12", // Color del texto seleccionado
                    },
                  },
                }}
              >
                <Tab label="2020" {...a11yProps(0)} />
                <Tab label="2021" {...a11yProps(1)} />
                <Tab label="2022" {...a11yProps(2)} />
                <Tab label="2023" {...a11yProps(3)} />
                <Tab label="2024" {...a11yProps(4)} />
              </Tabs>
            </Box>

            <Box className="w-full flex justify-center items-center py-24">
              <CustomTabPanel value={value} index={0}>
                <div className="flex  justify-center content-center ">
                  <p className="text-white text-sm">
                    en el 2023 gano un premio al mejor ingeniero
                    <br></br>
                    en el 2023 gano un premio al mejor ingeniero
                    <br></br>
                    en el 2023 gano un premio al mejor ingeniero{" "}
                  </p>
                  <img src="/src/assets/INGENIERO.png" className=" h-48"></img>
                </div>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                <div className="flex  justify-center content-center ">
                  <p className="text-white text-sm ">
                    en el 2023 gano un premio al mejor ingeniero{" "}
                  </p>
                  <img src="/src/assets/INGENIERO.png" className=" h-40"></img>
                </div>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                <div className="flex  justify-center content-center ">
                  <p className="text-white text-sm ">
                    en el 2023 gano un premio al mejor ingeniero ccdoj
                  </p>
                  <img src="/src/assets/INGENIERO.png" className=" h-40"></img>
                </div>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={3}>
                <div className="flex  justify-center content-center ">
                  <p className="text-white text-sm ">
                    en el 2023 gano un premio al mejor ingeniero ccdoj
                  </p>
                  <img src="/src/assets/INGENIERO.png" className=" h-40"></img>
                </div>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={4}>
                <div className="flex  justify-center content-center ">
                  <p className="text-white text-sm ">
                    en el 2023 gano un premio al mejor ingeniero ccdoj
                  </p>
                  <img src="/src/assets/INGENIERO.png" className=" h-40"></img>
                </div>
              </CustomTabPanel>
            </Box>
          </Box>
        </div>
      </section>
      <section className="relative w-full h-[90vh] overflow-hidden bg-[#1E1E1E] justify-center content-center px-12">
        <h1 className="text-lg text-center font-semibold p-8 text-white	">
          Sigue de cerca a la mejor empresa de servicios de este rubro
        </h1>
        <div className="bg-[#101728] justify-center content-center flex ">
          <div className="block p-8 text-white">
            <h1 className="text-lg  ">Laboratorios de ensayo</h1>
            <p>Lorem ipsum, dolor sit amet consectetur </p>
          </div>
          <div className="flex justify-center py-10 ">
          <Swiper
              style={{
                "--swiper-pagination-color": "#fff",
                
              }}
              lazy={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Autoplay]}
              className=" w-96 h-5/6 mb-44 "
            >
              <SwiperSlide>
                <img
                  className="w-auto h-auto max-w-full max-h-full transform -translate-x-1/2 -translate-y-1/2 absolute left-2/4 top-2/4 z-10"
                  src="/src/assets/INGENIERO.png"
                  loading="lazy"
                ></img>
              </SwiperSlide>
              <SwiperSlide><img
                  className="w-auto h-auto max-w-full max-h-full transform -translate-x-1/2 -translate-y-1/2 absolute left-2/4 top-2/4 z-10"
                  src="/src/assets/INGENIERO.png"
                  loading="lazy"
                ></img></SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
              <SwiperSlide>Slide 5</SwiperSlide>
              <SwiperSlide>Slide 6</SwiperSlide>
              <SwiperSlide>Slide 7</SwiperSlide>
              <SwiperSlide>Slide 8</SwiperSlide>
              <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Nosotros;
