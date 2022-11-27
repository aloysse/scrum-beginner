import React from "react";
import ProgressBar from "../components/ProgressBar";
import { Progress } from "../context/ProgressContext";

const Intro = ({ rate }) => {
  const { gotoPage } = Progress();
  return (
    <div className="bg-main bg-center bg-cover h-full p-3 text-center">
      <div className="border-main h-full pt-20 pb-16 px-10 flex flex-col justify-between items-center overflow-y-scroll">
        <div>
          <h1 className="text-P1 text-6xl text-center font-thin mb-6">Hello</h1>
          <div className="text-P1 flex items-center justify-center">
            <ProgressBar rate={rate} />
          </div>
        </div>
        <div className="flex leading-8 justify-center max-w-[800px] mb-5 text-left text-xl text-white">
          <p>
            歡迎加入六角資訊，
            <br />
            在正式加入專案開發之前，
            <br />
            需要請你先了解 Scrum 的流程與精神！
            <br />
            請接受挑戰任務，成功通過 Scrum 新手村的挑戰任務吧！
          </p>
        </div>
        <div>
          <button
            onClick={() => gotoPage("Start")}
            className="border-btn hover:bg-btn hover:text-[#333333] bg-cover tracking-widest text-P1 py-1 px-8 text-xl"
          >
            接受挑戰
          </button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
