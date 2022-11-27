import React from "react";
import ProgressBar from "../components/ProgressBar";
import arrowLeft from "../assets/img/arrow-left.svg";
import girl1 from "../assets/img/girl1.svg";
import jiraLogo from "../assets/img/Jira-logo.svg";
import { Progress } from "../context/ProgressContext";

const Backlog = ({ rate }) => {
  const { gotoPage } = Progress();
  return (
    <div className="bg-secondary bg-center bg-cover h-full p-3">
      <div className="border-main h-full pt-20 pb-16 px-10 flex flex-col justify-between items-center">
        <div className="absolute top-[50px] flex justify-center items-center w-12 h-12 left-[50px] rounded-full border-P1 border-2">
          <img className="w-[20%] -translate-x-px" src={arrowLeft} alt="" />
        </div>
        <div>
          <div className="text-P1 flex items-center justify-center">
            <ProgressBar rate={rate} />
          </div>
          <div className="flex items-center text-white">
            <img src={girl1} alt="" />
            <p className="m-5  whitespace-nowrap">小敏</p>
            <div className="flex border rounded-2xl border-P2 py-3 px-6 items-center">
              <p className=" mr-16">
                請試著把需求放到產品待辦清單，並調整待辦的優先度順序。
                <br />
                我們公司也推薦使用 Jira 來做任務的管理呢！
              </p>
              <img className="h-12" src={jiraLogo} alt="" />
            </div>
          </div>
        </div>
        <div className="flex items-end">
          <div className="mr-14">
            <div className="flex">
              <div className="bg-placeBg relative mr-5 w-[190px] h-[253px]">
                <div className="bg-cardContent py-12 px-8 w-[190px] h-[253px] absolute">
                  <p className="text-white">會員系統</p>
                </div>
              </div>
              <div className="bg-placeBg relative mr-5 w-[190px] h-[253px]">
                <div className="bg-cardContent py-12 px-8 w-[190px] h-[253px] absolute">
                  <p className="text-white">會員系統</p>
                </div>
              </div>
              <div className="bg-placeBg relative mr-5 w-[190px] h-[253px]">
                <div className="bg-cardContent py-12 px-8 w-[190px] h-[253px] absolute">
                  <p className="text-white">會員系統</p>
                </div>
              </div>
              <div className="bg-placeBg relative w-[190px] h-[253px]">
                <div className="bg-cardContent py-12 px-8 w-[190px] h-[253px] absolute">
                  <p className="text-white">會員系統</p>
                </div>
              </div>
            </div>
            <hr className="my-8 border-P1" />
            <div className="flex">
              <div className="bg-placeBg relative mr-5 w-[190px] h-[253px]"></div>
              <div className="bg-placeBg relative mr-5 w-[190px] h-[253px]"></div>
              <div className="bg-placeBg relative mr-5 w-[190px] h-[253px]"></div>
              <div className="bg-placeBg relative w-[190px] h-[253px]"></div>
            </div>
          </div>
          <button
            onClick={() => gotoPage("Teams")}
            className="border-btn hover:bg-btn hover:text-[#333333] bg-cover tracking-widest text-P1 py-1 px-8 text-xl"
          >
            完成
          </button>
        </div>
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

export default Backlog;
