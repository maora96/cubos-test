import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MultiselectProps, OptionProps } from "../../types";
import Chip from "../Chip";
import Option from "../Option";
import styles from "./styles.module.css";

export default function Multiselect({
  options,
  placeholder,
}: MultiselectProps) {
  const [selection, setSelection] = useState<OptionProps[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={!isOpen ? styles.multiselect : styles.multiselectActive}>
        <div className={styles.multiselectContent}>
          {selection?.length > 0
            ? selection.map((selected) => (
                <Chip
                  text={selected?.text}
                  id={selected?.id}
                  selection={selection}
                  setSelection={setSelection}
                  key={selected?.id}
                />
              ))
            : placeholder}
        </div>

        {isOpen ? (
          <IoIosArrowUp size={18} onClick={() => setIsOpen(false)} />
        ) : (
          <IoIosArrowDown size={18} onClick={() => setIsOpen(true)} />
        )}
      </div>
      {isOpen && (
        <div className={styles.dropdown}>
          {options?.map((option) => (
            <Option
              text={option?.text}
              id={option?.id}
              selection={selection}
              setSelection={setSelection}
              key={option?.id}
            />
          ))}
        </div>
      )}
    </>
  );
}
