import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="bg-transparent"> {/*bg-transparent*/}
        <div className="container mx-auto flex justify-between px-4 py-3">
          <img src="logo.png" alt="My Website Logo" className="w-10 h-10" />
          <ul className="flex space-x-36">
            <li>
              <a href="#" className="text-[#000000] hover:text-blue-700 hover:underline text-[1.25rem] font-[600]">
                Mission
              </a>
            </li>
            <li>
              <a href="#" className="text-[#000000] hover:text-blue-700 hover:underline text-[1.25rem] font-[600]">
                Donate
              </a>
            </li>
            <li>
              <a href="" className="text-[#000000] hover:text-blue-700 hover:underline text-[1.25rem] font-[600]">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-[#000000] hover:text-blue-700 hover:underline text-[1.25rem] font-[600]">
                Contact Us
              </a>
            </li>
            <li className="bg-[#ff914d] border-2 border-dotted rounded-full px-3 py-1 w-35">
                <a href="#" className="text-[#000000] hover:text-blue-700 text-[1.25rem] font-[600]">Login &gt;</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
