import { useEffect, useState } from "react";
import { OptionComponentProps } from "../../types";
import styles from "./styles.module.css";

export default function Option({
  text,
  id,
  selection,
  setSelection,
}: OptionComponentProps) {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  useEffect(() => {
    if (selection?.some((selected) => selected?.id === id)) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  }, [selection]);

  return (
    <div
      className={styles.option}
      onClick={() => {
        if (isSelected) {
          const newSelection = selection?.filter(
            (selected) => selected?.id !== id
          );
          setSelection(newSelection);
          setIsSelected(false);
        } else {
          setSelection([...selection, { id: id, text: text }]);
          setIsSelected(true);
        }
      }}
    >
      <div className={isSelected ? styles.selected : styles.select}></div>
      {text}
    </div>
  );
}
