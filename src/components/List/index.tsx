import { Button } from "@/components/atom/Button";
import { useTodoViewModel } from "@/hooks/useTodoViewModel";
import { TodoList as TodoListType } from "@/store/slices/todoSlice";

import styles from "./style.module.scss";

export const TodoList = () => {
  const { todoList, handleDeleteTodo } = useTodoViewModel();

  return (
    <section className={styles["todolist-container"]}>
      {todoList.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} handleDeleteTodo={handleDeleteTodo}></TodoItem>;
      })}
    </section>
  );
};

const TodoItem = ({ todo, handleDeleteTodo }: { todo: TodoListType; handleDeleteTodo: (todoId: number) => void }) => {
  return (
    <div className={styles["todoitem"]}>
      <span>{todo.text}</span>
      <Button variant="delete" onClick={() => handleDeleteTodo(todo.id)}>
        Delete
      </Button>
    </div>
  );
};
