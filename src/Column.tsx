import React from "react";

import { ColumnContainer, ColumnTitle } from "./styles";
import { Card } from "./Card";
import { AddNewItem } from "./AddNewItem";
import { useAppState } from "./AppStateContext";

interface ColumnsProps {
  text: string;
  index: number;
  id: string;
}

export const Column = ({
  text,
  index,
  id,
  children,
}: React.PropsWithChildren<ColumnsProps>) => {
  const { state, dispatch } = useAppState();

  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {state.lists[index].tasks.map((task) => (
        <Card text={task.text} key={task.id} />
      ))}
      <AddNewItem
        onAdd={(text) =>
          dispatch({ type: "ADD_TASK", payload: { text, taskId: id } })
        }
        toggleButtonText="+ Add anther task"
        dark
      />
    </ColumnContainer>
  );
};
