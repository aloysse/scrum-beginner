import React, { useState } from "react";
import ProgressBar from "../components/ProgressBar";
import arrowLeft from "../assets/img/arrow-left.svg";
import boy2 from "../assets/img/boy2.svg";
import flow from "../assets/img/flow.svg";
import { Progress } from "../context/ProgressContext";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { nanoid } from "nanoid";
import FlowContent from "../components/FlowContent";

const SprintFlow = ({ rate }) => {
  const [isOrderCorret, setIsOrderCorret] = useState();
  const [displayAlert, setDisplayAlert] = useState(false);
  const [isAllItems, setIsAllItems] = useState(false);
  const [itemObj, setItemObj] = useState({
    sprintList: {
      items: [
        {
          contentTC: "短衝自省會議",
          contentEN: "Sprint Retrospective",
          id: nanoid(),
          priority: "3",
        },
        {
          contentTC: "每日站立會議",
          contentEN: "Daily Scrum",
          id: nanoid(),
          priority: "1",
        },
        {
          contentTC: "短衝檢視會議",
          contentEN: "Sprint Review",
          id: nanoid(),
          priority: "2",
        },
      ],
    },
    flow1: {
      items: [],
    },
    flow2: {
      items: [],
    },
    flow3: {
      items: [],
    },
  });
  const answerAry = ["1", "2", "3"];

  const { gotoPage } = Progress();

  //Drag function
  const onDragEnd = (event) => {
    const { source, destination } = event;

    if (!destination) {
      return;
    }

    // 拷貝新的items (來自state)
    let newItemObj = { ...itemObj };

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

    // 流程上格子僅能留一個項目
    if (
      destination.droppableId === "flow1" ||
      destination.droppableId === "flow2" ||
      destination.droppableId === "flow3"
    ) {
      // 確認流程上已有項目
      if (newItemObj[destination.droppableId].items.length > 1) {
        //替換格子中原有的項目
        const [remove] = newItemObj[destination.droppableId].items.splice(1, 1);
        newItemObj[source.droppableId].items.splice(source.index, 0, remove);
      }
    }
    setItemObj(newItemObj);

    // 確認 flow 順序
    const checkFlowOrder = () => {
      let currentFlowOrder = "";
      if (
        newItemObj.flow1.items[0] &&
        newItemObj.flow2.items[0] &&
        newItemObj.flow3.items[0]
      ) {
        setIsAllItems(true);
        currentFlowOrder =
          newItemObj.flow1.items[0].priority +
          newItemObj.flow2.items[0].priority +
          newItemObj.flow3.items[0].priority;
      }
      return currentFlowOrder === answerAry.join("") ? true : false;
    };

    setIsOrderCorret(checkFlowOrder);
  };

  return (
    <div className="bg-secondary bg-center bg-cover h-full p-3">
      <div className="border-main h-full pt-20 pb-16 px-10 flex flex-col justify-between items-center">
        <div
          onClick={() => gotoPage("SprintList")}
          className="absolute cursor-pointer top-[50px] flex justify-center items-center w-12 h-12 left-[50px] rounded-full border-P1 border-2"
        >
          <img className="w-[20%] -translate-x-px" src={arrowLeft} alt="" />
        </div>
        <div>
          <div className="text-P1 flex items-center justify-center">
            <ProgressBar rate={rate} />
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
        <div className="relative text-white text-center mb-10">
          <img className="w-[800px] mt-8" src={flow} alt="" />
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="sprintList">
              {(provided, snapshot) => (
                <div
                  className="absolute right-10 top-0 w-[200px] min-h-[300px]"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {itemObj.sprintList.items.map((item, index) => (
                    <FlowContent item={item} index={index} key={item.id} />
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
            <Droppable droppableId="flow1">
              {(provided, snapshot) => (
                <div
                  className="rounded-xl border-dashed top-0 left-52 absolute border w-[200px] h-[80px] border-P1 bg-P3"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {itemObj.flow1.items.map((item, index) => (
                    <FlowContent item={item} index={index} key={item.id} />
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
            <Droppable droppableId="flow2">
              {(provided, snapshot) => (
                <div
                  className="rounded-xl border-dashed bottom-0 right-80 absolute border w-[200px] h-[80px] border-P1 bg-P3"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {itemObj.flow2.items.map((item, index) => (
                    <FlowContent item={item} index={index} key={item.id} />
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
            <Droppable droppableId="flow3">
              {(provided, snapshot) => (
                <div
                  className="rounded-xl border-dashed bottom-0 right-20  absolute border w-[200px] h-[80px] border-P1 bg-P3"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {itemObj.flow3.items.map((item, index) => (
                    <FlowContent item={item} index={index} key={item.id} />
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
        <button
          onClick={
            isOrderCorret
              ? () => gotoPage("Retro")
              : () => setDisplayAlert(true)
          }
          className="border-btn hover:bg-btn hover:text-[#333333] bg-cover tracking-widest text-P1 py-1 px-8 text-xl"
        >
          完成了
        </button>
      </div>
      {/* alert */}
      <div
        className="absolute w-full h-full top-0 bg-blackTrans items-center justify-center"
        style={{ display: displayAlert ? "flex" : "none" }}
      >
        <div className="text-white text-center bg-alertBg py-20 px-24 bg-center border-alert">
          <p className="mb-8">
            {!isAllItems
              ? "請將所有方塊放到留長圖中的空格裡"
              : "流程有誤喔！再思考一下"}
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

export default SprintFlow;
