import { Text as MantineText } from "@mantine/core";
import { FC } from "react";
import { useStyles } from "./elements";

type Props = {
  text: string;
};

export const Text: FC<Props> = ({ text }) => {
  const { classes } = useStyles();

  return <MantineText className={classes.text}>{text}</MantineText>;
};
