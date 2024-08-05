import { NavLink } from "react-router-dom";

const Sectores = () => {
    return (
        <section className="container mx-auto pt-32">
        <h1 className="text-center text-3xl text-shadow font-semibold text-[#00ff66]">Sectores especializados</h1>
        <div className="flex flex-wrap pt-12 justify-center items-center">
          <div className="rounded-[50px] overflow-hidden relative w-[450px] h-[300px] m-5">
            <img className="opacity-25 h-full" src="/src/assets/SectorMinero.jpg" alt="Sector especializado" />
            <NavLink to="/sectore"><h1 className="absolute text-white top-[43%] left-[40%] text-2xl font-medium">Minería</h1></NavLink>
          </div>
          <div className="rounded-[50px] overflow-hidden relative w-[450px] h-[300px] m-5">
            <img className="opacity-25 h-full" src="/src/assets/SectorCivil.jpg" alt="Sector especializado" />
            <NavLink to="/sectore"><h1 className="absolute text-white top-[43%] left-[45%] text-2xl font-medium">Civil</h1></NavLink>
          </div>
          <div className="rounded-[50px] overflow-hidden relative w-[450px] h-[300px] m-5">
            <img className="opacity-25 h-full" src="/src/assets/SectorMecanica.jpg" alt="Sector especializado" />
            <NavLink to="/sectore"><h1 className="absolute text-white top-[43%] left-[40%] text-2xl font-medium">Mecánica</h1></NavLink>
          </div>
          <div className="rounded-[50px] overflow-hidden relative w-[450px] h-[300px] m-5">
            <img className="opacity-25 h-full " src="/src/assets/Sectordental.jpg" alt="Sector especializado" />
            <NavLink to="/sectore"><h1 className="absolute text-white top-[43%] left-[40%] text-2xl font-medium">Dental</h1></NavLink>
          </div>
          <div className="rounded-[50px] overflow-hidden relative w-[450px] h-[300px] m-5">
            <img className="opacity-25 w-full h-full" src="/src/assets/SectorHidraulico.jpg" alt="Sector especializado" />
            <NavLink to="/sectore"> <h1 className="absolute text-white top-[43%] left-[40%] text-2xl font-medium">Hidráulica</h1></NavLink>
          </div>
          <div className="rounded-[50px] overflow-hidden relative w-[450px] h-[300px] m-5">
            <img className="opacity-25 h-full" src="/src/assets/SectorElectrico.jpg" alt="Sector especializado" />
            <NavLink to="/sectore"><h1 className="absolute text-white top-[43%] left-[40%] text-2xl font-medium">Eléctrico</h1></NavLink>
          </div>
        </div>
      </section>
    )
  }
  
  export default Sectores;