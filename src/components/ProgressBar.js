import React from "react";

const ProgressBar = ({ rate }) => {
  let percentage = Math.floor((rate / 9) * 100).toString();
  return (
    <>
      <p>
        0 <span className=" text-xs">%</span>
      </p>
      <div className="w-[480px] bg-barContainer mx-3">
        <div
          className="h-[8px] bg-P1"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <p>
        100 <span className=" text-xs">%</span>
      </p>
    </>
  );
};

export default ProgressBar;
