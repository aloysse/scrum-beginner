import React from "react";
import ProgressBar from "../components/ProgressBar";
import arrowLeft from "../assets/img/arrow-left.svg";
import confluenceLogo from "../assets/img/Concluence-logo.svg";
import { Progress } from "../context/ProgressContext";

const SprintList = ({ rate }) => {
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
        </div>
        <div className="text-white">
          <div className="flex items-center mb-10">
            <div className="bg-P3 border border-P1 mr-6 py-3 px-8 min-w-[220px] text-center rounded-xl">
              <h3>
                每日站立會議
                <br />
                Daily Scrum
              </h3>
            </div>
            <div>
              <p>
                每天都要進行的會議，以 15 分鐘為限制 ：
                昨天為團隊的短衝目標（Sprint Goal）做了那些進度
                今天我會如何準備來幫助團隊達到短衝目標
                過程中有遇到什麼問題、難題 透過團隊分享，追蹤大家的工作狀況。
              </p>
            </div>
          </div>
          <div className="flex items-center mb-10">
            <div className="bg-P3 border border-P1 mr-6 py-3 px-8 min-w-[220px] text-center rounded-xl">
              <h3>
                短衝檢視會議
                <br />
                Sprint Review
              </h3>
            </div>
            <div>
              <p>
                向利害關係人（Stakeholder）展示工作結果，蒐集使用回饋，分享市場反應，並一起討論下一步工作方向。
                在短衝檢視會議過程，會取得使用者或利害關係人對於本次短衝增量的回饋數據或意見，討論哪些想法值得納入至產品待辦清單去實踐。
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="bg-P3 border border-P1 mr-6 py-3 px-8 min-w-[220px] text-center rounded-xl">
              <h3>
                短衝自省會議
                <br />
                Sprint Retrospective
              </h3>
            </div>
            <div>
              <p>
                團隊在自省會議裡，會共同回顧該短衝歷程發生的事情、好的地方及可以改進的地方。
                檢討如何維持已有的成功經驗、優化工作流程，讓團隊運作愈來愈進步。
                推薦工具：
              </p>
            </div>
          </div>
          <div className="text-center mt-10">
            推薦工具：
            <img className="inline-block" src={confluenceLogo} alt="" />
          </div>
        </div>
        <button
          onClick={() => gotoPage("SprintFlow")}
          className="border-btn hover:bg-btn hover:text-[#333333] bg-cover tracking-widest text-P1 py-1 px-8 text-xl"
        >
          我瞭解了
        </button>
      </div>
    </div>
  );
};

export default SprintList;
