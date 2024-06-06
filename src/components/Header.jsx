import React from "react";
import Logo from "../assets/investment-logo.jpg";

const Header = () => {
  return (
    <div className="  flex flex-col justify-center text-center items-center   ">
      <img
        src={Logo}
        alt="investment-logo"
        srcSet=" "
        loading="lazy"
        className="jusfiy-center items-center text-center   sm:h-[25rem] sm:w-[25rem]   "
      />
      <h1 className=" text-black font-semibold  text-xl sm:text-2xl  decoration-wavy ">
        Investment Calculator
      </h1>
    </div>
  );
};

export default Header;
