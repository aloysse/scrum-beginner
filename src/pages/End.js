import React from "react";
import ProgressBar from "../components/ProgressBar";
import { Progress } from "../context/ProgressContext";

const End = ({ rate }) => {
  const { gotoPage } = Progress();
  return (
    <div className="bg-main bg-center bg-cover h-full p-3 text-center">
      <div className="border-main h-full pt-20 pb-16 px-10 flex flex-col justify-center items-center">
        <div>
          <h1 className="text-P1 text-6xl text-center font-thin mb-6">
            Congratulations
          </h1>
          <div className="text-P1 flex items-center justify-center">
            <ProgressBar rate={rate} />
          </div>
        </div>
        <div className="flex leading-8 justify-center mt-10 text-xl text-white mb-10">
          <p>
            恭喜通過 Scrum新手村！
            <br />
            正式加入六角資訊的開發 A 組
          </p>
        </div>
        <button
          onClick={() => gotoPage("")}
          className="border-btn hover:bg-btn hover:text-[#333333] bg-cover tracking-widest text-P1 py-1 px-8 text-xl"
        >
          再挑戰一次
        </button>
      </div>
    </div>
  );
};

export default End;
