import React from "react";
import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.jpeg";
import img5 from "../assets/img5.jpeg";

const Promo = () => {
  return (
    <div className="w-full px-[16px] py-[40px] medium:px-[96px] big:py-[64px] font-body bg-[#F8FFEF]">
      <div className="flex flex-row justify-between">
        <div className="w-[470px] flex flex-col gap-[8px] big:gap-[14px] big:h-[412px] medium:h-[160px] justify-center items-start">
          <h3 className=" text-[16px] big:text-[24px] font-bold">
            Experience Culinary Excellence!
          </h3>
          <h1 className="text-[#007561] text-[16px] medium:text-[24px] big:text-[40px] font-bold">
            Treat Yourself to Unique Dishes at 15% Off.
          </h1>
          <h2 className="text-[16px] medium:text-[24px] big:text-[30px]">
            Limited Time Offer - Book Now!
          </h2>
        </div>
        <div className="relative hidden big:block">
          <div className="flex flex-row gap-[7px] items-end">
            <img
              src={img1}
              className="w-[216px] h-[143px] rounded-3xl rounded-br-none  "
            />
            <img src={img2} className="w-[280px] h-[187px] rounded-t-3xl " />
            <img
              src={img3}
              className="w-[214px] h-[160px] rounded-3xl rounded-bl-none "
            />
          </div>
          <div className="flex flex-row gap-[7px] items-start mt-[7px] justify-center">
            <img
              src={img4}
              className="w-[229px] h-[153px] rounded-3xl rounded-tr-none  "
            />
            <img
              src={img5}
              className="w-[290px] h-[217px] rounded-3xl rounded-tl-none "
            />
          </div>
        </div>
      </div>
      <div className="mt-[40px] medium:mt-[48px] big:mt-[80px]">
        <h1 className="text-[24px] medium:text-[28px] big:text-[36px] font-bold">
          Book a Table Now!
        </h1>
        <div className="flex flex-col big:grid grid-cols-3 mt-[24px] big:mt-[38px] big:gap-[54px]">
          <div className="w-full">
            <p className="mb-2 text-[16px] font-bold">Name</p>
            <input
              className="w-full h-[48px] p-4 rounded-md text-[16px] bg-white"
              placeholder="Name"
            ></input>
            <p className="mb-2 text-[16px] font-bold mt-[14px]">Phone Number</p>
            <input
              className="w-full h-[48px] p-4 rounded-md text-[16px] bg-white"
              placeholder="Phone Number"
            ></input>
            <p className="mb-2 text-[16px] font-bold mt-[14px]">Email</p>
            <input
              className="w-full h-[48px] p-4 rounded-md text-[16px] bg-white"
              placeholder="Email"
            ></input>
            <p className="mb-2 text-[16px] font-bold mt-[14px]">
              Number of Guest
            </p>
            <input
              className="w-full h-[48px] p-4 rounded-md text-[16px] bg-white"
              placeholder="Number of Guest"
            ></input>
          </div>
          <div className="w-full">
            <div className="grid grid-cols-2 gap-4 mt-2 big:mt-0">
              <div>
                <p className="mb-2 text-[16px] font-bold">Date</p>
                <input
                  className="w-full h-[48px] p-4 rounded-md text-[16px] bg-white"
                  placeholder="Date"
                ></input>
              </div>
              <div>
                <p className="mb-2 text-[16px] font-bold">Time</p>
                <input
                  className="w-full h-[48px] p-4 rounded-md text-[16px] bg-white"
                  placeholder="Time"
                ></input>
              </div>
            </div>
            <div>
              <p className="mb-2 text-[16px] font-bold mt-[14px]">
                Special Request
              </p>
              <input
                className="w-full h-[100px] p-4 rounded-md text-[16px] bg-white items-start"
                placeholder="Special Request"
              ></input>
            </div>
            <div className="flex justify-between mt-[28px] items-center">
              <p className="w-[210px] font-medium">
                We look forward to hosting you at Tasty Good!
              </p>
              <button className="w-[84px] h-[34px] items-center bg-[#FF9900] text-white text-[16px] font-medium rounded-lg border-none">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promo;
