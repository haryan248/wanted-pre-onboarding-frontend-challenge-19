import { TodoList } from "@/components/List";
import { TodoAddSection } from "@/components/TodoAddSection";

import styles from "./style.module.scss";

export const Todo = () => {
  return (
    <>
      <h1 className={styles["title"]}>
        2024년 3월 프론트엔드 <br />
        프리온보딩 사전과제
      </h1>
      <TodoAddSection></TodoAddSection>
      <TodoList></TodoList>
    </>
  );
};
