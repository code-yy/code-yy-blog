import { createStyles, Divider, Group, Paper, Text } from "@mantine/core";
import { FC } from "react";
import { theme } from "@/constant/theme";
import { Toc } from ".";

export const TocCard: FC = () => {
  const { classes } = useStyles();

  return (
    <Paper p="md" radius="md" shadow="xs" className={classes.root}>
      <Group spacing="xs" direction="column">
        <Text size="lg" weight="bold" sx={() => ({ color: theme.colors.black })}>
          目次
        </Text>
        <Divider
          size="sm"
          sx={() => ({
            borderColor: theme.colors.black,
            width: "100%",
          })}
        />
        <Toc />
      </Group>
    </Paper>
  );
};

const useStyles = createStyles(() => {
  return {
    root: {
      position: "sticky",
      top: "2rem",
      overflowX: "hidden",
      overflowY: "scroll",
    },
  };
});
