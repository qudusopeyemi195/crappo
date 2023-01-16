import React from 'react'
import { Fade, Rotate } from 'react-reveal'
import CountUp from './CountUp'
import crappo from "../assets/images/whycrappo.png";

const Why = () => {
  return (
    <div className="relative w-full max-w-[1200px] m-auto md:px-10 px-4 lg:pt-32 py-16">
      <CountUp />
      <div className="flex justify-between items-center space-x-8 w-full pt-16">
        <div className="relative">
          <Rotate duration={3000}>
            <img src={crappo} alt="/" />
          </Rotate>
          <div className="w-[30rem] h-[5.5rem] bg-gradient-to-r from-white/5 absolute top-[15rem] left-[-12rem] hidden lg:block -skew-y-[24deg] skew-x-[24deg]"></div>
        </div>
        <Fade duration={3000}>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold">Why you should choose CRAPPO</h2>
            <p className="pt-4 text-md md:w-96">Experience the next generation cryptocurrency platform. No financial borders, extra fees, and fake reviews.</p>
            <button className="bg-[#3671E9] rounded-full px-5 py-3 mt-4 shadow-lg cursor-pointer outline-0 hover:-translate-y-2 active:-translate-y-1 duration-300">Learn More</button>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Why;