import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-scroll';
import Logo from '../assets/images/logo.png';


const Button = ({ children, classProps }) => {
  return (
    <button className={`flex ${classProps} px-3 py-2 items-center cursor-pointer active:-translate-y-1 hover:-translate-y-2 duration-300 text-white font-[600] bg-[#3b82f6] rounded-2xl rounded-tl-none rounded-br-none`}>
      {children}
    </button>
  );
};

const NavbarItem = ({ title, classProps, handleClick }) => {
  return (
    <li onClick={handleClick} className={`cursor-pointer text-sm hover:font-bold hover:text-[#3671E9] ${classProps}`}>
      {title}
    </li>
  );
};

const SocialLinks = ({title}) => {
  return (
    <div className='rounded-full shadow-sm shadow-black p-3'>
      {title}
    </div>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [navBg, setNavBg] = useState(false);

  const handleNavBg = () => {
    if (window.scrollY >= 90) {
      setNavBg(true);
    } else {
      setNavBg(false);
    }
  };

  window.addEventListener('scroll', handleNavBg);

  return (
    <nav className={`fixed top-0 z-100 w-full h-16 md:h-20 ${navBg 
      ? 'shadow-xl z-[100] bg-[#0D0D2B] ease-in-out duration-300' 
      : ''}`} 
     >
      <div className="flex justify-between items-center w-full h-full md:px-10 px-4 max-w-[1200px] mx-auto"> 
        <Link to="hero" smooth={true} offset={2} duration={500}>
          <div className="flex items-center md:space-x-4 space-x-2 cursor-pointer"> 
            <img src={Logo} alt="/" width={40} />
            <h1 className="text-lg">CRAPPO</h1>
          </div>
        </Link>
        <div className="">
          <ul className="hidden md:flex justify-between items-center flex-initial text-white list-none">
            {['Products', 'Features', 'About', 'Contact'].map((item, index) => (
              <NavbarItem key={item + index} title={item} classProps={'mx-4'} />
            ))}
            <li className="flex space-x-4 items-center ml-4">
              <Button classProps={'bg-transparent border'}>Log In</Button>
              <div>|</div>
              <Button>Register</Button>
            </li>
          </ul>
          <div onClick={() => setToggleMenu(!toggleMenu)} className="md:hidden cursor-pointer z-10">
            <AiOutlineMenu size={25} color={'white'} />
          </div>
        </div>
      </div>
      {/* Mobile Nav */}
      <div className={toggleMenu ? 'md:hidden fixed left-0 top-0 w-full h-full bg-black/70' : ''}> 
        <div className={toggleMenu
          ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-full  bg-[#0D0D2B] p-4 ease-in duration-500' 
          : 'fixed left-[-100%] top-0 ease-in duration-500'}
        >
          <div>
            <div className="flex justify-between items-center w-full">
              <Link to="hero" smooth={true} offset={2} duration={500} onClick={() => setToggleMenu(false)}>
                <div className="flex items-center space-x-2 cursor-pointer">
                  <img src={Logo} alt="" width={40} />
                  <h1 className="text-lg">CRAPPO</h1>
                </div>
              </Link>
              <div className="p-3 rounded-full shadow-sm shadow-black cursor-pointer" onClick={() => setToggleMenu(false)}>
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-3">
              <p className="w-[85%] md:w-[90%] py-3">Let's trade crypto together</p>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <ul className="text-white list-none">
              {['Products', 'Features', 'About', 'Contact', 'Login', 'Register'].map((item, index) => (
                <NavbarItem 
                  key={item + index} 
                  title={item} 
                  handleClick={() => setToggleMenu(false)}
                  classProps="my-4" />
              ))}
            </ul>
            <div>
              <p className="uppercase tracking-widest text-[#3671E9]">Connect With Us</p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                {[<FaLinkedinIn />, <FaGithub />, <AiOutlineMail />, <FaFacebook />].map((link, index) => (
                  <SocialLinks 
                    key={link + index} 
                    title={link} 
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;