import React from 'react';

const Nosotros = () => {
  return (
    <div className="bg-gray-900 text-white">
      <div className="relative w-full">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <img
          src="/src/assets/Nosotros.png"
          alt="Sobre Nosotros"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 py-6">
          <h1 className="text-4xl font-extrabold mb-6 leading-tight">NOSOTROS</h1>
          <p className="max-w-lg mx-auto text-lg leading-relaxed">
            Ofrecemos capacitación sin costo en temas relacionados a metrología (mantenimiento, ajuste, verificación, calibración e interpretación de certificados de calibración).
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center p-8 bg-gradient-to-r from-purple-500 to-indigo-500 w-full">
        <div className="flex flex-col md:flex-row items-center w-full max-w-screen-lg">
          <img src="/src/assets/NosotrosFoco.png" alt="Misión" className="w-32 h-32 md:w-40 md:h-40 mr-4" />
          <div className="flex-1 text-center md:text-left">
            <img src="/src/assets/NosotrosMision.png" alt="Icono Misión" className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#5EFF25' }}>MISIÓN</h2>
            <p className="text-lg" style={{ color: '#5EFF25' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-center p-8 bg-gradient-to-r from-green-500 to-teal-500 w-full">
        <div className="flex flex-col md:flex-row-reverse items-center w-full max-w-screen-lg">
          <div className="flex-1 text-center md:text-left">
            <img src="/src/assets/NosotrosVision.png" alt="Icono Visión" className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-white mb-4">VISIÓN</h2>
            <p className="text-lg text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <img src="/src/assets/NosotrosFoco.png" alt="Visión" className="w-32 h-32 md:w-40 md:h-40 ml-4" />
        </div>
      </div>
    </div>
  );
}

export default Nosotros;
