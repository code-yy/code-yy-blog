import { FC } from "react";
import { textStyle } from "./styles.css";

type Props = {
  text: string;
};

export const Text: FC<Props> = ({ text }) => {
  return <p className={textStyle}>{text}</p>;
};
