import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  container: {
    marginTop: "40px",
    paddingBottom: "4px",
    borderBottom: `1px solid ${theme.colors.gray[2]}`,
    color: theme.colors.gray[0],
    fontWeight: 600,
  },
  nonBorderBottom: {
    borderBottom: "none",
  },
  anchor: {
    opacity: 0,
    marginLeft: "4px",
    cursor: "pointer",
    color: theme.colors.gray[7],
  },
  hoveredAnchor: {
    opacity: 1,
  },
}));
