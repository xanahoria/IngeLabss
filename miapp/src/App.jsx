import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primeicons/primeicons.css';
import NavBar from "./components/navbar";
import Home from "./Pages/home";
import Servicios from "./Pages/servicios";
import Sectores from "./Pages/sectore";
import Nosotros from "./Pages/nosotros";
import Contacto from "./Pages/contacto";
import Footer from "./components/footer";


function App() {
  return (
    
   <>
      <NavBar></NavBar>
      

      
        <Routes>
          <Route path='/' element={<Home></Home>} ></Route>
          <Route path='/servicios' element={<Servicios></Servicios>} d ></Route>
          <Route path='/sectore' element={<Sectores></Sectores>} ></Route>
          <Route path='/nosotros' element={<Nosotros></Nosotros>} ></Route>
          <Route path='/contacto' element={<Contacto></Contacto>} ></Route>

          <Route path='*' element={<Navigate to="/" ></Navigate>} ></Route>
        </Routes>


        
        
      <Footer></Footer>
   </>   
    
  );
}

export default App;
