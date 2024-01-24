import React, { useState } from "react";
import { HiMenuAlt3, HiHome, HiUserGroup, HiMap, HiShoppingCart, HiHeart, HiCog} from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { Link, Outlet } from "react-router-dom";
import useScreenSize from "../../utils/useScreenSize";
import {Dashboard} from './Dashboard'
import {Dashboard1} from './Dashboard1'
import logo from '../../assets/Logo-Ic.png'

const Home = () => {
    const [open, setOpen] = useState(true);
    const [selectedtab, setSelectedTab] = useState('Dashboard');
    const {width} = useScreenSize()
  const SidebarMenus = [
    { name: "Dashboard",  icon: MdDashboard, component: <Dashboard /> },
    { name: "Home",  icon: HiHome, component: <Dashboard1 /> },
    { name: "Student", icon: HiUserGroup, component: <Dashboard /> },
    { name: "Donors",  icon: TbReportAnalytics, component: <Dashboard1 /> },
    { name: "Outreach",  icon: HiMap, component: <Dashboard /> },
    { name: "Inventory",  icon: HiShoppingCart, component: <Dashboard1 /> },
    { name: "Saved",  icon: HiHeart, margin: true, component: <Dashboard /> },
    { name: "Setting",  icon: HiCog, component: <Dashboard1 /> },
  ];
  console.log(selectedtab)
  return (
    <section className="flex bg-white h-screen relative overflow-hidden">
      <div
        className={`bg-white min-h-screen absolute md:relative  ${
          open ? "w-72" : "w-0 md:w-[70px]"
        } duration-500 text-gray-100  md:px-4`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className={`cursor-pointer h-10 w-10 text-black absolute p-2 bg-white rounded-full border-2 border-sky-500 ${width <=768 ?  !open && width <=768 ? 'translate-x-16 transition-transform duration-300': 'translate-x-5 transition-transform duration-300' : ''}`}
            onClick={() => setOpen(!open)}
          />
        </div>


        
        <div className="py-20 flex flex-col gap-4  h-full  px-8 md:px-0">
 
          {SidebarMenus?.map((menu, i) => (
            <section
              key={i}
              onClick={()=> setSelectedTab(menu.name)}
              className={` ${
                menu?.margin && "mt-24"
              } group flex items-center text-sm cursor-pointer  gap-3.5 font-medium p-2 hover:bg-teal-100 text-black transition-all duration-300 rounded-md ${!open && width <= 768 ? '-translate-x-16 transition-transform duration-300': 'transition-transform duration-300'}`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              {/* <menu.icon className="h-5 w-5"/> */}
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 text-base ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                }  absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </section>
          ))}
        </div>
      </div>
      <div className=" h-full w-full">
        <nav className="h-16 w-full flex justify-end items-center px-8">
            <div className="h-fit py-px pl-6 flex justify-center items-center gap-2 bg-teal-400 rounded-lg">
                <h2 className="font-semibold pr-3 text-white">Hello! {'Admin'}</h2>
                <img src={logo} alt="logo" className="h-10 w-10 p-1 scale-125 border-[1px] border-teal-400   outline outline-4 outline-white  rounded-full translate-x-1.5 bg-white"/>
            </div>
        </nav>
        <section className="h-full w-full bg-purple-400 rounded-tl-xl">
          {/* {
            SidebarMenus.
          } */}
        </section>
      </div>
    </section>
  );
};

export default Home;