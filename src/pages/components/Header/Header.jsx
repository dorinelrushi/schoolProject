import React, { useState } from "react";
import Image from "next/image";
import Users from "./../../../../public/photo/users.webp";
import { IoIosLogOut } from "react-icons/io";
import Link from "next/link";
import Logo from "./../../../../public/photo/Logo.png";
function Header() {
  const [showAccountInfo, setShowAccountInfo] = useState(false);

  const handleProfileMouseEnter = () => {
    setShowAccountInfo(true);
  };

  const handleProfileMouseLeave = () => {
    if (!showAccountInfo) {
      setShowAccountInfo(false);
    }
  };

  const handleAccountInfoMouseEnter = () => {
    setShowAccountInfo(true);
  };

  const handleAccountInfoMouseLeave = () => {
    setShowAccountInfo(false);
  };

  const handleAccountInfoClick = () => {
    setShowAccountInfo(!showAccountInfo);
  };

  return (
    <div className="bg-[#ffffff]">
      <div className="w-[98%] p-[20px] flex m-auto justify-between items-center">
        <div className="text-[25px] ">
          <Link href={"/"}>
            <Image
              src={Logo}
              alt="demo"
              width={100}
              className="logo object-cover"
            />
          </Link>
        </div>
        <div className="flex gap-[18px]">
          {/* Profile Button */}
          <div
            className="relative"
            onMouseEnter={handleProfileMouseEnter}
            onMouseLeave={handleProfileMouseLeave}
          >
            <div className="">
              <button className="flex text-[#151515] justify-center gap-2 cursor-pointer items-center w-[147px] rounded-[5px] h-[50px] hover:bg-[#f4f4f6]">
                <Image
                  src={Users}
                  alt="users"
                  width={50}
                  height={50}
                  className="rounded-[50px] w-[39px] h-[39px] object-cover border-[2px] border-[#bdbdbd]"
                />
                <span className="text-[16px]">@username </span>
              </button>
              {/* Account Information Dropdown */}
              {showAccountInfo && (
                <div
                  className="absolute z-[25] w-[179px] mt-[10px] h-[40px] shadow-lg bg-[#ffffff] rounded-[5px] flex justify-center items-center"
                  onMouseEnter={handleAccountInfoMouseEnter}
                  onMouseLeave={handleAccountInfoMouseLeave}
                >
                  <Link
                    href="/AccountInformation"
                    onClick={handleAccountInfoClick}
                  >
                    Account Information
                  </Link>
                </div>
              )}
            </div>
          </div>
          {/* Logout Button */}
          <div className="flex items-center justify-center">
            <button className="flex items-center w-[120px] rounded-[5px] h-[50px] justify-center gap-2 bg-[#ff5c81] text-[white] hover:bg-[#e93c64]">
              <IoIosLogOut />
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
