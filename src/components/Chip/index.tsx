import { OptionComponentProps } from "../../types";
import { IoCloseSharp } from "react-icons/io5";
import styles from "./styles.module.css";
import { useState } from "react";

export default function Chip({
  text,
  id,
  selection,
  setSelection,
}: OptionComponentProps) {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  return (
    <div className={styles.chip}>
      {text}
      <IoCloseSharp
        size={24}
        onClick={() => {
          const filteredSelection = selection?.filter(
            (selected) => selected?.id !== id
          );
          setSelection([...filteredSelection]);
        }}
      />
    </div>
  );
}
