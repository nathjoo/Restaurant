import React from "react";

const boxStyle =
  "flex flex-col justify-between px-[24px] py-[32px] shadow-lg bg-white w-full rounded-xl min-h-[495px] items-center mb-[16px] big:mb-0";

const Member = () => {
  return (
    <div className="w-full font-body max-medium:my-[40px] my-[80px] flex flex-col items-center">
      <h1 className="text-[24px] medium:text-[28px] big:text-[36px] font-bold px-[16px]">
        Exclusive Member Perks: Join Now!
      </h1>
      <div className="big:grid grid-cols-3 justify-between w-full big:px-[96px] medium:px-[96px] px-[16px] gap-[54px] mt-[28px] medium:mt-[38px]">
        <div className={boxStyle}>
          <div className="flex flex-col items-center gap-5">
            <h2 className="text-[24px] medium:text-[32px] text-[#6EC3DE] font-semibold">
              Silver
            </h2>
            <l>
              <li className="mb-2">15% off on all dining experiences.</li>
              <li className="mb-2">Complimentary dessert on your birthday.</li>
              <li className="mb-2">
                Access to exclusive promotions and events.
              </li>
              <li className="mb-2">
                Priority reservations for special occasions.
              </li>
              <li className="mb-2">Invitations to members-only tastings.</li>
            </l>
          </div>
          <button className="w-full h-[48px] bg-[#007561] text-[16px] font-semibold text-white rounded-lg">
            Join
          </button>
        </div>
        <div className={boxStyle}>
          <div className="flex flex-col items-center gap-5">
            <h2 className="text-[24px] medium:text-[32px] text-[#FFA500] font-semibold">
              Gold
            </h2>
            <l>
              <li className="mb-2">20% off on all dining experiences.</li>
              <li className="mb-2">Free appetizer with every visit.</li>
              <li className="mb-2">Complimentary dessert on your birthday.</li>
              <li className="mb-2">Early access to new menu items.</li>
              <li className="mb-2">
                Priority reservations for special occasions.
              </li>
              <li className="mb-2">
                Invitations to exclusive members-only events.
              </li>
              <li className="mb-2">Personalized dining recommendations.</li>
            </l>
          </div>
          <button className="w-full h-[48px] bg-[#007561] text-[16px] font-semibold text-white rounded-lg">
            Join
          </button>
        </div>
        <div className={boxStyle}>
          <div className="flex flex-col items-center gap-5">
            <h2 className="text-[24px] medium:text-[32px] text-[#430054] font-semibold">
              Platinum
            </h2>
            <l>
              <li className="mb-2">25% off on all dining experiences.</li>
              <li className="mb-2">
                Complimentary appetizer and dessert with every visit.
              </li>
              <li className="mb-2">Free bottle of wine on your birthday.</li>
              <li className="mb-2">Exclusive chef's table experiences.</li>
              <li className="mb-2">
                Priority reservations for special occasions.
              </li>
              <li className="mb-2">Invitations to VIP members-only events.</li>
              <li className="mb-2">Personalized dining concierge service.</li>
            </l>
          </div>
          <button className="w-full h-[48px] bg-[#007561] text-[16px] font-semibold text-white rounded-lg">
            Join
          </button>
        </div>
      </div>
    </div>
  );
};

export default Member;
