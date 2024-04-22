import React from "react";
import { useAppDispatch } from "../hooks/useRedux";
import { switchTodo as switchRedux, delTodo } from "../redux/modules/todoSlice";
import { Todo } from "../../types";

const TodoSection = ({ title, todos }: { title: string; todos: Todo[] }) => {
  const dispatch = useAppDispatch();
  const switchTodo = (id: number) => {
    dispatch(switchRedux(id));
  };
  const deleteTodo = (id: number) => {
    dispatch(delTodo(id));
  };
  return (
    <div>
      <h2>{title}</h2>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <li>{todo.content}</li>
            <button onClick={() => switchTodo(todo.id)}>
              {todo.isDone ? "취소" : "완료"}
            </button>
            <button onClick={() => deleteTodo(todo.id)}>삭제</button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoSection;
