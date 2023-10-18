import React from "react";

export default function Dashboard1() {
  return (
    <>
      <div className="absolute w-[316px] h-[800px] bg-[#ffd900b4]">
        <div>
          <img
            className="absolute w-[316px] h-[83px]"
            alt="Rectangle"
            src="https://c.animaapp.com/kbYzlNEe/img/rectangle-59.svg"
          />
          <div className="absolute w-[179px] top-[20px] left-[50px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-white text-[40px] tracking-[0] leading-[normal] whitespace-nowrap">
            MealMatters
          </div>
        </div>
        <div className="absolute left-0 top-0">
          <div className="w-[130px] top-[301px] left-[105px] [font-family:'Miriam_Libre-Regular',Helvetica] font-normal text-black text-[18px] absolute text-center tracking-[0] leading-[normal]">
            Home
          </div>
          <div className="absolute w-[130px] top-[381px] left-[117px] [font-family:'Miriam_Libre-Regular',Helvetica] font-normal  text-black text-[18px] text-center tracking-[0] leading-[normal]">
            Students
          </div>
          <div className="absolute w-[130px] top-[544px] left-[117px] [font-family:'Miriam_Libre-Regular',Helvetica] font-normal text-black text-[18px] text-center tracking-[0] leading-[normal]">
            Outreach
          </div>
          <div className="absolute w-[130px] top-[627px] left-[119px] [font-family:'Miriam_Libre-Regular',Helvetica] font-normal text-black text-[18px] text-center tracking-[0] leading-[normal]">
            Inventory
          </div>
          <div className="absolute w-[130px] top-[461px] left-[111px] [font-family:'Miriam_Libre-Bold',Helvetica] font-bold text-black text-[18px] text-center tracking-[0] leading-[normal]">
            Donors
          </div>
          <div className="absolute w-[130px] top-[765px] left-[111px] [font-family:'Miriam_Libre-Regular',Helvetica] font-normal text-black text-[18px] text-center tracking-[0] leading-[normal]">
            Log out
          </div>
        </div>
      </div>
    </>
  );
}
