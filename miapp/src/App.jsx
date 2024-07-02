import { Router, Routes,Route } from "react-router-dom";
import Button from "./components/button";
import Layaut from "./components/layaut";
import NavBar from "./components/navbar";
import Servicios from "./Screens/servicios";
import Sectores from "./Screens/sectore";
import Contacto from "./Screens/contacto";
import Nosotros from "./Screens/nosotros";
import Home from "./Screens/home";


function App() {
  return (
    
   <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="Servicios" element={<Servicios/>}></Route>
        <Route path="Sectores" element={<Sectores/>}></Route>
        <Route path="Contacto" element={<Contacto/>}></Route>
        <Route path="Nosotros" element={<Nosotros/>}></Route>

      </Routes>
      <Layaut/>
   </>
      
    

     
     
    
  );
}

export default App;
