import React from "react";
import logo from "../assets/Tasty Good.png";
import { faInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full max-w-[1440px] font-body bg-[#F8FFEF] px-[16px] medium:px-[96px] pt-[32px] medium:pt-[64px] flex flex-col medium:pb-[64px] pb-[32px] m-auto">
      <img
        src={logo}
        className="w-[210px] h-[40px] max-medium:w-[164px] max-medium:h-[32px]"
      />
      <p className="max-medium:text-[14px] text-[16px] medium:text-[20px]">
        Savoring Moments, Creating Memories.
      </p>
      <div className="medium:grid big:grid-cols-3 medium:grid-cols-2 flex flex-col mt-[36px]">
        <div>
          <h4 className="max-medium:text-[14px] text-[16px]">Address</h4>
          <p className="max-medium:text-[14px] text-[16px] font-medium mt-1">
            7165 Beverly Blvd, Los Angeles, CA 90036, USA
          </p>
          <h4 className="mt-[22px] max-medium:text-[14px] text-[16px]">
            Opening Hours
          </h4>
          <p className="max-medium:text-[14px] text-[16px] font-medium mt-1">
            Monday - Saturday: 12 AM - 10 PM
          </p>
          <h4 className="mt-[22px] max-medium:text-[14px] text-[16px]">
            Follow Us
          </h4>
          <div className="flex flex-col gap-3"></div>
        </div>
        <div>
          <h4 className="max-medium:text-[14px] text-[16px]">Careers</h4>
          <p className="max-medium:text-[14px] text-[16px] font-medium mt-1">
            Join our passionate team! Visit our Career Page to explore job
            opportunities and apply online.
          </p>
          <h4 className="max-medium:text-[14px] text-[16px] mt-[22px]">
            Stay Updated
          </h4>
          <p className="max-medium:text-[14px] text-[16px] font-medium mt-1">
            Subscribe to our newsletter for the latest news, offers, and
            updates. Enter your email below.
          </p>
          <div className="flex flex-row justify-between gap-3 mt-[16px]">
            <input
              className="w-full h-[48px] p-4 rounded-md text-[16px] bg-white"
              placeholder="Email"
            ></input>
            <button className="w-[110px] h-[48px] p-2 items-center bg-[#FF9900] text-white text-[16px] font-medium rounded-lg border-none">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
