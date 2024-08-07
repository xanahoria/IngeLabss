import React from 'react';
import { TbTargetArrow } from "react-icons/tb";
import { TbEyeSearch } from "react-icons/tb";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      className=" w-96 h-63 felx justify-center items-center bg-[#260E69] rounded-lg "

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
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Nosotros = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
    <section className="relative w-full h-[90vh] overflow-hidden bg-[url('/src/assets/NosotrosPortada.png')] bg-fixed ">
      <div className='absolute inset-0 flex flex-col items-center justify-center text-center px-44 py-8 space-y-12'>
      <h1 className=' text-[#cacfc7] text-2xl font-normal'>NOSOTROS</h1>
      <p className='text-white'>Ofrecemos capacitación sin costo en temas relacionado a metrología (mantenimiento, ajuste, verificación, calibración e interpretación de certificados de calibración)
Ofrecemos capacitación sin costo en temas relacionado a metrología (mantenimiento, ajuste, verificación, calibración e interpretación de certificados de calibración)
Ofrecemos capacitación sin costo en temas relacionado a metrología (mantenimiento, ajuste, verificación, calibración e interpretación de certificados de calibración)</p>
      </div>
    </section>
    <section className='bg-gradient-to-r from-indigo-500 relative w-full h-full overflow-hidden'>
      <div className='flex justify-center py-24 px-40'>
        
          <img src='/src/assets/Mision.svg'></img>
        
        <div className='block content-center p-12 space-y-8 '>
         <TbTargetArrow className="w-12 h-12 text-white ml-[313px] relative"/>
          <h1 className='text-center text-[#5dff25] text-2xl font-medium'>Mision</h1>
          <p className='text-[#6bff25] text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et 
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    </section>
    <section className='bg-gradient-to-r from-[#302366] to-[#C724D5]/90 relative w-full h-full overflow-hidden'>
      <div className='flex justify-center py-24 px-40'>
      <div className='block content-center p-12 space-y-8 '>
      <TbEyeSearch className="w-12 h-12 text-white ml-[313px] relative"/>
          <h1 className='text-center  text-[#5dff25] text-2xl font-medium'>Vision</h1>
          <p className=' text-[#5dff25] text-sm text-right '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et 
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <img src='/src/assets/Mision.svg'></img>
      </div>
    </section>
    <section className="bg-[url('/src/assets/LineaTemporal.png')] relative w-full h-[80vh] overflow-hidden">
    <div>
    <Box  sx={{ width: "100%" }}
      className="w-full h-screen flex flex-col justify-center items-center content-center ">
      <Box>
        <Tabs value={value} onChange={handleChange}
        centered 
        TabIndicatorProps={{ style: { backgroundColor: '#00FA12' } }}
        sx={{
          "& .MuiTab-root": {
            color: "white", // Color del texto no seleccionado
            fontSize: "17px", // Tamaño de fuente
            fontWeight: "bold", // Peso de fuente
            marginLeft:"35px",
            "&.Mui-selected": {
              color: "#00FA12" // Color del texto seleccionado
            },
            
          }
        }}>
          <Tab  label="2020" {...a11yProps(0)}/>
          <Tab label="2021" {...a11yProps(1)} />
          <Tab label="2022" {...a11yProps(2)} />
          <Tab label="2023" {...a11yProps(3)} />
          <Tab label="2024" {...a11yProps(4)} />
        </Tabs>
      </Box>
    
      <Box className="w-full flex justify-center items-center py-24">
      <CustomTabPanel value={value} index={0}>
        <div className='flex  justify-center content-center '>
        <p className='text-white text-sm '>
        en el 2023 gano un premio al mejor ingeniero ccdoj</p>
        <img src='/src/assets/INGENIERO.png'className=' h-40'></img>
        </div> 
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <div className='flex  justify-center content-center '>
        <p className='text-white text-sm '>
        en el 2023 gano un premio al mejor ingeniero ccdoj</p>
        <img src='/src/assets/INGENIERO.png'className=' h-40'></img>
        </div> 
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2} >
      <div className='flex  justify-center content-center '>
        <p className='text-white text-sm '>
        en el 2023 gano un premio al mejor ingeniero ccdoj</p>
        <img src='/src/assets/INGENIERO.png'className=' h-40'></img>
        </div> 
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3} >
      <div className='flex  justify-center content-center '>
        <p className='text-white text-sm '>
        en el 2023 gano un premio al mejor ingeniero ccdoj</p>
        <img src='/src/assets/INGENIERO.png'className=' h-40'></img>
        </div> 
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4} >
      <div className='flex  justify-center content-center '>
        <p className='text-white text-sm '>
        en el 2023 gano un premio al mejor ingeniero ccdoj</p>
        <img src='/src/assets/INGENIERO.png'className=' h-40'></img>
        </div> 
      </CustomTabPanel>
      </Box>
    </Box>
    </div>
    </section>
    </>
  );
}

export default Nosotros;
