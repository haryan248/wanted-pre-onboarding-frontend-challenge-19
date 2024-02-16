import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TodoList = {
  id: number;
  text: string;
};
type InitialTodoState = {
  todoList: Array<TodoList>;
};
const initialState: InitialTodoState = {
  todoList: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todoList = [...state.todoList, { id: Date.now(), text: action.payload }];
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todoList = state.todoList.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
