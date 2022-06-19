import { Dispatch, SetStateAction } from "react";

export type OptionComponentProps = {
  text: string;
  id: number;
  selection: OptionProps[];
  setSelection: Dispatch<SetStateAction<OptionProps[]>>;
};

export type OptionProps = {
  text: string;
  id: number;
};

export type MultiselectProps = {
  options: OptionProps[];
  placeholder: string;
};
