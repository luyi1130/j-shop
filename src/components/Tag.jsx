import React from "react";
import styles from "./Tag.module.css";
import clsx from "clsx"; // 若你沒裝 clsx，建議 `npm i clsx`

export default function Tag({ label, color = "default" }) {
  return (
    <span className={clsx(styles.tag, styles[color])}>
      {label}
    </span>
  );
}