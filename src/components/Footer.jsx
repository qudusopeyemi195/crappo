import React from 'react';
import { Link } from 'react-scroll';
import Logo from '../assets/images/logo.png';
import visa from '../assets/images/Visa.png'
import mastercard from '../assets/images/Mastercard.png';
import bitcoin from '../assets/images/Bitcoin.png';
import facebook from '../assets/images/facebook.png';
import instagram from '../assets/images/instagram.png';
import youtube from '../assets/images/youtube.png';
import twitter from '../assets/images/twitter.png';
import linkedIn from '../assets/images/linkedin.png';


const Footer = () => {
  return (
    <footer className="max-w-[1200px] px-4 md:px-10 mx-auto pt-6 md:pt-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 lg:gap-8 gap-6">
        <Link to="hero" smooth={true} offset={2} duration={500}>
          <div className="flex items-center md:space-x-4 space-x-2">
            <img src={Logo} alt="/" width={40} className="cursor-pointer"/> 
            <h1 className="text-xl cursor-pointer">CRAPPO</h1>               
          </div>
        </Link>
        <div>
          <h2 className="font-bold">Quick Links</h2>
          <ul className="md:py-4 py-2">
            {['Home', 'Products', 'Features', 'About', 'Contact'].map((item, index) => (
              <li
                key={item + index}
                className="my-3 cursor-pointer text-sm hover:text-[#3671E9]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-bold">Resources</h2>
          <ul className="md:py-4 py-2">
            {['Download Whitepaper', 'Smart Token', 'Blockchain Explorer', 'Crypto API', 'Interest'].map((item, index) => (
              <li
                key={item + index}
                className="my-3 cursor-pointer text-sm hover:text-[#3671E9]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="md:text-xl font-semibold text-center md:text-left w-full">We accept the following payment systems</h3>
          <div className="flex md:justify-between justify-center items-center md:space-x-4 space-x-2 mt-2 md:mt-4">
            {[visa, mastercard, bitcoin].map((item, index) => (
              <img 
                key={item + index}
                src={item} 
                alt=""
                className="w-[4rem]"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="py-6">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:space-x-3 space-x-0 md:space-y-0 space-y-3">
          <p className="text-sm">&copy; 2023 CRAPPO. All rights reserved</p>
          <div className="flex justify-between items-center space-x-4">
            {[facebook, instagram, youtube, twitter, linkedIn].map((item, index) => (
              <img 
                key={item + index} 
                src={item} 
                alt=""
              />
            ))}
          </div>
        </div>
        <div className="text-center pt-3">
          <p className="text-sm">
            Built by <a href="http://twitter.com/0xrasheed" target="_blank" rel="noopener noreferrer">Rasheed</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;