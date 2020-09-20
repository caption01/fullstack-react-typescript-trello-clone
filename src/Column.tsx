import React from "react";

import { ColumnContainer, ColumnTitle } from "./styles";
import { AddNewItem } from "./AddNewItem";

interface ColumnsProps {
  text: string;
}

export const Column = ({
  text,
  children,
}: React.PropsWithChildren<ColumnsProps>) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {children}
      <AddNewItem
        onAdd={console.log}
        toggleButtonText="+ Add anther task"
        dark
      />
    </ColumnContainer>
  );
};
