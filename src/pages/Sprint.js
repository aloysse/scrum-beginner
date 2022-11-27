import React, { useState } from "react";
import ProgressBar from "../components/ProgressBar";
import arrowLeft from "../assets/img/arrow-left.svg";
import { Progress } from "../context/ProgressContext";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { nanoid } from "nanoid";
import Card2 from "../components/Card2";

const Sprint = ({ rate }) => {
  const { gotoPage } = Progress();
  const [totalScoreSum, setTotalScoreSum] = useState(0);
  const [displayAlert, setDisplayAlert] = useState(false);

  //卡片元素
  const [itemObj, setItemObj] = useState({
    productBacklog: {
      items: [
        { content: "會員系統（登入、註冊、權限管理）", id: nanoid(), score: 8 },
        { content: "應徵者的線上履歷編輯器", id: nanoid(), score: 13 },
        {
          content: "前台職缺列表（職缺詳細內容、點選可發送應徵意願）",
          id: nanoid(),
          score: 5,
        },
        {
          content: "後台職缺管理功能（資訊上架、下架、顯示應徵者資料）",
          id: nanoid(),
          score: 8,
        },
      ],
    },
    sprintList: {
      items: [],
    },
  });

  const onDragEnd = (event) => {
    const { source, destination } = event;

    if (!destination) {
      return;
    }

    // 拷貝新的items (來自state)
    let newItemObj = { ...itemObj };

    // splice(start, deleteCount, item )
    // 從source剪下被拖曳的元素
    const [remove] = newItemObj[source.droppableId].items.splice(
      source.index,
      1
    );

    // 在destination位置貼上被拖曳的元素
    newItemObj[destination.droppableId].items.splice(
      destination.index,
      0,
      remove
    );

    // set state新的 itemObj
    setItemObj(newItemObj);

    // 計算sprint內的分數總和
    const newTotalScoreSum = newItemObj.sprintList.items.reduce(
      (acc, val) => acc + val.score,
      0
    );
    setTotalScoreSum(newTotalScoreSum);
  };

  return (
    <div className="bg-secondary bg-center bg-cover h-full p-3">
      <div className="border-main h-full pt-20 pb-16 px-10 flex flex-col justify-between items-center">
        <div
          onClick={() => gotoPage("Teams")}
          className="absolute cursor-pointer top-[50px] flex justify-center items-center w-12 h-12 left-[50px] rounded-full border-P1 border-2"
        >
          <img className="w-[20%] -translate-x-px" src={arrowLeft} alt="" />
        </div>
        <div className="mb-10">
          <div className="text-P1 flex items-center justify-center">
            <ProgressBar rate={rate} />
          </div>
        </div>
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="text-white text-left">
            <div className="mb-6">
              <h2 className="mb-2 tracking-widest">產品待辦清單（共 34 點）</h2>
              <p className="text-[#BDBDBD] text-sm">
                把待辦清單在點數限制內移動到短衝代辦清單
              </p>
            </div>
            <Droppable droppableId="productBacklog" direction="horizontal">
              {(provided, snapshot) => (
                <div
                  className="grid grid-cols-4 gap-4 h-[253px] w-[810px]"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {itemObj.productBacklog.items.map((item, index) => (
                    <Card2 item={item} index={index} key={item.id} />
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>

          <hr className="my-8 border-P1 w-full" />

          <div className="text-left text-white mb-10">
            <div className="mb-6">
              <h2 className="tracking-widest">
                開發A組的短衝待辦清單（{" "}
                <span
                  className={`${
                    totalScoreSum > 20 ? " text-rose-500 font-bold" : "text-P1"
                  }`}
                >
                  {totalScoreSum}
                </span>{" "}
                點 / 20點）
              </h2>
            </div>
            <div className="flex">
              <Droppable droppableId="sprintList" direction="horizontal">
                {(provided, snapshot) => (
                  <div
                    className="bg-placeBg bg-repeat-space bg-contain grid grid-cols-4 gap-4 h-[253px] w-[810px]"
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    {itemObj.sprintList.items.map((item, index) => (
                      <Card2 item={item} index={index} key={item.id} />
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          </div>
        </DragDropContext>
        <div className="w-[200px]"></div>
        <button
          onClick={
            totalScoreSum > 20 || totalScoreSum === 0
              ? () => setDisplayAlert(true)
              : () => gotoPage("Teams2")
          }
          className="border-btn hover:bg-btn hover:text-[#333333] bg-cover tracking-widest text-P1 py-1 px-8 text-xl"
        >
          準備好了！開始Sprint
        </button>
      </div>
      {/* alert */}
      <div
        className="absolute w-full h-full top-0 bg-blackTrans items-center justify-center"
        style={{ display: displayAlert ? "flex" : "none" }}
      >
        <div className="text-white text-center bg-alertBg py-20 px-24 bg-center border-alert">
          <p className="mb-8">
            {totalScoreSum === 0
              ? "目前短衝待辦清單是空的喔！"
              : "點數超過囉！再確認一下"}
          </p>
          <button
            onClick={() => setDisplayAlert(false)}
            className="border-btn hover:bg-btn hover:text-[#333333] bg-cover tracking-widest text-P1 py-1 px-8 "
          >
            返回
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sprint;
