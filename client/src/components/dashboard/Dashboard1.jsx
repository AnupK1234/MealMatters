import React from "react";
import { Link, useNavigate } from 'react-router-dom';
export default function Dashboard1() {
  const navigate=useNavigate();
  return (
    <>
      <div className=" w-[300px] h-[750px] bg-[#406c5eb4] sticky">
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
        <div className="ml-5 w-[260px] h-[1px] bg-white absolute top-[200px]"></div>
          <button className="w-[130px] top-[250px] left-[85px] [font-family:'Miriam_Libre-Regular',Helvetica]  text-white text-[18px] absolute text-center tracking-[0] leading-[normal] font-semibold hover:scale-110 ">
            Home
          </button>
          <button className="absolute w-[130px] top-[320px] left-[85px] [font-family:'Miriam_Libre-Regular',Helvetica] font-semibold  text-white text-[18px] text-center tracking-[0] leading-[normal] hover:scale-110">
          Profile
          </button>
          <button className="absolute w-[130px] top-[400px] left-[85px] [font-family:'Miriam_Libre-Regular',Helvetica] font-semibold text-white text-[18px] text-center tracking-[0] leading-[normal] hover:scale-110">
          Donor
          </button>
          <button className="absolute w-[130px] top-[480px] left-[85px] [font-family:'Miriam_Libre-Regular',Helvetica] font-semibold text-white text-[18px] text-center tracking-[0] leading-[normal] hover:scale-110">
           Outreach
          </button>
          <button className="absolute w-[130px] top-[560px] left-[85px] [font-family:'Miriam_Libre-Bold',Helvetica] font-semibold text-white text-[18px] text-center tracking-[0] leading-[normal] hover:scale-110" onClick={()=>{
          navigate('/inventory')
          }}>
          Inventory
          </button>
          <div className="ml-5 w-[260px] h-[1px] bg-white absolute top-[640px]"></div>
          <button className="absolute w-[130px] top-[690px] left-[85px] [font-family:'Miriam_Libre-Regular',Helvetica] font-semibold text-white text-[18px] text-center tracking-[0] leading-[normal] hover:scale-110 ">
          Log out
          </button>
        </div>
      </div>
    </>
  );
}




