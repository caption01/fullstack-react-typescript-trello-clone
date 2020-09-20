import React, { useRef } from "react";
import { useDrop } from "react-dnd";

import { CardContainer } from "./styles";
import { CardDragItem } from "./DragItem";
import { useAppState } from "./AppStateContext";
import { useItemDrag } from "./useItemDrag";

interface CardProps {
  id: string;
  index: number;
  columnId: string;
  text: string;
}

export const Card = ({ id, index, columnId, text }: CardProps) => {
  const { dispatch } = useAppState();
  const ref = useRef<HTMLDivElement>(null);

  const [, drop] = useDrop({
    accept: "CARD",
    hover(item: CardDragItem) {
      if (item.id === id) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      const sourceColumn = item.columnId;
      const targetColumn = columnId;

      dispatch({
        type: "MOVE_TASK",
        payload: {
          dragIndex,
          hoverIndex,
          sourceColumn,
          targetColumn,
        },
      });

      item.index = hoverIndex;
      item.columnId = columnId;
    },
  });

  const { drag } = useItemDrag({ type: "CARD", id, index, columnId, text });
  drag(drop(ref));

  return <CardContainer ref={ref}>{text}</CardContainer>;
};
