import React from "react";
import hero from "../assets/img/hero.svg";
import arrowLeft from "../assets/img/arrow-left.svg";
import ProgressBar from "../components/ProgressBar";

const Start = () => {
  return (
    <div className="bg-secondary bg-center bg-cover h-full p-3 text-center">
      <div class="border-main h-full pt-20 pb-16 px-10 flex flex-col justify-between items-center">
        <div className="absolute top-[50px] flex justify-center items-center w-12 h-12 left-[50px] rounded-full border-P1 border-2">
          <img className="w-[20%] -translate-x-px" src={arrowLeft} alt="" />
        </div>
        <div>
          <h1 className="text-P1 text-6xl text-center font-thin mb-6">Hello</h1>
          <div className="text-P1 flex items-center justify-center">
            <div>01</div>
            <ProgressBar />
            <div>09</div>
          </div>
        </div>
        <div className="flex leading-6 justify-center max-w-[800px] items-center mb-5 text-left text-md text-white">
          <img className="w-[45%] mr-6" src={hero} alt="" />
          <div>
            <p className="mb-3">
              我是資訊，開發A組的PO，Tina。PO也就是產品負責人 (Product
              Owner)。產品負責人會負責評估產品待辦清單的價值與重要性，依序排列要執行的優先順序，對齊產品目標。最後排出產品待辦清單
              (Product Backlog) 唷！
            </p>
            <p>
              剛好我最近手邊有一個『人才招募系統』的案子，我才剛列出了『產品需求清單』。既然你都來了，來試試看調整產品優先度，排出產品待辦清單吧！
            </p>
          </div>
        </div>
        <div>
          <button className="border-btn hover:bg-btn hover:text-[#333333] bg-cover tracking-widest text-P1 py-1 px-8 text-xl">
            接受挑戰
          </button>
        </div>
      </div>
    </div>
  );
};

export default Start;
