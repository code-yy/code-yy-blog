import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  container: {
    marginTop: "24px",
    backgroundColor: theme.colors.gray[1],
    [theme.fn.smallerThan("md")]: {
      padding: "0 10px",
    },
  },
  wrapper: {
    maxWidth: "1440px",
    margin: "0 auto",
    display: "flex",
    padding: "0 24px",
    height: "64px",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: "16px",
    fontWeight: "bold",
    color: theme.colors.gray[0],
  },
  iconsContainer: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  icon: {
    display: "flex",
    alignItems: "center",
    padding: "8px",
  },
}));
