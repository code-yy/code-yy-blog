import { FC } from "react";
import { borderBottom, container } from "./styles.css";

type Props = {
  title: string;
  urlTitle: string;
  hasBorderBottom?: "no" | "need";
};

export const Headline: FC<Props> = ({ title, hasBorderBottom = "need" }) => {
  return <h2 className={`${container} ${borderBottom[hasBorderBottom]}`}>{title}</h2>;
};
