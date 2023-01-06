import { Box, createStyles } from "@mantine/core";
import { FC } from "react";
import { theme } from "@/constant/theme";

export const Toc: FC = () => {
  const { classes, cx } = useStyles();

  return <Box className={cx("toc", classes.toc)} />;
};

const useStyles = createStyles(() => {
  return {
    toc: {
      a: {
        opacity: 0.5,
        color: theme.colors.primary,
        textDecoration: "none",
        display: "block",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        marginRight: "16px",
        width: "100%",
        maxWidth: "260px",
        fontSize: "14px",
        "&:hover": {
          opacity: 1,
        },
      },
      ".is-active-link": {
        opacity: 1,
        fontWeight: "bold",
      },
      ".node-name--H3::before": {
        whiteSpace: "pre",
        content: '"    "',
      },
      ".node-name--H4::before": {
        whiteSpace: "pre",
        content: '"     "',
      },
    },
  };
});
