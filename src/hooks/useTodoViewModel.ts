import { useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { store } from "@/store";
import { addTodo, deleteTodo } from "@/store/slices/todoSlice";

export const useTodoViewModel = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state: ReturnType<typeof store.getState>) => state.todo.todoList);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDeleteTodo = useCallback(
    (todoId: number) => {
      dispatch(deleteTodo(todoId));
    },
    [dispatch],
  );

  const handleAddTodo = useCallback(() => {
    if (!inputRef.current) return;
    if (inputRef.current.value.length === 0) return;
    dispatch(addTodo(inputRef.current.value));
    inputRef.current.value = "";
    inputRef.current.focus();
  }, [dispatch]);

  return { todoList, handleDeleteTodo, inputRef, handleAddTodo };
};
