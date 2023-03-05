import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  line: {
    marginTop: "24px",
    borderBottom: `1px solid ${theme.colors.gray[2]}`,
  },

  linkContainer: {
    marginTop: "24px",
    fontSize: "18px",
    fontWeight: 500,
  },

  link: {
    textUnderlinePosition: "under",
    textDecorationLine: "underline",
    color: "#04CCFF",
    marginLeft: "5px",
  },
}));
