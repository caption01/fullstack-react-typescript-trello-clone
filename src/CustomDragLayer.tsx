import React from "react";
import { useDragLayer, XYCoord } from "react-dnd";

import { CustomDragLayerContainer } from "./styles";
import { Column } from "./Column";
import { Card } from "./Card";

function getItemStyles(currentOffset: XYCoord | null): React.CSSProperties {
  if (!currentOffset) {
    return {
      display: "none",
    };
  }

  const { x, y } = currentOffset;

  const transform = `translate(${x}px, ${y}px)`;
  return {
    transform,
    WebkitTransform: transform,
  };
}

export const CustomDragLayer: React.FC = () => {
  const { isDragging, item, currentOffset } = useDragLayer((monitor) => ({
    item: monitor.getItem(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging(),
  }));

  // fix bug move task logic from book "P.178"
  const type = item?.type;

  return isDragging ? (
    <CustomDragLayerContainer>
      <div style={getItemStyles(currentOffset)}>
        {type === "COLUMN" && (
          <Column
            id={item.id}
            text={item.text}
            index={item.index}
            isPreview={true}
          />
        )}
        {type === "CARD" && (
          <Card
            id={item.id}
            index={item.index}
            columnId={item.columnId}
            text={item.text}
          />
        )}
      </div>
    </CustomDragLayerContainer>
  ) : null;
};
