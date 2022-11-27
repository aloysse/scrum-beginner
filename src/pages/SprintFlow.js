import React from "react";
import ProgressBar from "../components/ProgressBar";
import arrowLeft from "../assets/img/arrow-left.svg";
import boy2 from "../assets/img/boy2.svg";
import flow from "../assets/img/flow.svg";

const SprintFlow = () => {
  return (
    <div className="bg-secondary bg-center bg-cover h-full p-3">
      <div class="border-main h-full pt-20 pb-16 px-10 flex flex-col justify-between items-center">
        <div className="absolute top-[50px] flex justify-center items-center w-12 h-12 left-[50px] rounded-full border-P1 border-2">
          <img className="w-[20%] -translate-x-px" src={arrowLeft} alt="" />
        </div>
        <div>
          <div className="text-P1 flex items-center justify-center">
            <div>01</div>
            <ProgressBar />
            <div>09</div>
          </div>
          <div className="flex items-center text-white">
            <img src={boy2} alt="" />
            <p className="m-5 whitespace-nowrap">Allen</p>
            <div>
              <div className="border rounded-2xl border-P2 py-3 px-6 mb-6">
                <p>
                  那你來試試看，在這經典的 Scrum
                  流程圖中，這些流程分別代表哪一個會議呢？
                  請你試著把左下方三個方塊，拖拉至正確的位置上。
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative text-white text-center">
          <img className="w-[800px] mt-8" src={flow} alt="" />
          <div className="rounded-xl top-0 left-52 absolute border w-[200px] h-[80px] border-P1 bg-P3 py-3 px-6">
            每日站立會議
            <br />
            Daily Scrum
          </div>
          <div className="rounded-xl absolute right-10 top-16 border w-[200px] h-[80px] border-P1 bg-P3 py-3 px-6">
            每日站立會議
            <br />
            Daily Scrum
          </div>
          <div className="rounded-xl absolute right-10 top-48 border w-[200px] h-[80px] border-P1 bg-P3 py-3 px-6">
            每日站立會議
            <br />
            Daily Scrum
          </div>
          <div className="rounded-xl bottom-0 border-dashed right-80 absolute border w-[200px] h-[80px] border-P1 bg-P3 py-3 px-6"></div>
          <div className="rounded-xl bottom-0 border-dashed right-20 absolute border w-[200px] h-[80px] border-P1 bg-P3 py-3 px-6"></div>
        </div>
        <button className="border-btn hover:bg-btn hover:text-[#333333] bg-cover tracking-widest text-P1 py-1 px-8 text-xl">
          完成了
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

export default SprintFlow;
