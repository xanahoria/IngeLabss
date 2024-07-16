import React from 'react';
import { Link } from 'react-router-dom';

const Servicios = () => {
  const buttons = [
    { img: 'ruta-de-la-imagen1', description: 'Descripción 1', link: '/ruta-deseada1' },
    { img: 'ruta-de-la-imagen2', description: 'Descripción 2', link: '/ruta-deseada2' },
    { img: 'ruta-de-la-imagen3', description: 'Descripción 3', link: '/ruta-deseada3' },
    { img: 'ruta-de-la-imagen4', description: 'Descripción 4', link: '/ruta-deseada4' },
    { img: 'ruta-de-la-imagen5', description: 'Descripción 5', link: '/ruta-deseada5' },
    { img: 'ruta-de-la-imagen6', description: 'Descripción 6', link: '/ruta-deseada6' },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div>
      <section className="Servicios bg-cover bg-center w-full min-h-screen flex items-center" style={{ backgroundImage: "url(../img/serv_ingelabs.png)" }}>
        <div className="Servicios-item mt-24 text-center text-white w-full">
          <div className="text-4xl font-bold">Servicios</div>
        </div>
      </section>

      <div className="max-w-screen-lg mx-auto mt-8">
        <nav className="flex flex-wrap justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link to="./nosotros.jsx" className="flex items-center justify-center rounded-full bg-blue-200 w-full sm:w-48 h-12 hover:text-blue-600">
            <span className="text-xs sm:text-sm font-medium text-blue-600">Preparación de probetas</span>
          </Link>
          <Link to="/otra-pagina" className="flex items-center justify-center rounded-full bg-blue-200 w-full sm:w-48 h-12 hover:text-blue-600">
            <span className="text-xs sm:text-sm font-medium text-blue-600">Calibración</span>
          </Link>
          <Link to="/contacto" className="flex items-center justify-center rounded-full bg-blue-200 w-full sm:w-48 h-12 hover:text-blue-600">
            <span className="text-xs sm:text-sm font-medium text-blue-600">Mantenimiento e Inspección</span>
          </Link>
          <Link to="/mas-info" className="flex items-center justify-center rounded-full bg-blue-200 w-full sm:w-48 h-12 hover:text-blue-600">
            <span className="text-xs sm:text-sm font-medium text-blue-600">Laboratorio de Ensayos</span>
          </Link>
        </nav>
      </div>

      <div className="max-w-screen-lg mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {buttons.map((button, index) => (
          <div 
            key={index}
            className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-4 cursor-pointer transition transform hover:scale-105"
            onClick={() => window.location.href = button.link}
          >
            <img src={button.img} alt={button.description} className="w-32 h-32 object-cover rounded-full" />
            <p className="mt-4 text-center text-gray-800">{button.description}</p>
          </div>
        ))}
      </div>


      <button 
        onClick={scrollToTop} 
        className="fixed bottom-4 right-4 bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-800 transition"
      >
        ↑
      </button>
    </div>
  );
};

export default Servicios;
