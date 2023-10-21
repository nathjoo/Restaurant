import React from 'react';
import Map from '../assets/Map.png';
import Chicken from '../assets/Chicken.png';

const Location = () => {
  return (
    <div className="w-full px-[16px] medium:px-[96px] pb-[80px] font-body flex flex-col justify-center items-center">
      <h1 className="text-[24px] medium:text-[36px] font-bold mb-[24px] medium:mb-[38px]">
        Where To Find Us
      </h1>
      <div className="w-full mx-auto bg-white shadow-lg medium:grid grid-cols-3 gap-0 rounded-xl z-10">
        <div className="medium:flex flex-col p-4 max-medium:pb-2" id="alamat">
          <h3 className="text-[18px] medium:text-[20px] big:text-[24px] font-semibold mb-[24px]">
            Address
          </h3>
          <div className="max-medium:grid grid-cols-2">
            <div>
              <h4 className="text-[12px] medium:text-[14px] big:text-[16px]">
                State
              </h4>
              <p className="text-[12px] medium:text-[14px] big:text-[20px] font-medium mb-[24px]">
                Los Angeles
              </p>
            </div>
            <div>
              <h4 className="text-[12px] medium:text-[14px] big:text-[16px]">
                Street
              </h4>
              <p className="text-[12px] medium:text-[14px] big:text-[20px] font-medium mb-[24px]">
                Beverly Boulevard
              </p>
            </div>
            <div>
              <h4 className="text-[12px] medium:text-[14px] big:text-[16px]">
                Number
              </h4>
              <p className="text-[12px] medium:text-[14px] big:text-[20px] font-medium mb-[24px]">
                7165
              </p>
            </div>
            <div>
              <h4 className="text-[12px] medium:text-[14px] big:text-[16px]">
                ZIP Code
              </h4>
              <p className="text-[12px] medium:text-[14px] big:text-[20px] font-medium mb-[24px]">
                90036
              </p>
            </div>
          </div>
          <button className="max-medium:hidden p-2 w-[120px] big:w-[155px] h-[44px] shadow-md rounded-lg text-[14px] big:text-[16px] font-semibold">
            Open Gmap
          </button>
        </div>
        <div
          className="col-span-2 medium:m-2 rounded-r-xl max-medium:p-4 max-medium:pt-0 max-medium:mx-0"
          id="map"
        >
          <img
            src={Map}
            className="w-full h-full rounded-r-xl max-medium:rounded-xl bg-contain"
          />
        </div>
      </div>
      {/* <div className="absolute w-[300px] h-[400px] z-0 right-[-30px] top-[3050px] overflow-hidden">
        <img src={Chicken}></img>
      </div> */}
    </div>
  );
};

export default Location;
