import { createStyles, Title } from "@mantine/core";
import { FC } from "react";

export const Header: FC = () => {
  const { classes } = useStyles();

  return (
    <Title order={3} className={classes.container}>
      ユウトブログ
    </Title>
  );
};

const useStyles = createStyles(() => ({
  container: {
    margin: "16px 0",
  },
}));
