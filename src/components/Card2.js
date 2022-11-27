import { Draggable } from "react-beautiful-dnd";

const Card2 = ({ item, index }) => {
  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided, snapshot) => {
        return (
          <div
            className="bg-cardContent  py-5 px-8 w-[190px] h-[253px]"
            ref={provided.innerRef}
            snapshot={snapshot}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div className="bg-cardStar mb-4 bg-contain bg-no-repeat bg-center flex items-center justify-center text-[#333333] w-full h-12">
              {item.score}
            </div>
            <p className="text-white">{item.content}</p>
          </div>
        );
      }}
    </Draggable>
  );
};

export default Card2;
