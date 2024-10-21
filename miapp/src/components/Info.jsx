import React from 'react'

const Info = () => {
  return (
    <section className="bg-gradient-to-b from-[#101728] via-[#182c43] to-[#101728] relative w-full h-full overflow-hidden pt-20">
        <div className="block p-12 space-y-24">
          <div className="flex justify-center">
            <div className="rounded-full overflow-hidden relative w-[280px] h-[280px]">
            <img src="/src/assets/Ingeniero3.jpeg" className="h-full w-full"></img>
            </div>
            <div className="block content-center p-12 space-y-8">
            <p className="text-left text-white text-lg font-medium">Certificate con la mejor empresa de servicios de ensayo para mas info<br></br> contactanos aqui</p>
            
            <div className="animate-bounce w-32 bg-gradient-to-r from-[#0097b2] to-[#c1ff72] rounded-full flex justify-center">
            <a
              href="https://wa.me/qr/ASVSS2N76ZQTL1"
              className="font-bold text-l py-3 text-center"
            >
              Info
            </a>
            </div>
            </div>
           
          </div>
          <div className="flex justify-center">
            <div className="block content-center p-12 space-y-8">
            <p className="text-left text-white text-lg font-medium">Ofrecemos asesoramiento en linea para mas informacion contactanos<br></br> por whatsapp</p>
            
            <div className="animate-bounce w-32 bg-gradient-to-r from-[#0097b2] to-[#c1ff72] rounded-full flex justify-center">
            <a
              href="https://wa.me/qr/ASVSS2N76ZQTL1"
              className="font-bold text-l py-3 text-center text-black"
            >
              Info
            </a>
            </div>
            </div>
            <div className="rounded-full overflow-hidden relative w-[280px] h-[280px]">
            <img src="/src/assets/Ingeniero2.jpeg" className="h-full w-full"></img>
            </div>
           
          </div>

        </div>


      </section>
  )
}

export default Info;