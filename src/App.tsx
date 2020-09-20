import React from "react";

import { Column } from "./Column";
import { AddNewItem } from "./AddNewItem";

import "./App.css";
import { AppContainer } from "./styles";

import { useAppState } from "./AppStateContext";

function App() {
  const { state, dispatch } = useAppState();

  return (
    <AppContainer>
      {state.lists.map((list, i) => (
        <Column key={list.id} id={list.id} index={i} text={list.text} />
      ))}
      <AddNewItem
        onAdd={(text) => dispatch({ type: "ADD_LIST", payload: text })}
        toggleButtonText="+ Add anther list"
      />
    </AppContainer>
  );
}

export default App;
