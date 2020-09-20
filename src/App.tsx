import React from "react";

import { Column } from "./Column";
import { AddNewItem } from "./AddNewItem";

import "./App.css";
import { AppContainer } from "./styles";

import { useAppState } from "./AppStateContext";

function App() {
  const { state } = useAppState();

  return (
    <AppContainer>
      {state.lists.map((list, i) => (
        <Column key={list.id} index={i} text={list.text} />
      ))}
      <AddNewItem onAdd={console.log} toggleButtonText="+ Add anther list" />
    </AppContainer>
  );
}

export default App;
