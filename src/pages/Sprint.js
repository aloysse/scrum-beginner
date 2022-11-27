import React from "react";
import ProgressBar from "../components/ProgressBar";
import arrowLeft from "../assets/img/arrow-left.svg";
import girl1 from "../assets/img/girl1.svg";
import jiraLogo from "../assets/img/Jira-logo.svg";

const Sprint = () => {
  return (
    <div className="bg-secondary bg-center bg-cover h-full p-3">
      <div class="border-main h-full pt-20 pb-16 px-10 flex flex-col justify-between items-center">
        <div className="absolute top-[50px] flex justify-center items-center w-12 h-12 left-[50px] rounded-full border-P1 border-2">
          <img className="w-[20%] -translate-x-px" src={arrowLeft} alt="" />
        </div>
        <div className="mb-10">
          <div className="text-P1 flex items-center justify-center">
            <div>01</div>
            <ProgressBar />
            <div>09</div>
          </div>
        </div>
        <div className="text-white text-left">
          <div className="mb-6">
            <h2 className="mb-2 tracking-widest">產品待辦清單（共 34 點）</h2>
            <p className="text-[#BDBDBD] text-sm">
              把待辦清單在點數限制內移動到短衝代辦清單
            </p>
          </div>
          <div className="flex">
            <div className="bg-placeBg relative mr-5 w-[190px] h-[253px]">
              <div className="bg-cardContent py-5 px-8 w-[190px] h-[253px] absolute">
                <div className="bg-cardStar mb-4 bg-contain bg-no-repeat bg-center flex items-center justify-center text-[#333333] w-full h-12">
                  13
                </div>
                <p className="text-white">會員系統</p>
              </div>
            </div>
            <div className="bg-placeBg relative mr-5 w-[190px] h-[253px]">
              <div className="bg-cardContent py-5 px-8 w-[190px] h-[253px] absolute">
                <div className="bg-cardStar mb-4 bg-contain bg-no-repeat bg-center flex items-center justify-center text-[#333333] w-full h-12">
                  13
                </div>
                <p className="text-white">會員系統</p>
              </div>
            </div>
            <div className="bg-placeBg relative mr-5 w-[190px] h-[253px]">
              <div className="bg-cardContent py-5 px-8 w-[190px] h-[253px] absolute">
                <div className="bg-cardStar mb-4 bg-contain bg-no-repeat bg-center flex items-center justify-center text-[#333333] w-full h-12">
                  13
                </div>
                <p className="text-white">會員系統</p>
              </div>
            </div>
            <div className="bg-placeBg relative w-[190px] h-[253px]">
              <div className="bg-cardContent py-5 px-8 w-[190px] h-[253px] absolute">
                <div className="bg-cardStar mb-4 bg-contain bg-no-repeat bg-center flex items-center justify-center text-[#333333] w-full h-12">
                  13
                </div>
                <p className="text-white">會員系統</p>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-8 border-P1 w-full" />

        <div className="text-left text-white mb-10">
          <div className="mb-6">
            <h2 className="tracking-widest">
              開發A組的短衝待辦清單（0 點 / 20點）
            </h2>
          </div>
          <div className="flex">
            <div className="bg-placeBg relative mr-5 w-[190px] h-[253px]"></div>
            <div className="bg-placeBg relative mr-5 w-[190px] h-[253px]"></div>
            <div className="bg-placeBg relative mr-5 w-[190px] h-[253px]"></div>
            <div className="bg-placeBg relative w-[190px] h-[253px]"></div>
          </div>
        </div>
        <button className="border-btn hover:bg-btn hover:text-[#333333] bg-cover tracking-widest text-P1 py-1 px-8 text-xl">
          準備好了!開始Sprint
        </button>
      </div>
      {/* alert */}
      <div className="absolute w-full h-full top-0 bg-blackTrans flex items-center justify-center hidden">
        <div className="text-white text-center bg-alertBg py-20 px-24 bg-center border-alert">
          <p className="mb-8">排序錯誤，請再調整順序</p>
          <button className="border-btn hover:bg-btn hover:text-[#333333] bg-cover tracking-widest text-P1 py-1 px-8 ">
            確認
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sprint;
