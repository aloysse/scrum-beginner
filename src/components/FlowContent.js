import { Draggable } from "react-beautiful-dnd";

const FlowContent = ({ item, index }) => (
  <Draggable draggableId={item.id} index={index}>
    {(provided, snapshot) => {
      return (
        <div
          className="rounded-xl border w-[200px] h-[80px] translate-x-[-1px] translate-y-[-1px] mb-3 border-P1 bg-P3 py-3"
          ref={provided.innerRef}
          snapshot={snapshot}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {item.contentTC}
          <br />
          {item.contentEN}
        </div>
      );
    }}
  </Draggable>
);

export default FlowContent;
