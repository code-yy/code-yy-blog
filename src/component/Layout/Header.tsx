import { createStyles, Title } from "@mantine/core";
import { FC } from "react";
import { LINK } from "@/constant/link";
import { AppLink } from "../Element";

export const Header: FC = () => {
  const { classes } = useStyles();

  return (
    <Title order={3} className={classes.container}>
      <AppLink href={LINK.HOME}>Yuto Blog</AppLink>
    </Title>
  );
};

const useStyles = createStyles(() => ({
  container: {
    margin: "16px 0",
  },
}));
