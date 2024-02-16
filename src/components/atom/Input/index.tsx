import { ForwardedRef, forwardRef, HTMLAttributes } from "react";

import styles from "./style.module.scss";

interface InputProps extends HTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef(({ ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
  return <input className={styles["input"]} ref={ref} {...props}></input>;
});
