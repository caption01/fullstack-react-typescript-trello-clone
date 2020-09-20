import React from "react";

import { ColumnContainer, ColumnTitle } from "./styles";

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
    </ColumnContainer>
  );
};
