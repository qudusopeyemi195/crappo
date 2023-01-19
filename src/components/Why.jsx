import React from 'react'
import { Fade, Rotate } from 'react-reveal'
import CountUp from './CountUp'
import crappo from "../assets/images/whycrappo.png";

const Why = () => {
  return (
    <section className="relative w-full max-w-[1200px] mx-auto md:px-10 px-4 lg:pt-32 pt-0 pb-4 md:16"> {/**bg-white/5  */}
      <CountUp />
      <div className="grid md:grid-cols-2 gap-8 justify-between items-center w-full pt-4 md:pt-16">
        <div className="relative">
          <Rotate duration={3000}>
            <img src={crappo} alt="/" />
          </Rotate>
          <div className="w-[30rem] h-[5.5rem] bg-gradient-to-r from-white/5 absolute top-[15rem] left-[-12rem] hidden lg:block -skew-y-[24deg] skew-x-[24deg]"></div>
        </div>
        <Fade duration={3000}>
          <div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold">Why you should choose CRAPPO</h2>
            <p className="pt-4 text-md md:w-96">Experience the next generation cryptocurrency platform. No financial borders, extra fees, and fake reviews.</p>
            <button className="bg-[#3671E9] rounded-full px-5 py-3 mt-5 shadow-lg cursor-pointer outline-0 hover:-translate-y-2 active:-translate-y-1 duration-300">Learn More</button>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Why;