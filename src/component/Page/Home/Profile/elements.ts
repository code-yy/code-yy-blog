import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  text: {
    marginTop: "20px",
    color: theme.colors.gray[0],
    fontWeight: 500,
    lineHeight: "28px",
  },
  link: {
    textUnderlinePosition: "under",
    textDecorationLine: "underline",
    color: "#04CCFF",
    marginLeft: "5px",
  },
}));
