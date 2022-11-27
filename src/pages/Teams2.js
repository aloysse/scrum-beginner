import React from "react";
import ProgressBar from "../components/ProgressBar";
import arrowLeft from "../assets/img/arrow-left.svg";
import boy2 from "../assets/img/boy2.svg";
import { Progress } from "../context/ProgressContext";

const Teams2 = ({ rate }) => {
  const { gotoPage } = Progress();
  return (
    <div className="bg-secondary bg-center bg-cover h-full p-3">
      <div className="border-main h-full pt-20 pb-16 px-10 flex flex-col justify-between items-center">
        <div
          onClick={() => gotoPage("Sprint")}
          className="absolute cursor-pointer top-[50px] flex justify-center items-center w-12 h-12 left-[50px] rounded-full border-P1 border-2"
        >
          <img className="w-[20%] -translate-x-px" src={arrowLeft} alt="" />
        </div>
        <div>
          <div className="text-P1 flex items-center justify-center">
            <ProgressBar rate={rate} />
          </div>
        </div>
        <div className="max-w-[900px]">
          <div className="flex items-center text-white">
            <img src={boy2} alt="" />
            <p className="m-5 whitespace-nowrap">Allen</p>
            <div>
              <div className="border rounded-2xl border-P2 py-3 px-6 mb-6">
                <p className="mb-3">
                  等等等等等，你應該還不知道什麼是 Sprint 吧？
                  讓我先為你介紹一下～ 仔細聽好唷，等等會考考你！
                </p>
              </div>
              <div className="border rounded-2xl border-P2 py-3 px-6">
                <p>
                  Sprint 是一個短衝，如同前面敏捷教練所提到的，一次 sprint 一次
                  sprint 週期為 2
                  周。開發團隊會在這期間執行開發。在這段期間內，開發團隊舉辦每日站立會議
                  (Daily Scrum)，追蹤成員間的工作狀況。除了每日站立會議，在
                  Sprint 的結束也會包含短衝檢視會議 (Sprint
                  Review)、短衝自省會議 (Sprint Retrospective)。
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={() => gotoPage("SprintList")}
          className="border-btn hover:bg-btn hover:text-[#333333] bg-cover tracking-widest text-P1 py-1 px-8 text-xl"
        >
          好的請繼續說
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

export default Teams2;
