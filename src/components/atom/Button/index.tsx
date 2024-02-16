import { ButtonHTMLAttributes } from "react";

import styles from "./style.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "add" | "delete";
}

export function Button({ variant = "add", ...props }: ButtonProps) {
  return <button className={styles[`${variant}-button`]} {...props}></button>;
}
