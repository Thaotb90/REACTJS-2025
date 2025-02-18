// rafce :> react arrow function export component
// rsfp :> react state function props
import React from "react";
import TodoList from "./components/TodoList";

const todoList = [
  {
    id: 1,
    title: "Eat",
  },
  {
    id: 2,
    title: "Sleep",
  },
  {
    id: 3,
    title: "Code",
  },
];

function todoFeature(props) {
  return (
    <div>
      <h2>Todo page title</h2>
      <TodoList todoList={todoList} />
    </div>
  );
}

export default todoFeature;
