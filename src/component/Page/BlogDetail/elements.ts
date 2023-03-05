import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  mainContainer: {
    display: "flex",
    position: "relative",
    color: theme.colors.gray[0],

    [theme.fn.smallerThan("md")]: {
      flexDirection: "column",
    },
  },

  dialogContainer: {
    display: "block",

    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  toc: {
    minWidth: "300px",
    top: "2rem",
    position: "sticky",
    display: "none",

    [theme.fn.smallerThan("md")]: {
      display: "block",
    },
  },

  tocDialogContainer: {
    position: "fixed",
    top: "17%",
    left: "50%",
    zIndex: 300,
    marginLeft: "-46%",
    width: "90%",
  },

  tocDialogContainerHidden: {
    visibility: "hidden",
  },

  tocDialog: {
    display: "none",

    [theme.fn.smallerThan("md")]: {
      position: "fixed",
      top: "0",
      left: "0",
    },
  },

  tocButton: {
    top: "2rem",
    position: "sticky",
    marginBottom: "10px",
    marginLeft: "10px",
    borderRadius: "50%",
    width: "56px",
    height: "56px",
  },

  menu: {
    [theme.fn.smallerThan("md")]: {
      backgroundColor: "rgb(1, 44, 107)",
    },
  },

  close: {
    [theme.fn.smallerThan("md")]: {
      backgroundColor: "white",
    },
  },
}));
