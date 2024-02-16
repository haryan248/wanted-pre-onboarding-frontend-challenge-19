import { Button } from "@/components/atom/Button";
import { Input } from "@/components/atom/Input";
import { useTodoViewModel } from "@/hooks/useTodoViewModel";

import styles from "./style.module.scss";

export const TodoAddSection = () => {
  const { inputRef, handleAddTodo } = useTodoViewModel();

  return (
    <section className={styles["add-section"]}>
      <div className={styles["todo-container"]}>
        <Input ref={inputRef}></Input>
        <Button variant="add" onClick={handleAddTodo}>
          Add
        </Button>
      </div>
    </section>
  );
};
