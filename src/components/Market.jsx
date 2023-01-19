import React, {useEffect } from 'react';
import { Fade, Rotate, Slide, Zoom } from 'react-reveal';
import chart from '../assets/images/Chart.png';
import statistic from '../assets/images/Statistic.png';
import table from '../assets/images/Table.png';

const Market = () => {
  function reveal() {
    let reveals = document.querySelectorAll('.reveal')


    for (let i = 0; i < reveals.length; i++) {
        let windowheight = window.innerHeight;
        let revealtop = reveals[i].getBoundingClientRect().top;
        let revealpoint = 150;
        
        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
  }
  useEffect (() => {
    window.addEventListener('scroll', reveal);
  }, [])

  return (
    <section className="bg-[#2B076E] py-6 md:py-16 relative">
      <div className="w-full max-w-[1200px] px-4 md:px-10 mx-auto">
        <div className="flex items-center justify-center py-10">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold">Market sentiments, portfolio, and run the infrastructure of your choice</h2>
        </div>
        <div className="flex md:flex-row flex-col justify-between md:items-center md:space-x-8 space-x-0 md:space-y-0 space-y-8 py-4 reveal">
          <Slide duration={2000} top left>
            <div>
              <h3 className="text-xl md:text-3xl font-bold pb-2">Invest Smart</h3>
              <p className="py-2 text-[#E0E0E0] md:w-[28rem]">Get full statistic information about the behaviour of buyers and sellers will help you to make the decision.</p>
              <button className="bg-[#3671E9] rounded-full px-5 py-3 mt-4 shadow-lg cursor-pointer active:-translate-y-1 hover:-translate-y-2 duration-300">Learn More</button>
            </div>
          </Slide>
          <Zoom duration={2000} botom>
            <img src={chart} alt="/" className='lg:pt-[3rem]' />
          </Zoom>
        </div>

        <div className='flex md:flex-row flex-col-reverse justify-between md:items-center md:space-x-8 space-x-0 py-8 lg:py-4 reveal'>
          <Fade duration={2000} top>
              <div>
                  <img src={statistic} alt="/" className='lg:pt-[3rem]' />
              </div>
          </Fade>
          <div className="pb-8 md:pb-0">
            <h3 className="text-xl md:text-3xl font-bold pb-2">Detailed Statistics</h3>
            <p className="py-2 text-[#E0E0E0] md:w-[28rem]">View all mining related information in realtime, at any point at any location and decide which polls you want to mine in.</p>
            <button className="bg-[#3671E9] rounded-full px-5 py-3 mt-4 shadow-lg cursor-pointer active:-translate-y-1 hover:-translate-y-2 duration-300">Learn More</button>
          </div>
        </div>

        <div className="flex md:flex-row flex-col justify-between md:items-center md:space-x-8 space-x-0 md:space-y-0 space-y-8 py-8 lg:py-4 reveal">
          <div>
              <h3 className="text-xl md:text-3xl font-bold pb-2 md:w-[28rem]">Grow your profit and track your investments</h3>
              <p className="py-2 text-[#E0E0E0] md:w-[28rem]">Use advanced analytical tools. Clear TradingView charts let you track current and historical profit investments.</p>
              <button className="bg-[#3671E9] rounded-full px-5 py-3 mt-4 shadow-lg cursor-pointer active:-translate-y-1 hover:-translate-y-2 duration-300">Learn More</button>
          </div>
          <Rotate duration={2000}>
              <div> 
                <img src={table} alt="/" className="lg:pt-[3rem]" />
              </div>
          </Rotate>
        </div>
      </div>
      <div className="rounded-tl-full rounded-bl-full w-[222px] h-[322px] bg-white/5 absolute right-0 bottom-0 hidden lg:block"></div>
      <div className="rounded-br-full rounded-bl-full w-[422px] h-[222px] bg-white/5 absolute top-0 left-[8rem] hidden lg:block"></div>
    </section>
  );
};

export default Market;