import { useState } from "react";
import { OptionComponentProps } from "../../types";
import styles from "./styles.module.css";

export default function Option({
  text,
  id,
  selection,
  setSelection,
}: OptionComponentProps) {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  return (
    <div
      className={styles.option}
      onClick={() => {
        setSelection([...selection, { id: id, text: text }]);
        setIsSelected(true);
      }}
    >
      <div className={isSelected ? styles.selected : styles.select}></div>
      {text}
    </div>
  );
}
