import React from 'react';
import { MdChevronRight } from 'react-icons/md';
import { Flip, Slide, Zoom } from 'react-reveal';
import btc from '../assets/images/btc.png'
import eth from '../assets/images/eth.png'
import lit from '../assets/images/lit.png'

const Card = ({ imgSrc, token, symbol, text, unique }) => {
  return (
    <div className={`py-8 md:py-12 px-3 md:px-5 rounded-xl shadow-lg ${unique ? 'bg-[#2B076E]' : 'bg-[#ffffff]'}`}>
      <div className="flex flex-col items-center justify-center">
          <img src={imgSrc} alt="/" />
          <div className="flex py-4 md:py-6">
              <h3 className={`text-2xl font-bold ${unique ? '' : 'text-[#0D0D2B]'}`}>{token}</h3>
              <p className="ml-1 text-gray-400">{symbol}</p>
          </div>
          <p className={`text-center py-2 ${unique ? '' : 'text-[#828282]'}`}>{text}</p>
          {unique ? (
            <button className="bg-[#3671E9] rounded-full px-5 py-3 mt-4 shadow-lg cursor-pointer hover:-translate-y-2 active:-translate-y-1 duration-300">
                <div className="flex items-center justify-between">
                  <p>Start mining</p>
                  <div className="bg-white p-2 ml-3 md:ml-5 rounded-full text-[#3671E9]">
                    <MdChevronRight />
                  </div>
                </div>
            </button>
          ) : (
            <button className="bg-[#ffffff] text-[#3671E9] rounded-full p-2 mt-4 shadow-sm cursor-pointer hover:-translate-y-2 active:-translate-y-1 duration-300 border border-gray-400 text-4xl">
              <MdChevronRight />
            </button>
          )}
      </div>
  </div>
  );
};

const Trade = () => {
  return (
    <section className="bg-[#fbfbfb] pt-[13rem] pb-16 md:pt-20">
      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-10 pt-16">
        <div className="flex items-center justify-center py-10 reveal">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#0D0D2B]">Trade securely and market the high growth cryptocurrencies</h2>
        </div>
        <div className="grid lg:grid-cols-3 justify-center items-center gap-16">
          <Zoom duration={2000} bottom left>
            <Card
              unique
              imgSrc={btc}
              token={'Bitcoin'}
              symbol={'BTC'}
              text={'Digital currency in which a record of transactions is maintained.'}
             />
          </Zoom>
          <Flip duration={2000} bottom>
            <Card
              imgSrc={eth}
              token={'Ethereum'}
              symbol={'ETH'}
              text={'Blockchain technology to create and run decentralized digital applications.'}
             />
          </Flip>
          <Slide duration={2000} right>
            <Card 
              imgSrc={lit}
              token={'Litecoin'}
              symbol={'LTC'}
              text={'Cryptocurrency that enables instant payments to anyone in the world.'}
            />
          </Slide>
        </div>
      </div>
    </section>
  );
};

export default Trade;