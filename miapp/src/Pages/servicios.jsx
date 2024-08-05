import React, { useState } from 'react';

const Servicios = () => {
  const [selectedService, setSelectedService] = useState('Preparación de Probetas');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [anuncioInfo, setAnuncioInfo] = useState('');

  const servicesContent = {
    'Preparación de Probetas': [
      { 
        img: '/src/assets/ServiciosProbetas.png', 
        modalImg: '/src/assets/ServiciosProbetasPestaña1.png',
        description: 'Probetas para ensayo de tracción', 
        info: 'HerramientasLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod sint occaeca HerramientasLorem ipsum dolor sit amet, consectetur adipiscing elit.',
        preparationSteps: [
          'Paso 1: Preparar el material.',
          'Paso 2: Cortar las probetas.',
          'Paso 3: Medir y marcar.',
        ],
        preparationImg: '/src/assets/ServiciosProbetasPestaña2.png',
      },
      { 
        img: '/src/assets/ServiciosProbetas.png', 
        modalImg: '/src/assets/ProbetasCompresion.png',
        description: 'Probetas para ensayo de compresión', 
        info: 'Información detallada sobre el ensayo de compresión.',
        preparationSteps: [
          'Paso 1: Preparar el material.',
          'Paso 2: Cortar las probetas.',
          'Paso 3: Ajustar para el ensayo.',
        ],
        preparationImg: '/src/assets/Preparacion2.png',
      },
      { 
        img: '/src/assets/ServiciosProbetas.png', 
        modalImg: '/src/assets/ProbetasRayosX.png',
        description: 'Probetas para ensayo de análisis de rayos X', 
        info: 'Información detallada sobre el análisis de rayos X.',
        preparationSteps: [
          'Paso 1: Preparar el material.',
          'Paso 2: Realizar el pretratamiento.',
          'Paso 3: Exponer a rayos X.',
        ],
        preparationImg: '/src/assets/Preparacion3.png',
      },
      { 
        img: '/src/assets/ServiciosProbetas.png', 
        modalImg: '/src/assets/ProbetasCorte.png',
        description: 'Probetas para ensayo de corte', 
        info: 'Información detallada sobre el ensayo de corte.',
        preparationSteps: [
          'Paso 1: Preparar el material.',
          'Paso 2: Configurar la máquina.',
          'Paso 3: Realizar el corte.',
        ],
        preparationImg: '/src/assets/Preparacion4.png',
      },
      { 
        img: '/src/assets/ServiciosProbetas.png', 
        modalImg: '/src/assets/ProbetasFlexion.png',
        description: 'Probetas para ensayo de flexión', 
        info: 'Información detallada sobre el ensayo de flexión.',
        preparationSteps: [
          'Paso 1: Preparar el material.',
          'Paso 2: Ajustar la probeta.',
          'Paso 3: Realizar el ensayo.',
        ],
        preparationImg: '/src/assets/Preparacion5.png',
      },
    ],
    'Calibración': [
      { 
        img: '/src/assets/ruta-de-la-imagen-calibracion1.png', 
        modalImg: '/src/assets/ruta-de-la-imagen-calibracion1.png', 
        description: 'Descripción calibración 1', 
        info: 'Información detallada sobre la calibración 1.',
        preparationSteps: [
          'Paso 1: Ajustar el calibrador.',
          'Paso 2: Realizar la calibración.',
          'Paso 3: Verificar resultados.',
        ],
        preparationImg: '/src/assets/Calibracion1.png',
      },
      { 
        img: '/src/assets/ruta-de-la-imagen-calibracion2.png', 
        modalImg: '/src/assets/ruta-de-la-imagen-calibracion2.png', 
        description: 'Descripción calibración 2', 
        info: 'Información detallada sobre la calibración 2.',
        preparationSteps: [
          'Paso 1: Preparar el equipo.',
          'Paso 2: Realizar la calibración.',
          'Paso 3: Documentar los resultados.',
        ],
        preparationImg: '/src/assets/Calibracion2.png',
      },
      { 
        img: '/src/assets/ruta-de-la-imagen-calibracion3.png', 
        modalImg: '/src/assets/ruta-de-la-imagen-calibracion3.png', 
        description: 'Descripción calibración 3', 
        info: 'Información detallada sobre la calibración 3.',
        preparationSteps: [
          'Paso 1: Verificar equipo.',
          'Paso 2: Ajustar parámetros.',
          'Paso 3: Realizar prueba final.',
        ],
        preparationImg: '/src/assets/Calibracion3.png',
      },
    ],
    'Mantenimiento e Inspección': [
      { 
        img: '/src/assets/ruta-de-la-imagen-mantenimiento1.png', 
        modalImg: '/src/assets/ruta-de-la-imagen-mantenimiento1.png', 
        description: 'Descripción mantenimiento 1', 
        info: 'Información detallada sobre el mantenimiento 1.',
        preparationSteps: [
          'Paso 1: Inspeccionar equipos.',
          'Paso 2: Realizar ajustes.',
          'Paso 3: Verificar funcionamiento.',
        ],
        preparationImg: '/src/assets/Mantenimiento1.png',
      },
      { 
        img: '/src/assets/ruta-de-la-imagen-mantenimiento2.png', 
        modalImg: '/src/assets/ruta-de-la-imagen-mantenimiento2.png', 
        description: 'Descripción mantenimiento 2', 
        info: 'Información detallada sobre el mantenimiento 2.',
        preparationSteps: [
          'Paso 1: Revisar estado.',
          'Paso 2: Realizar reparaciones.',
          'Paso 3: Realizar prueba de funcionamiento.',
        ],
        preparationImg: '/src/assets/Mantenimiento2.png',
      },
    ],
    'Laboratorio de Ensayos': [
      { 
        img: '/src/assets/ruta-de-la-imagen-ensayos1.png', 
        modalImg: '/src/assets/ruta-de-la-imagen-ensayos1.png', 
        description: 'Descripción ensayos 1', 
        info: 'Información detallada sobre el ensayo 1.',
        preparationSteps: [
          'Paso 1: Preparar muestras.',
          'Paso 2: Configurar el equipo.',
          'Paso 3: Realizar el ensayo.',
        ],
        preparationImg: '/src/assets/Ensayos1.png',
      },
      { 
        img: '/src/assets/ruta-de-la-imagen-ensayos2.png', 
        modalImg: '/src/assets/ruta-de-la-imagen-ensayos2.png', 
        description: 'Descripción ensayos 2', 
        info: 'Información detallada sobre el ensayo 2.',
        preparationSteps: [
          'Paso 1: Revisar equipo.',
          'Paso 2: Preparar muestras.',
          'Paso 3: Ejecutar el ensayo.',
        ],
        preparationImg: '/src/assets/Ensayos2.png',
      },
    ],
  };
  

  const handleCardClick = (content) => {
    setModalContent(content);
    setAnuncioInfo(content.info);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
    setAnuncioInfo('');
  };

  return (
    <div>
      <div className="relative w-full h-[90vh] overflow-hidden">
        <img 
          src="/src/assets/Servicios.png" 
          alt="Servicios" 
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80"></div>
        <div className="absolute top-1/2 left-16 transform -translate-y-1/2">
          <div className="text-left text-white">
            <div className="text-4xl font-bold">Servicios</div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-lg mx-auto mt-8">
        <nav className="flex flex-wrap justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            onClick={() => setSelectedService('Preparación de Probetas')}
            className="flex items-center justify-center rounded-full bg-white text-cyan-600 w-full sm:w-48 h-12 hover:bg-gray-100"
          >
            <span className="text-xs sm:text-sm font-medium">Preparación de probetas</span>
          </button>
          <button
            onClick={() => setSelectedService('Calibración')}
            className="flex items-center justify-center rounded-full bg-white text-cyan-600 w-full sm:w-48 h-12 hover:bg-gray-100"
          >
            <span className="text-xs sm:text-sm font-medium">Calibración</span>
          </button>
          <button
            onClick={() => setSelectedService('Mantenimiento e Inspección')}
            className="flex items-center justify-center rounded-full bg-white text-cyan-600 w-full sm:w-48 h-12 hover:bg-gray-100"
          >
            <span className="text-xs sm:text-sm font-medium">Mantenimiento e Inspección</span>
          </button>
          <button
            onClick={() => setSelectedService('Laboratorio de Ensayos')}
            className="flex items-center justify-center rounded-full bg-white text-cyan-600 w-full sm:w-48 h-12 hover:bg-gray-100"
          >
            <span className="text-xs sm:text-sm font-medium">Laboratorio de Ensayos</span>
          </button>
        </nav>
      </div>

      <div className="max-w-screen-lg mx-auto mt-8 flex justify-center">
        <div className="w-full max-w-5xl h-6 bg-gradient-to-r from-cyan-300 via-white to-white rounded-full"></div>
      </div>

      <div className="max-w-screen-lg mx-auto mt-8">
        <div className="p-4 rounded-lg bg-[#1E211C]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicesContent[selectedService].map((service, index) => (
              <div 
                key={index}
                className="flex flex-col items-center justify-center rounded-lg shadow-lg p-4 cursor-pointer transition-transform transform hover:scale-105"
                style={{ backgroundColor: '#1E211C' }}
                onClick={() => handleCardClick(service)}
              >
                <img 
                  src={service.img} 
                  alt={service.description} 
                  className="w-full h-72 object-cover rounded-lg mb-4"
                />
                <p className="text-center text-white">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isModalOpen && modalContent && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-[#1E211C] p-8 rounded-lg max-w-4xl w-full relative z-60">
            <button
              className="absolute top-2 right-2 text-gray-600 text-2xl font-bold"
              onClick={closeModal}
              style={{ fontSize: '2rem' }}
            >
              &times;
            </button>
            <div className="text-2xl text-purple-600 font-bold mb-4">{modalContent.description}</div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="lg:col-span-1">
                <img 
                  src={modalContent.modalImg} 
                  alt={modalContent.description} 
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
              <div className="lg:col-span-1 text-white">
                <div className="text-lg font-bold mb-2">Uso</div>
                <p>{anuncioInfo}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
              <div className="lg:col-span-1 text-white">
                <div className="text-lg font-bold mb-2">Preparación</div>
                <ul className="list-disc list-inside text-white">
                  {modalContent.preparationSteps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-1 flex items-center justify-center">
                <img 
                  src={modalContent.preparationImg} 
                  alt="Preparación" 
                  className="w-2/3 h-auto object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="h-12" />

      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-4 right-4 bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-800 transition"
      >
        ↑
      </button>
    </div>
  );
};

export default Servicios;
