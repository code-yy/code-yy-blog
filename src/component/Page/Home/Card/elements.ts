import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  paper: {
    display: "flex",
    padding: "10px",
    borderBottom: `1px solid ${theme.colors.gray[2]}`,
    flexDirection: "column",

    [theme.fn.largerThan("sm")]: {
      flexDirection: "row",
    },
  },

  eyecatchContainer: {
    height: "200px",
    minWidth: "100%",

    [theme.fn.largerThan("sm")]: {
      height: "150px",
      minWidth: "285px",
    },
  },

  eyecatch: {
    maxHeight: "100%",
    minHeight: "100%",
    objectFit: "cover",
    borderRadius: "6px",
    width: "100%",

    [theme.fn.largerThan("sm")]: {
      maxHeight: "150px",
      minHeight: "100px",
    },
  },

  infoContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: "12px",

    [theme.fn.largerThan("sm")]: {
      marginTp: "0",
      marginLeft: "32px",
    },
  },

  categoryName: {
    margin: "7px 0 0",
    fontSize: "14px",
  },

  title: {
    fontSize: "24px",
    opacity: 70,
    marginTop: "7px",
    fontWeight: 600,
    color: theme.colors.gray[0],
  },

  createdAt: {
    margin: "0",
    fontSize: "14px",
  },
}));
