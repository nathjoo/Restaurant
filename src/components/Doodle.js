import React from 'react';
import Pizza from '../assets/Pizza.png';
import Garlic from '../assets/Garlic.png';
import Cheese from '../assets/Cheese.png';
import Chicken from '../assets/Chicken.png';
import Burger from '../assets/Burger.png';

const Doodle = () => {
  return (
    <div>
      <div className="hidden big:block absolute w-[600px] h-[700px] z-0 right-[-140px] top-[1900px]">
        <img src={Pizza}></img>
      </div>
      <div className="hidden big:block absolute w-[374px] h-[481px] z-0 left-[-80px] top-[670px]">
        <img src={Garlic}></img>
      </div>
      <div className="hidden big:block absolute w-[270px] h-[155px] z-0 left-[-40px] top-[2400px]">
        <img src={Cheese}></img>
      </div>
      <div className="hidden big:block absolute w-[300px] h-[400px] z-0 right-[-30px] top-[3050px]">
        <img src={Chicken}></img>
      </div>
      <div className="hidden big:block absolute w-[542px] h-[426px] z-0 right-[-70px] top-[3900px]">
        <img src={Burger}></img>
      </div>
    </div>
  );
};

export default Doodle;
