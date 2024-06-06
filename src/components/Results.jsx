import React from "react";
import { CalcualteFutureValue, formatter } from "../utils/Investment";

const Results = ({ values }) => {
  const resultData = CalcualteFutureValue(values);
  const initialInvestment =
    resultData[0].valueEndOfYear -
    resultData[0].interest -
    resultData[0].annualInvestment;
  console.log(resultData);
  return (
    <div className=" m-3 flex flex-col justify-center items-center mb-14">
      <table className=" table-auto  text-sm text-left rtl:text-right text-black dark:text-black font-medium mb-10  ">
        <thead className="text-xs text-white uppercase bg-gray-50 dark:bg-gray-700 dark:text-white ">
          <tr>
            <th scope="col" className=" md:px-6 md:py-3">
              Year
            </th>
            <th scope="col" className=" md:px-6 md:py-3">
              Investment Value
            </th>
            <th scope="col" className="  md:px-6 md:py-3">
              Interest Amount (Year )
            </th>
            <th scope="col" className="  md:px-6 md:py-3">
              Total Interest
            </th>
            <th scope="col" className=" md:px-6 md:py-3">
              Total Invested Amount
            </th>
          </tr>
        </thead>
        <tbody className=" text-center ">
          {resultData.map((value) => {
            const totalInterest =
              value.valueEndOfYear -
              value.annualInvestment * value.year -
              initialInvestment;
            const totalAmountInvested = value.valueEndOfYear - totalInterest;
            return (
              <tr key={value.year}>
                <td className=" m-4">{value.year}</td>
                <td>{formatter.format(value.valueEndOfYear)}</td>
                <td>{formatter.format(value.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAmountInvested)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Results;
