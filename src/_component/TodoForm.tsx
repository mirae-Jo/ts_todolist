import React, { useState } from "react";

import { addTodo } from "../redux/modules/todoSlice";

import { useAppDispatch } from "../hooks/useRedux";

const TodoForm = () => {
  const dispatch = useAppDispatch();

  const [content, setContent] = useState("");

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const newTodo = { id: Date.now(), content, isDone: false };
          dispatch(addTodo(newTodo));
          setContent("");
        }}>
        <input onChange={(e) => setContent(e.target.value)} value={content} />
        <button>입력</button>
      </form>
    </div>
  );
};

export default TodoForm;
