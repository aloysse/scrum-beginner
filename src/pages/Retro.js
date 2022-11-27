import React, { useState } from "react";
import ProgressBar from "../components/ProgressBar";
import arrowLeft from "../assets/img/arrow-left.svg";
import boy2 from "../assets/img/boy2.svg";
import { Progress } from "../context/ProgressContext";

const Retros = ({ rate }) => {
  const { gotoPage } = Progress();
  let totalScoreSum = 20;
  const [displayAlert, setDisplayAlert] = useState(false);
  const [itemObj, setItemObj] = useState({
    goodJobItem: [
      {
        content: "這次我幫了很多人救火耶！",
        isChose: false,
        id: "1",
        isAnswer: false,
      },
      {
        content: "大家在開發上都會互相Cover，讓任務都有準時在時間內完成。",
        isChose: false,
        id: "2",
        isAnswer: true,
      },
    ],
    canBetterItem: [
      {
        content: "可以紀錄這次的開發時間，讓預估團隊點數可以更精準。",
        isChose: false,
        id: "3",
        isAnswer: true,
      },
      {
        content: "開發時間預估不準確，請後端下次改進，避免Delay到我。",
        isChose: false,
        id: "4",
        isAnswer: false,
      },
    ],
  });

  const chooseCard = (itemGroup, id) => {
    // 拷貝新的items (來自state)
    const newItemObj = { ...itemObj };

    // 取得點擊的項目並切換isChose狀態
    newItemObj[itemGroup].forEach((item) => {
      if (item.id === id) {
        item.isChose = true;
      } else {
        item.isChose = false;
      }
    });

    // 更新items
    setItemObj(newItemObj);
  };

  // 卡片元件
  const Card = ({ content, id, itemGroup, isChose }) => (
    <div
      onClick={() => chooseCard(itemGroup, id)}
      className={`mr-5 p-1 border-2  ${
        isChose ? "border-P1" : "border-transparent"
      } rounded-2xl cursor-pointer`}
    >
      <div className="bg-cardContent py-12 px-8 w-[190px] h-[253px]">
        <p>{content}</p>
      </div>
    </div>
  );

  // 確認答案
  const confirm = () => {
    let goodJobCorrect = false;
    itemObj.goodJobItem.forEach((item) => {
      if (item.isAnswer && item.isChose) {
        goodJobCorrect = true;
      }
    });
    let canBetterCorrect = false;
    itemObj.canBetterItem.forEach((item) => {
      if (item.isAnswer && item.isChose) {
        canBetterCorrect = true;
      }
    });
    if (goodJobCorrect && canBetterCorrect) {
      gotoPage("End");
    } else {
      setDisplayAlert(true);
    }
  };

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
            <img src={boy2} alt="" />
            <p className="m-5  whitespace-nowrap">Allen</p>
            <div className="border rounded-2xl border-P2 py-3 px-6">
              <p className="mb-3">
                哇賽新來的，你真的很幸運，今天剛好是開發 B 組的
                Retro，你也見識一下，看看 Retro
                都該做些什麼吧~我們會在會議裡請團隊成員提出哪些是做得好的地方、哪些可以繼續改善的地方？並記錄再
                Confluence 中。
              </p>
              <p>
                請選擇適合 Retro的回饋卡！思考看看哪一張牌是『正面表述』呢？
              </p>
            </div>
          </div>
        </div>
        <div className="flex text-white">
          <div className="mr-20">
            <h3 className="text-center mb-10">做得好的地方</h3>
            <div className="flex">
              {itemObj.goodJobItem.map((item, index) => (
                <Card
                  content={item.content}
                  key={index}
                  id={item.id}
                  isChose={item.isChose}
                  itemGroup={"goodJobItem"}
                />
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-center mb-10">有哪些可以做的更好</h3>
            <div className="flex">
              {itemObj.canBetterItem.map((item, index) => (
                <Card
                  content={item.content}
                  key={index}
                  id={item.id}
                  isChose={item.isChose}
                  itemGroup={"canBetterItem"}
                />
              ))}
            </div>
          </div>
        </div>
        <button
          onClick={confirm}
          className="border-btn hover:bg-btn hover:text-[#333333] bg-cover tracking-widest text-P1 py-1 px-8 text-xl"
        >
          我想我瞭解了
        </button>
      </div>
      {/* alert */}
      <div
        className="absolute w-full h-full top-0 bg-blackTrans items-center justify-center "
        style={{ display: displayAlert ? "flex" : "none" }}
      >
        <div className="text-white text-center bg-alertBg py-20 px-24 bg-center border-alert">
          <p className="mb-8">再想一下，哪些是符合『正面表述』的回饋？</p>
          <button
            onClick={() => setDisplayAlert(false)}
            className="border-btn hover:bg-btn hover:text-[#333333] bg-cover tracking-widest text-P1 py-1 px-8 "
          >
            再試試看
          </button>
        </div>
      </div>
    </div>
  );
};

export default Retros;
