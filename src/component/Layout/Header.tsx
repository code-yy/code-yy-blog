import { createStyles, Title } from "@mantine/core";
import { FC } from "react";
import { pagesPath } from "@/lib/$path";
import { AppLink } from "../Element";

export const Header: FC = () => {
  const { classes } = useStyles();

  return (
    <Title order={3} className={classes.container}>
      <AppLink href={pagesPath.$url()}>Yuto Blog</AppLink>
    </Title>
  );
};

const useStyles = createStyles((theme) => ({
  container: {
    margin: "16px 0",
    [theme.fn.smallerThan("md")]: {
      padding: "0 10px",
    },
  },
}));
