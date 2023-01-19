import React from 'react'
import { MdChevronRight } from 'react-icons/md';
import { Roll } from 'react-reveal';
import hero from '../assets/images/Illustration.png';

const HeroContent = () => {
  return (
    <div>
      <div className="flex items-center space-x-2 md:space-x-4 w-[18rem] md:w-[22rem] bg-white/5 p-1 rounded-full"> {/**animate__animated animate__fadeInLeft animate__slow */}
        <button className="bg-white text-black py-1 px-2 rounded-full md:text-lg text-sm whitespace-nowrap">75% SAVE</button>
        <p className="whitespace-nowrap text-xs">For the Black Friday weekend</p>
      </div>
      <h1 className="text-3xl md:text-4xl lg:text-5xl py-5 font-bold lg:w-[30rem] animate__animated animate__fadeInLeft animate__delay-2s animate__slow">Fastest & secure platform to invest in crypto</h1>
      <p className="py-2 text-md animate__animated animate__fadeInLeft animate__delay-3s animate__slow">Buy and sell cryptocurrencies, trusted by 10M wallets <br/> with over $30 billion in transactions.</p>
      <button className="bg-[#3671E9] rounded-full outline-0 px-5 py-3 mt-6 shadow-lg active:-translate-y-1 cursor-pointer hover:-translate-y-2 duration-300 animate__animated animate__fadeInLeft animate__delay-4s animate__slow">
        <div className="flex justify-between items-center space-x-5">
          <p>Try for FREE</p>
          <div className="bg-white p-2 rounded-full text-[#3671E9]">
            <MdChevronRight />
          </div>
        </div>
      </button>
    </div>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="md:px-10 px-4 pt-16 md:pt-20 w-full max-w-[1200px] mx-auto ">
      <div className="relative hidden lg:flex">
        <div className="flex justify-between items-center w-full">
          <HeroContent />
          <Roll duration={4000}>
            <img src={hero} alt="/" />
          </Roll>
        </div>
        <div className="w-[60rem] h-[5.5rem] bg-gradient-to-l from-white/5 absolute top-[35rem] right-[18rem] hidden lg:block -skew-y-[24deg] skew-x-[24deg]"></div>
        <div className="w-[35rem] h-[5.5rem] bg-gradient-to-r from-white/5 absolute top-[34rem] right-[-6rem] hidden lg:block -skew-y-[24deg] skew-x-[24deg]"></div>
      </div>
      <div className="hero-section w-full mt-2 lg:hidden">
        <HeroContent />
      </div>
    </section>
  );
};

export default Hero;