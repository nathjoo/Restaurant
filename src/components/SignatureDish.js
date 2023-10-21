import React from 'react';
import Avocado from '../assets/Avocado.png';
import Apple from '../assets/Apple.png';
import Hummus from '../assets/Hummus.png';
import Noodle from '../assets/Noodle.png';
import Persian from '../assets/Persian.png';
import Taco from '../assets/Taco.png';
import Garlic from '../assets/Garlic.png';

const SignatureDish = () => {
  const cardStyle =
    'medium:w-[270px] big:w-[240px] rounded-xl bg-white px-[14px] flex flex-col gap-[12px] py-[22px] w-[168px]';

  return (
    <div className="flex flex-col justify-center items-center w-[100%] font-body px-[16px] py-[40px] max-medium:pt-[80px] medium:px-[96px] medium:py-[80px] ">
      <div className="flex flex-row justify-between items-center w-full z-10">
        <h1 className="text-[20px] medium:text-[28px] big:text-[36px] font-bold">
          Our Signature Dishes
        </h1>
        <button className=" hidden big:block items-center bg-[#FF9900] text-white text-[16px] font-medium rounded-xl border-none p-3">
          See More Menus
        </button>
      </div>
      <div className="w-full flex flex-wrap medium:flex-row justify-between medium:mt-[38px] mt-[22px] gap-y-2 medium:gap-y-4 z-10">
        <div className={cardStyle}>
          <img src={Apple} />
          <h3 className="medium:text-[20px] text-[16px] font-semibold">
            Apple Pie
          </h3>
          <p className="medium:text-[14px] text-[11px] font-normal">
            Deliciously warm apple pie with a flaky crust, a nostalgic treat
            that will delight your taste buds. asdasdads
          </p>
        </div>
        <div className={cardStyle}>
          <img src={Persian} />
          <h3 className="medium:text-[20px] text-[16px] font-semibold">
            Persian Love Cake
          </h3>
          <p className="medium:text-[14px] text-[11px] font-normal">
            Savor the romance of our Persian Love Cake, a divine blend of
            almond, rose, and cardamom flavor.
          </p>
        </div>
        <div className={cardStyle}>
          <img src={Noodle} />
          <h3 className="medium:text-[20px] text-[16px] font-semibold">
            Noodle Soup
          </h3>
          <p className="medium:text-[14px] text-[11px] font-normal">
            Experience warmth and comfort in every spoonful of our Noodle Soup.
            A delicious blend of flavorful.
          </p>
        </div>
        <div className={cardStyle}>
          <img src={Hummus} />
          <h3 className="medium:text-[20px] text-[16px] font-semibold">
            Hummus
          </h3>
          <p className="medium:text-[14px] text-[11px] font-normal">
            Savor the creaminess of our Hummus: a delicious blend of chickpeas,
            tahini, and zesty lemon.
          </p>
        </div>
        <div className={cardStyle}>
          <img src={Avocado} />
          <h3 className="medium:text-[20px] text-[16px] font-semibold">
            Avocado Pasta
          </h3>
          <p className="medium:text-[14px] text-[11px] font-normal">
            Savor our Avocado Pasta: Creamy and nutritious, a delightful twist
            on classic pasta dishes.
          </p>
        </div>
        <div
          className=" big:hidden rounded-xl shadow-md px-[14px] flex flex-col gap-[12px] 
                py-[22px] w-[168px] bg-[#F6FAF1] justify-center items-center medium:w-[270px] medium:shadow-lg"
        >
          <img src={Taco} className="w-[82px] h-[57.5px]" />
          <h3 className="medium:text-[20px] text-[16px] font-semibold text-[#007561]">
            See More Menus
          </h3>
        </div>
      </div>
      {/* <div className="absolute w-[374px] h-[481px] z-0 left-[-80px] top-[670px] overflow-hidden">
        <img src={Garlic}></img>
      </div> */}
    </div>
  );
};

export default SignatureDish;
