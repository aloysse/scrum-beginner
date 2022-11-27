import { Draggable } from "react-beautiful-dnd";

const Card = ({ item, index }) => {
  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided, snapshot) => {
        return (
          <div
            className="bg-cardContent py-12 px-8 w-[190px] h-[253px]"
            ref={provided.innerRef}
            snapshot={snapshot}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <p className="text-white">{item.content}</p>
          </div>
        );
      }}
    </Draggable>
  );
};

export default Card;
