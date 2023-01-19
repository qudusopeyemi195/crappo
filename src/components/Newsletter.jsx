import React from 'react';
import vector from '../assets/images/Vector.png';
import vector1 from '../assets/images/Vector1.png';

const Newsletter = () => {
  return (
    <section className="bg-gradient-to-b from-[#2B076E] to-[#0D0D2B] py-6 md:py-16">
      <div className="w-full max-w-[1200px] px-4 md:px-10 mx-auto">
        <div className="flex items-center justify-center">
          <div className="bg-[#3671E9] px-4  py-6 md:py-8 md:w-[60rem] rounded-lg relative">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-16 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold py-2">Start mining now</h3>
                <p className="py-2 text-sm">Join now with CRAPPO to get the latest news and start mining now</p>
              </div>
              <div className="py-2 md:py-4">
                <input type="text" placeholder="Enter your harsh rate" className="border-b border-b-[#ffffff] md:w-[20rem] bg-transparent placeholder-[#ffffff] outline-0" />
              </div>
              <button className="bg-[#ffffff] text-[#0D0D2B] rounded-full px-5 py-3 shadow-lg cursor-pointer active:-translate-y-1 hover:-translate-y-2 duration-300 mt-2 md:mt-4 lg:mt-0 lg:ml-[5rem]">Subscribe</button>        
            </div>
            <div className="absolute top-0">
              <img src={vector} alt="/" />
            </div>
            <div className="absolute right-0 bottom-0">
              <img src={vector1} alt="/" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;