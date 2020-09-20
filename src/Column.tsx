import React from "react";

import { ColumnContainer, ColumnTitle } from "./styles";
import { Card } from "./Card";
import { AddNewItem } from "./AddNewItem";
import { useAppState } from "./AppStateContext";

interface ColumnsProps {
  text: string;
  index: number;
}

export const Column = ({
  text,
  index,
  children,
}: React.PropsWithChildren<ColumnsProps>) => {
  const { state } = useAppState();

  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {state.lists[index].tasks.map((task) => (
        <Card text={task.text} key={task.id} />
      ))}
      <AddNewItem
        onAdd={console.log}
        toggleButtonText="+ Add anther task"
        dark
      />
    </ColumnContainer>
  );
};
