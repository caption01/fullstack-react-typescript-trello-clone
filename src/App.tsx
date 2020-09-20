import React from "react";

import { Card } from "./Card";
import { Column } from "./Column";
import { AddNewItem } from "./AddNewItem";

import "./App.css";
import { AppContainer } from "./styles";

function App() {
  return (
    <AppContainer>
      <Column text="To Do">
        <Card text="Generate app scaffold" />
      </Column>
      <Column text="In Progress">
        <Card text="Learn Typescript" />
      </Column>
      <Column text="Done">
        <Card text="Begin to use static typing" />
      </Column>
      <AddNewItem onAdd={console.log} toggleButtonText="+ Add anther list" />
    </AppContainer>
  );
}

export default App;
