import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  
  function moveBack() {
    navigate('/')
  }

  return (
    <>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={moveBack}>Navigate Back</button>

      <div className="bg-white overflow-hidden w-100 h-[910px]">
        <div className="relative w-[1218px] h-[924px] left-[-65px]">
          <img
            className="absolute w-[970px] h-[910px] top-0 left-[247px] object-cover"
            alt="Untitled design"
            src="https://c.animaapp.com/kbYzlNEe/img/untitled-design--63--1.png"
          />
          <div className="absolute w-[175px] h-[30px] top-[821px] left-[881px] bg-[#f4bfad]" />
          <div className="absolute w-[175px] h-[30px] top-[570px] left-[881px] bg-[#f4bfad]" />
          <div className="absolute w-[175px] h-[30px] top-[868px] left-[881px] bg-[#f4bfad]" />
          <div className="absolute top-[572px] left-[931px] [font-family:'Miriam_Libre-Bold',Helvetica] font-bold text-black text-[18px] text-center tracking-[0] leading-[normal]">
            Contact
          </div>
          <div className="top-[870px] left-[935px] [font-family:'Miriam_Libre-Bold',Helvetica] font-bold text-black text-[18px] absolute text-center tracking-[0] leading-[normal]">
            Contact
          </div>
          <div className="absolute top-[572px] left-[931px] [font-family:'Miriam_Libre-Bold',Helvetica] font-bold text-black text-[18px] text-center tracking-[0] leading-[normal]">
            Contact
          </div>
          <div className="absolute top-[572px] left-[931px] [font-family:'Miriam_Libre-Bold',Helvetica] font-bold text-black text-[18px] text-center tracking-[0] leading-[normal]">
            Contact
          </div>
          <div className="absolute w-[316px] h-[851px] top-[73px] left-[65px] bg-[#2048209e]" />
          <div className="absolute w-[370px] h-[51px] top-[448px] left-0 bg-[#fffffff0] rounded-[30px]" />
          <Link to="/" className="w-[130px] top-[301px] left-[105px] [font-family:'Miriam_Libre-Regular',Helvetica] font-normal text-white text-[18px] absolute text-center tracking-[0] leading-[normal]">
            Home
          </Link>
          <div className="absolute w-[130px] top-[180px] left-[126px] [font-family:'Miriam_Libre-Regular',Helvetica] font-normal text-white text-[20px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            John
          </div>
          <img
            className="absolute w-[316px] h-[83px] top-[55px] left-[65px]"
            alt="Rectangle"
            src="https://c.animaapp.com/kbYzlNEe/img/rectangle-59.svg"
          />
          <div className="absolute w-[179px] top-[72px] left-[100px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-white text-[50px] tracking-[0] leading-[normal] whitespace-nowrap">
            MealMatter
          </div>
          
          <img
            className="absolute w-[34px] h-[34px] top-[181px] left-[111px]"
            alt="Ellipse"
            src="https://c.animaapp.com/kbYzlNEe/img/ellipse-4.svg"
          />
          <img
            className="absolute w-[22px] h-[22px] top-[187px] left-[117px] object-cover"
            alt="Ml"
            src="https://c.animaapp.com/kbYzlNEe/img/ml-1@2x.png"
          />
          <div className="absolute w-[175px] h-[30px] top-[326px] left-[881px] bg-[#f4bfad]" />
          <img
            className="top-[243px] absolute w-[243px] h-px left-[88px] object-cover"
            alt="Line"
            src="https://c.animaapp.com/kbYzlNEe/img/line-8.svg"
          />
          <img
            className="top-[706px] absolute w-[243px] h-px left-[88px] object-cover"
            alt="Line"
            src="https://c.animaapp.com/kbYzlNEe/img/line-8.svg"
          />
          <div className="absolute w-[130px] top-[381px] left-[117px] [font-family:'Miriam_Libre-Regular',Helvetica] font-normal text-white text-[18px] text-center tracking-[0] leading-[normal]">
            Students
          </div>
          <div className="absolute w-[130px] top-[544px] left-[117px] [font-family:'Miriam_Libre-Regular',Helvetica] font-normal text-white text-[18px] text-center tracking-[0] leading-[normal]">
            Outreach
          </div>
          <Link to="/inventory" className="absolute w-[130px] top-[627px] left-[119px] [font-family:'Miriam_Libre-Regular',Helvetica] font-normal text-white text-[18px] text-center tracking-[0] leading-[normal]">
            Inventory
          </Link>
          <div className="absolute w-[130px] top-[765px] left-[111px] [font-family:'Miriam_Libre-Regular',Helvetica] font-normal text-white text-[18px] text-center tracking-[0] leading-[normal]">
            Log out
          </div>
          <div className="absolute w-[130px] top-[461px] left-[111px] [font-family:'Miriam_Libre-Bold',Helvetica] font-bold text-black text-[18px] text-center tracking-[0] leading-[normal]">
            Donors
          </div>
          <div className="top-[328px] left-[931px] [font-family:'Miriam_Libre-Bold',Helvetica] font-bold text-black text-[18px] absolute text-center tracking-[0] leading-[normal]">
            Contact
          </div>
          <img
            className="absolute w-[217px] h-[108px] top-[171px] left-[461px] object-cover"
            alt="Image"
            src="https://c.animaapp.com/kbYzlNEe/img/image-3@2x.png"
          />
          <div className="absolute w-[175px] h-[30px] top-[279px] left-[482px] bg-[#f8c5b3]" />
          <div className="top-[323px] bg-[#f4bfad] absolute w-[175px] h-[30px] left-[482px]" />
          <div className="absolute top-[281px] left-[500px] [font-family:'Miriam_Libre-Bold',Helvetica] font-bold text-black text-[18px] text-center tracking-[0] leading-[normal]">
            View donations
          </div>
          <div className="absolute w-[175px] h-[30px] top-[282px] left-[881px] bg-[#f8c5b3]" />
          <div className="top-[284px] left-[899px] absolute [font-family:'Miriam_Libre-Bold',Helvetica] font-bold text-black text-[18px] text-center tracking-[0] leading-[normal]">
            View donations
          </div>
          <div className="top-[328px] left-[534px] [font-family:'Miriam_Libre-Bold',Helvetica] font-bold text-black text-[18px] absolute text-center tracking-[0] leading-[normal]">
            Contact
          </div>
          <img
            className="absolute w-[217px] h-[108px] top-[171px] left-[461px] object-cover"
            alt="Image"
            src="image-5.png"
          />
          <div className="absolute w-[175px] h-[30px] top-[279px] left-[482px] bg-[#f8c5b3]" />
          <div className="top-[323px] bg-[#f4bfad] absolute w-[175px] h-[30px] left-[482px]" />
          <div className="absolute top-[281px] left-[500px] [font-family:'Miriam_Libre-Bold',Helvetica] font-bold text-black text-[18px] text-center tracking-[0] leading-[normal]">
            View donations
          </div>
          <div className="top-[325px] left-[534px] [font-family:'Miriam_Libre-Bold',Helvetica] font-bold text-black text-[18px] absolute text-center tracking-[0] leading-[normal]">
            Contact
          </div>
          <div className="absolute w-[159px] h-[27px] top-[824px] left-[482px] bg-[#f8c5b3]" />
          <div className="absolute w-[159px] h-[30px] top-[868px] left-[482px] bg-[#f4bfad]" />
          <div className="top-[826px] left-[484px] absolute [font-family:'Miriam_Libre-Bold',Helvetica] font-bold text-black text-[18px] text-center tracking-[0] leading-[normal]">
            View donations
          </div>
          <div className="top-[873px] left-[518px] [font-family:'Miriam_Libre-Bold',Helvetica] font-bold text-black text-[18px] absolute text-center tracking-[0] leading-[normal]">
            Contact
          </div>
          <div className="absolute w-[175px] h-[27px] top-[824px] left-[482px] bg-[#f8c5b3]" />
          <div className="absolute w-[175px] h-[30px] top-[868px] left-[482px] bg-[#f4bfad]" />
          <div className="top-[826px] left-[499px] absolute [font-family:'Miriam_Libre-Bold',Helvetica] font-bold text-black text-[18px] text-center tracking-[0] leading-[normal]">
            View donations
          </div>
          <div className="top-[870px] left-[534px] [font-family:'Miriam_Libre-Bold',Helvetica] font-bold text-black text-[18px] absolute text-center tracking-[0] leading-[normal]">
            Contact
          </div>
          <div className="top-[526px] bg-[#f8c5b3] absolute w-[175px] h-[30px] left-[482px]" />
          <div className="top-[570px] bg-[#f4bfad] absolute w-[175px] h-[30px] left-[482px]" />
          <div className="top-[528px] left-[500px] absolute [font-family:'Miriam_Libre-Bold',Helvetica] font-bold text-black text-[18px] text-center tracking-[0] leading-[normal]">
            View donations
          </div>
          <div className="top-[575px] left-[534px] [font-family:'Miriam_Libre-Bold',Helvetica] font-bold text-black text-[18px] absolute text-center tracking-[0] leading-[normal]">
            Contact
          </div>
          <div className="top-[526px] bg-[#f8c5b3] absolute w-[175px] h-[30px] left-[482px]" />
          <div className="top-[570px] bg-[#f4bfad] absolute w-[175px] h-[30px] left-[482px]" />
          <div className="top-[528px] left-[500px] absolute [font-family:'Miriam_Libre-Bold',Helvetica] font-bold text-black text-[18px] text-center tracking-[0] leading-[normal]">
            View donations
          </div>
          <div className="top-[572px] left-[535px] [font-family:'Miriam_Libre-Bold',Helvetica] font-bold text-black text-[18px] absolute text-center tracking-[0] leading-[normal]">
            Contact
          </div>
          <img
            className="absolute w-[194px] h-[114px] top-[154px] left-[872px] object-cover"
            alt="Fudruckers"
            src="https://c.animaapp.com/kbYzlNEe/img/fudruckers-1@2x.png"
          />
          <img
            className="absolute w-[297px] h-[60px] top-[426px] left-[420px] object-cover"
            alt="Screen shot"
            src="https://c.animaapp.com/kbYzlNEe/img/screen-shot-2021-08-28-at-3-22-1@2x.png"
          />
          <img
            className="absolute w-[218px] h-[100px] top-[415px] left-[860px] object-cover"
            alt="Image"
            src="https://c.animaapp.com/kbYzlNEe/img/image-4@2x.png"
          />
          <div className="absolute w-[175px] h-[30px] top-[526px] left-[881px] bg-[#f8c5b3]" />
          <div className="top-[528px] left-[899px] absolute [font-family:'Miriam_Libre-Bold',Helvetica] font-bold text-black text-[18px] text-center tracking-[0] leading-[normal]">
            View donations
          </div>
          <div className="top-[824px] left-[899px] absolute [font-family:'Miriam_Libre-Bold',Helvetica] font-bold text-black text-[18px] text-center tracking-[0] leading-[normal]">
            View donations
          </div>
          <img
            className="absolute w-[216px] h-[145px] top-[655px] left-[862px] object-cover"
            alt="Hmart logo"
            src="https://c.animaapp.com/kbYzlNEe/img/hmart-logo-1@2x.png"
          />
          <div className="absolute w-[837px] h-[40px] top-[56px] left-[381px] bg-[#f4c0ad]" />
          <p className="absolute top-[63px] left-[540px] [font-family:'Montserrat-Regular',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
            A donation request has been made
          </p>
        </div>
      </div>
    </>
  );
}
