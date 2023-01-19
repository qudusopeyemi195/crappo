import React from 'react'
import { Slide, Zoom } from 'react-reveal';
import Trade from './Trade';

const Calculate = () => {
  return (
    <section className="relative">
      <div className="w-full max-w-[1200px] mx-auto md:px-10 px-4 pt-6 md:pt-12 md:pb-40 pb-52">
        <div className="flex flex-col justify-center items-center">
          <Slide duration={2000}>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold">Check how much you can earn</h2>
          </Slide>
          <Zoom duration={2000}>
            <p className="text-md pt-4">Let's check your hash rate to see how much you will earn today</p>
            <p className="text-md">Exercitation veniam consequat sunt nostrud amet.</p>
          </Zoom>
        </div>
      </div>
      <Trade />
      <div className="w-full max-w-[1200px] mx-auto md:px-10 px-4">
        <div className="flex justify-center items-center ">
          <div className="bg-[#ffffff] w-[18rem] sm:w-[30rem] md:w-[40rem] lg:w-[50rem] text-[#0D0D2B] rounded-xl p-4 shadow-lg absolute top-[14rem] sm:top-[14rem] md:top-[12rem]">
            <form>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between py-4">
                <div className="py-4">
                  <input type="text" placeholder="Enter your hash rate" className="border-b border-b-gray-400 md:w-[20rem] w-full outline-0" />
                </div>
                <div className="py-4">
                  <select name="" className='md:w-[10rem] w-full border-b border-b-gray-400 outline-0 '>
                    <option value="">TH/s</option>
                    <option value="">H/s</option>
                    <option value="">KH/s</option>
                    <option value="">MH/s</option>
                    <option value="">GH/s</option>
                  </select>
                </div>
                <button className="bg-[#3671E9] rounded-full px-5 py-3 shadow-lg cursor-pointer mt-4 lg:mt-0">Calculate</button>
              </div>
            </form>
            <div className="flex flex-col py-2">
              <p className="uppercase text-[#3671E9] py-2">ESTIMATED 24 HOUR REVENUE:</p>
              <h3 className="text-2xl md:text-3xl font-bold text-[#0D0D2B] py-2">
                  0.055 130 59 ETH <span className="text-[#3671E9]">($1275)</span>
              </h3>
              <p className="text-[#828282] py-2 text-sm">Revenue will change based on mining difficulty and Ethereum price.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculate;