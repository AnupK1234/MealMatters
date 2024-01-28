import React, { useState } from "react";
import {
  HiCog,
  HiHeart,
  HiHome,
  HiMap,
  HiMenuAlt3,
  HiShoppingCart,
  HiUserGroup,
} from "react-icons/hi";
import { MdDashboard, MdNotificationAdd } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import logo from "../../assets/Logo-Ic.png";
import useScreenSize from "../../utils/useScreenSize";
import Inventory from "../pages/Inventory";
import DashboardHome from "./DashboardHome";
import Donors from "./Donors";
import Outreach from "./Outreach";
import Students from "./Students";

const Dashboard = () => {
  const [open, setOpen] = useState(true);
  const [selectedtab, setSelectedTab] = useState("Dashboard");
  const { width } = useScreenSize();
  const SidebarMenus = [
    { name: "Dashboard", icon: MdDashboard, component: <DashboardHome /> },
    { name: "Home", icon: HiHome, component: <div>Dashbaord</div> },
    { name: "Student", icon: HiUserGroup, component: <Students /> },
    { name: "Donors", icon: TbReportAnalytics, component: <Donors /> },
    { name: "Outreach", icon: HiMap, component: <Outreach /> },
    { name: "Inventory", icon: HiShoppingCart, component: <Inventory /> },
    { name: "Saved", icon: HiHeart, margin: true, component: <div>Saved</div> },
    { name: "Setting", icon: HiCog, component: <div>Setting</div> },
  ];
  console.log(selectedtab);
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
            className={`cursor-pointer h-10 w-10 text-black absolute p-2 bg-white rounded-full border-2 border-sky-500 ${
              width <= 768
                ? !open && width <= 768
                  ? "translate-x-16 transition-transform duration-300"
                  : "translate-x-5 transition-transform duration-300"
                : ""
            }`}
            onClick={() => setOpen(!open)}
          />
        </div>

        <div className=" lex flex-col gap-4  h-full  px-8 md:px-0">
          <h2
            className={`mb-14 text-2xl -mt-2 text-start ml-2 text-gray-900 font-semibold transition-all duration-500  ${
              open ? "" : "-translate-x-56"
            }`}
          >
            Mealmatters
          </h2>
          {SidebarMenus?.map((menu, i) => (
            <section
              key={menu.name}
              onClick={() => {
                setSelectedTab(menu.name);
                width <= 768 ? setOpen(false) : null;
              }}
              className={` ${
                menu?.margin && "mt-24"
              } group flex items-center text-sm cursor-pointer  gap-3.5 font-medium p-2 hover:bg-teal-100 text-black transition-all duration-300 rounded-md ${
                !open && width <= 768
                  ? "-translate-x-16 transition-transform duration-300"
                  : "transition-transform duration-300"
              }`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
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
                }  absolute left-48 bg-teal-50 font-semibold whitespace-pre text-gray-900 rounded-sm drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </section>
          ))}
        </div>
      </div>
      <div className=" h-full w-full ">
        <nav className="h-16 w-full flex justify-end gap-2 items-center px-8">
          <MdNotificationAdd className="h-10 w-10 p-2 bg-teal-100/50 hover:bg-teal-100 rounded-lg transition-colors" />
          <div className="h-fit py-px pl-6 flex justify-center items-center gap-2 bg-teal-400 rounded-lg">
            <h2 className="font-semibold pr-3 text-white">Hello! {"Admin"}</h2>
            <img
              src={logo}
              alt="logo"
              className="h-10 w-10 p-1 scale-125 border-[1px] border-teal-400  outline outline-4 outline-white  rounded-full translate-x-1.5 bg-white"
            />
          </div>
        </nav>
        <section className="h-full w-full bg-gradient-to-br from-[#cdffd8] to-[#94b9ff] md:rounded-tl-xl overflow-y-auto">
          {SidebarMenus.map((menu) => {
            if (menu.name === selectedtab) {
              return menu.component;
            }
          })}
        </section>
      </div>
    </section>
  );
};

export default Dashboard;
