import { Todo } from "../../types";
import { useAppSelector } from "../hooks/useRedux";
import TodoSection from "./TodoSection";

const TodoList = () => {
  const todos = useAppSelector((state) => state.todos);

  const { todoList, doneList } = todos.reduce<{
    todoList: Todo[];
    doneList: Todo[];
  }>(
    (acc, todo) => {
      todo.isDone ? acc.doneList.push(todo) : acc.todoList.push(todo);
      return acc;
    },
    { todoList: [] as Todo[], doneList: [] as Todo[] }
  );

  return (
    <div>
      <TodoSection title='할 일' todos={todoList} />
      <TodoSection title='완료된 일' todos={doneList} />
    </div>
  );
};

export default TodoList;
