import { Badge, createStyles, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React, { FC } from "react";
import { AppLink } from "./AppLink";

type Props = {
  text: string;
  href: string;
  isSelected: boolean;
};

export const AppBadge: FC<Props> = ({ text, href, isSelected }) => {
  const { classes, cx } = useStyles();
  const largeScreen = useMediaQuery("(min-width: 900px)");

  return (
    <Badge
      className={cx(classes.container, { [classes.selected]: isSelected })}
      size={largeScreen ? "lg" : "md"}
      color={isSelected ? "pink" : "blue"}
    >
      <AppLink href={href} className={classes.link}>
        <Text size={largeScreen ? "sm" : "xs"}>{text}</Text>
      </AppLink>
    </Badge>
  );
};

const useStyles = createStyles((theme) => ({
  container: {
    padding: "0",
    margin: "0 10px 10px 0",
    textTransform: "none",
  },
  link: {
    padding: "0 13px",
    display: "flex",
    alignItems: "center",
    height: "26px",
    cursor: "pointer",
  },
  selected: {
    border: `1px solid ${theme.colors.pink[5]}`,
  },
}));
