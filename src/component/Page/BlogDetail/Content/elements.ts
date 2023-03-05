import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  bodyContainer: {
    marginRight: "2rem",
    padding: "24px",
    color: theme.colors.gray[0],

    [theme.fn.smallerThan("md")]: {
      padding: "10px",
      margin: "0 10px 20px",
    },
  },

  title: {
    fontSize: "45px",
    [theme.fn.smallerThan("md")]: {
      fontSize: "20px",
    },
  },

  dateContainer: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    margin: "16px 0",
  },

  dateWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },

  eyecatch: {
    width: "60%",
    margin: "0 auto",
    marginBottom: "40px",
  },

  content: {
    fontSize: "17.5px",
    color: theme.colors.gray[0],
    fontWeight: 500,
  },
}));
