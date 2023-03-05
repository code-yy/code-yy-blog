import { FC } from "react";
import { Box, Loader, createStyles } from "@mantine/core";

export const AppLoading: FC = () => {
  const { classes } = useStyles();

  return (
    <Box className={classes.container}>
      <Loader />
    </Box>
  );
};

const useStyles = createStyles(() => ({
  container: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
