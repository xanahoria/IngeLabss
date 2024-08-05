import React from 'react';

const Nosotros = () => {
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
    <section className='bg-gradient-to-r from-[#302366] to-[#C724D5]/90 relative w-full h-full overflow-hidden'>
      <div className='flex justify-center p-24'>
        
          <img src='/src/assets/Mision.svg'></img>
        
        <div className='block content-center p-12 space-y-8'>
          <h1 className='text-center'>Mision</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et 
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    </section>
    </>
  );
}

export default Nosotros;
