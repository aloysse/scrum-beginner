import React, { useState } from "react";
import ProgressBar from "../components/ProgressBar";
import arrowLeft from "../assets/img/arrow-left.svg";
import girl1 from "../assets/img/girl1.svg";
import jiraLogo from "../assets/img/Jira-logo.svg";
import { Progress } from "../context/ProgressContext";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { nanoid } from "nanoid";
import Card from "../components/Card";

const Backlog = ({ rate }) => {
  const { gotoPage } = Progress();

  //卡片元素
  const [itemObj, setItemObj] = useState({
    productBacklog: {
      items: [
        {
          content: "前台職缺列表（職缺詳細內容、點選可發送應徵意願）",
          id: nanoid(),
          priority: "3",
        },
        { content: "應徵者的線上履歷編輯器", id: nanoid(), priority: "2" },
        {
          content: "會員系統（登入、註冊、權限管理）",
          id: nanoid(),
          priority: "1",
        },
        {
          content: "後台職缺管理功能（資訊上架、下架、顯示應徵者資料）",
          id: nanoid(),
          priority: "4",
        },
      ],
    },
    sprintList: {
      items: [],
    },
  });
  const answerAry = ["1", "2", "3", "4"];
  const [isOrderCorret, setIsOrderCorret] = useState(null);
  const [displayAlert, setDisplayAlert] = useState(false);

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

    // 確認 backlog 順序
    const checkSprintListOrder = () => {
      const currentSprintListOrder = newItemObj.sprintList.items.map((ele) => {
        return ele.priority;
      });
      return currentSprintListOrder.join("") === answerAry.join("")
        ? true
        : false;
    };

    setIsOrderCorret(checkSprintListOrder);
  };

  return (
    <div className="bg-secondary bg-center bg-cover h-full p-3 ">
      <div className="border-main h-full pt-20 pb-16 px-10 flex flex-col justify-between items-center">
        <div
          onClick={() => gotoPage("Start")}
          className="absolute cursor-pointer top-[50px] flex justify-center items-center w-12 h-12 left-[50px] rounded-full border-P1 border-2"
        >
          <img className="w-[20%] -translate-x-px" src={arrowLeft} alt="" />
        </div>
        <div>
          <div className="text-P1 flex items-center justify-center">
            <ProgressBar rate={rate} />
          </div>
          <div className="flex items-center text-white">
            <img src={girl1} alt="" />
            <p className="m-5  whitespace-nowrap">Tina</p>
            <div className="flex border rounded-2xl border-P2 py-3 px-6 items-center">
              <p className=" mr-16">
                請試著把需求放到產品待辦清單，並調整待辦的優先度順序。
                <br />
                我們公司也推薦使用 Jira 來做任務的管理呢！
              </p>
              <a
                href="https://www.atlassian.com/software/jira"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="h-12" src={jiraLogo} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-end">
          <DragDropContext onDragEnd={onDragEnd}>
            <div className="mr-14">
              <Droppable droppableId="productBacklog" direction="horizontal">
                {(provided, snapshot) => (
                  <div
                    className="grid grid-cols-4 gap-4 h-[253px] w-[810px]"
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    {itemObj.productBacklog.items.map((item, index) => (
                      <Card item={item} index={index} key={item.id} />
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
              <hr className="my-8 border-P1" />

              <Droppable droppableId="sprintList" direction="horizontal">
                {(provided, snapshot) => (
                  <div
                    className="bg-placeAllBg bg-contain grid grid-cols-4 gap-4 h-[253px] w-[810px]"
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    {itemObj.sprintList.items.map((item, index) => (
                      <Card item={item} index={index} key={item.id} />
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          </DragDropContext>
          <button
            onClick={
              isOrderCorret
                ? () => gotoPage("Teams")
                : () => setDisplayAlert(true)
            }
            className="border-btn hover:bg-btn hover:text-[#333333] bg-cover tracking-widest text-P1 py-1 px-8 text-xl"
          >
            完成
          </button>
        </div>
      </div>
      {/* alert */}
      <div
        className="absolute w-full h-full top-0 bg-blackTrans items-center justify-center"
        style={{ display: displayAlert ? "flex" : "none" }}
      >
        <div className="text-white text-center bg-alertBg py-20 px-24 bg-center border-alert">
          <p className="mb-8">
            {isOrderCorret === null
              ? "請將上方待辦清單依優先順序排在下方格子"
              : "排序錯誤，請再調整順序"}{" "}
          </p>
          <button
            onClick={() => setDisplayAlert(false)}
            className="border-btn hover:bg-btn hover:text-[#333333] bg-cover tracking-widest text-P1 py-1 px-8 "
          >
            確認
          </button>
        </div>
      </div>
    </div>
  );
};

export default Backlog;
