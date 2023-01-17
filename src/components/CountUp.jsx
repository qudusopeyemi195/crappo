import React, { useEffect } from 'react'
import ReactVisibilitySensor from 'react-visibility-sensor';
import CountUp from 'react-countup';
import chart from '../assets/images/BarChart.png';
import person from '../assets/images/Person.png';
import earth from '../assets/images/Earth.png';

const CountUpContent = ({ limit, imgSrc, text, numb, doll }) => {
  return (
  <div className="flex items-center py-5 lg:py-0 space-x-4">
    <div className="bg-white/5 p-4 rounded-full">
      <img src={imgSrc} alt="/" />
    </div>
    <ReactVisibilitySensor partialVisibility offset={{ bottom: 100 }}>
      {({ isVisible }) => (
        <>
          {isVisible ? (
            <div>
              <div>{doll ? '$' : ''}<CountUp end={limit} duration={4}/>{numb}</div>
              <p>{text}</p>
            </div>
          ) : (
            <div>
              <p className='text-4xl'>0</p>
              <p>{text}</p>
            </div>
          )}
        </>
      )}
    </ReactVisibilitySensor>
  </div>
  );
}

const CountUpSection = () => {
  const reveal = () => {
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
    };
  };

  useEffect (() => {
    window.addEventListener('scroll', reveal);
  }, []);

  return (
    <div className="flex justify-between items-center flex-wrap w-full reveal">
      <CountUpContent limit={30} text={'Digital Currency Exchange'} doll numb={'B'} imgSrc={chart}  />
      <CountUpContent limit={10} text={'Trusted Wallets Investor'} numb={'M+'} imgSrc={person} />
      <CountUpContent limit={195} text={'Countries Supported'} imgSrc={earth} />
    </div>
  );
}

export default CountUpSection;