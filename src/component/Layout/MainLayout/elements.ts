import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  root: {
    [theme.fn.smallerThan("md")]: {
      width: "100%",
      padding: "0",
    },
  },

  body: {
    marginTop: "12px",
    [theme.fn.smallerThan("md")]: {
      flexDirection: "column",
      marginBottom: "20px",
    },
  },

  main: {
    maxWidth: "900px",
    margin: "0 auto",
    paddingBottom: "16px 0 32px",
    [theme.fn.smallerThan("md")]: {
      width: "100%",
    },
  },
}));
