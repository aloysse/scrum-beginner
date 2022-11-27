import React, { useState } from "react";
import ProgressBar from "../components/ProgressBar";
import arrowLeft from "../assets/img/arrow-left.svg";
import girl1 from "../assets/img/girl1.svg";
import boy1 from "../assets/img/boy1.svg";
import boy2 from "../assets/img/boy2.svg";
import { Progress } from "../context/ProgressContext";
import { gsap } from "gsap";

const Teams = ({ rate }) => {
  const { gotoPage } = Progress();
  const [goNextPage, setGoNextPage] = useState(false);

  const timeline = gsap.timeline();

  const animation = () => {
    timeline
      .to("#tina", 0.8, { y: -50, opacity: 0, ease: "power3.out" })
      .to("#jason", 0.8, { y: -50, opacity: 0, ease: "power3.out" }, "<")
      .to("#allen", 0.8, { opacity: 0, display: "flex", delay: -0.3 })
      .fromTo(
        "#allen",
        0.8,
        { opacity: 0, y: -150 },
        { opacity: 1, y: -200, ease: "power3.out" },
        "<"
      );
    setGoNextPage(true);
  };
  return (
    <div className="bg-secondary bg-center bg-cover h-full p-3">
      <div className="border-main h-full pt-20 pb-16 px-10 flex flex-col justify-between items-center">
        <div
          onClick={() => gotoPage("Backlog")}
          className="absolute cursor-pointer top-[50px] flex justify-center items-center w-12 h-12 left-[50px] rounded-full border-P1 border-2"
        >
          <img className="w-[20%] -translate-x-px" src={arrowLeft} alt="" />
        </div>
        <div>
          <div className="text-P1 flex items-center justify-center">
            <ProgressBar rate={rate} />
          </div>
        </div>
        <div>
          <div id="tina" className="flex items-center text-white mb-10">
            <img src={girl1} alt="" />
            <p className="m-5 whitespace-nowrap">Tina</p>
            <div className="border rounded-2xl border-P2 py-3 px-6">
              <p>
                產品待辦清單好了之後，我們來召集 Scrum Master
                開發團隊共同召開短衝規劃會議 (Sprint
                Planning)。短衝即是一個迭代，具有固定時間限制，我們會在這個會議中，決定要完哪些工作事項來達到商業需求，列出短衝待辦清單
                (Sprint Backlog)，並由開發團隊在接下來的產品開發期裡執行。
              </p>
            </div>
          </div>
          <div id="jason" className="flex items-center text-white mb-10">
            <img src={boy1} alt="" />
            <p className="m-5 whitespace-nowrap">Jason</p>
            <div className="border rounded-2xl border-P2 py-3 px-6">
              <p className="mb-3">
                嗨嗨你是新來的前端吧！我是這次的 Scrum Master
                Jason，我的工作主要是促成開發團隊成員協作、引導團隊進行自省會議，提升成員對
                Scrum 的瞭解。
              </p>
              <p>
                Allen 是我們開發團隊的成員唷！目前我們團隊一次 Sprint
                是兩週的時間，依照我的觀察，目前團隊可負擔的點數 (Sprint Point)
                大約是 20 點左右。
              </p>
            </div>
          </div>
          <div id="allen" className="items-center text-white hidden">
            <img src={boy2} alt="" />
            <p className="m-5 whitespace-nowrap">Allen</p>
            <div className="border rounded-2xl border-P2 py-3 px-6">
              <p className="mb-3">
                新來的，你應該不知道點數是什麼意思吧！哈哈~我來跟你介紹一下吧～！
                Sprint Point
                目的是為了衡量速度，是用大概花費的時間預估出的相對點數。
              </p>
              <p>
                我這邊已經把剛剛討論好的點數標上去囉！你來練習把任務排到短衝待辦清單吧！By
                the way，我們平常管理任是使用 Jira
                這套軟體，你有時間記得先去註冊和熟悉唷！
              </p>
            </div>
          </div>
        </div>
        <button
          onClick={goNextPage ? () => gotoPage("Sprint") : () => animation()}
          className="border-btn hover:bg-btn hover:text-[#333333] bg-cover tracking-widest text-P1 py-1 px-8 text-xl"
        >
          {goNextPage ? "接受挑戰" : "好的請繼續說"}
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

export default Teams;
