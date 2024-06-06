import React, { useState } from "react";

const UserInputs = ({ OnChange, values }) => {
  return (
    <div className="flex justify-center items-center text-center ">
      <div className=" flex flex-col h-auto w-[18rem] bg-gradient-to-r from-purple-400 to-fuchsia-300 rounded-lg  mb-5 xs:w-[20rem] sm:w-[22rem] md:w-[32rem]     ">
        <div className=" flex  flex-col md:justify-around md:flex-row   ">
          <div className=" flex flex-col justify-center items-center  md:mb-5">
            <label className=" text-lg font-medium m-3   ">
              Initial Investment
            </label>
            <input
              type="number"
              placeholder="initial investment"
              className=" h-[2.5rem] w-[14rem] rounded-md outline-purple-600  p-2"
              value={values.InitialInvestment}
              onChange={(e) => OnChange("InitialInvestment", e.target.value)}
            />
            <label className=" text-lg font-medium m-3   ">
              Annual Investment
            </label>
            <input
              type="number"
              placeholder="annual investment"
              className=" h-[2.5rem] w-[14rem] rounded-md outline-purple-600  p-2"
              value={values.AnnualInvestment}
              onChange={(e) => OnChange("AnnualInvestment", e.target.value)}
            />
          </div>
          <div className=" flex flex-col justify-center items-center mb-5  ">
            <label className=" text-lg font-medium m-3   ">
              Expected Return
            </label>
            <input
              type="number"
              placeholder="expected return"
              className="h-[2.5rem] w-[14rem] rounded-md outline-purple-600 p-2"
              value={values.ExpectedReturn} // Corrected typo here
              onChange={(e) => OnChange("ExpectedReturn", e.target.value)} // Corrected typo here
            />

            <label className=" text-lg font-medium m-3   ">Duration</label>
            <input
              type="number"
              placeholder="duration"
              className=" h-[2.5rem] w-[14rem] rounded-md outline-purple-600  p-2"
              value={values.Duration}
              onChange={(e) => OnChange("Duration", e.target.value)}
            />
          </div>
        </div>

        {/* <div className=" flex justify-center  ">
          <button className=" text-white font-semibold text-lg    h-[8vh] w-[28vw]  rounded-md  bg-fuchsia-500 mb-5 md:w-[10rem]">
            Calculate
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default UserInputs;
