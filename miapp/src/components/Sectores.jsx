import { NavLink } from "react-router-dom";

const Sectores = () => {
    return (
        <section className="container mx-auto pt-32">
        <h1 className="text-center text-2xl font-semibold text-white">Sectores especializados</h1>
        <div className="flex flex-wrap pt-12 justify-center items-center">
          <div className="rounded-[50px] overflow-hidden relative w-[440px] h-[300px] m-5">
            <img className="opacity-25 h-full" src="/src/assets/SectorMinero.jpg" alt="Sector especializado" />
            <NavLink to="/sectore"><h1 className="absolute text-white top-[43%] left-[40%] text-xl font-medium hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:font-bold">Minería</h1></NavLink>
          </div>
          <div className="rounded-[50px] overflow-hidden relative w-[440px] h-[300px] m-5">
            <img className="opacity-25 h-full" src="/src/assets/SectorCivil.jpg" alt="Sector especializado" />
            <NavLink to="/sectore"><h1 className="absolute text-white top-[43%] left-[45%] text-xl font-medium hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:font-bold">Civil</h1></NavLink>
          </div>
          <div className="rounded-[50px] overflow-hidden relative w-[440px] h-[300px] m-5">
            <img className="opacity-25 h-full" src="/src/assets/SectorMecanica.jpg" alt="Sector especializado" />
            <NavLink to="/sectore"><h1 className="absolute text-white top-[43%] left-[40%] text-xl font-medium hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:font-bold">Mecánica</h1></NavLink>
          </div>
          <div className="rounded-[50px] overflow-hidden relative w-[440px] h-[300px] m-5">
            <img className="opacity-25 h-full " src="/src/assets/Sectordental.jpg" alt="Sector especializado" />
            <NavLink to="/sectore"><h1 className="absolute text-white top-[43%] left-[40%] text-xl font-medium hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:font-bold">Dental</h1></NavLink>
          </div>
          <div className="rounded-[50px] overflow-hidden relative w-[440px] h-[300px] m-5">
            <img className="opacity-25 w-full h-full" src="/src/assets/SectorHidraulico.jpg" alt="Sector especializado" />
            <NavLink to="/sectore"> <h1 className="absolute text-white top-[43%] left-[40%] text-xl font-medium hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:font-bold">Hidráulica</h1></NavLink>
          </div>
          <div className="rounded-[50px] overflow-hidden relative w-[440px] h-[300px] m-5">
            <img className="opacity-25 h-full" src="/src/assets/SectorElectrico.jpg" alt="Sector especializado" />
            <NavLink to="/sectore"><h1 className="absolute text-white top-[43%] left-[40%] text-xl font-medium hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:text">Eléctrico</h1></NavLink>
          </div>
        </div>
      </section>
    )
  }
  
  export default Sectores;