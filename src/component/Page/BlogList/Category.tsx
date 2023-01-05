import { FC } from "react";
import { Badge, createStyles, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useRouter } from "next/dist/client/router";
import { Category as CategoryEntity } from "@/module/category";
import { AppLink } from "@/component/Element";
import { pagesPath } from "@/lib/$path";

type Props = {
  category: CategoryEntity;
};

export const Category: FC<Props> = ({ category }) => {
  const { classes, cx } = useStyles();
  const router = useRouter();
  const isSelectedCategory = router.query.slug === category.slug;
  const largeScreen = useMediaQuery("(min-width: 900px)");

  return (
    <>
      <Badge
        className={cx(classes.container, { [classes.selected]: isSelectedCategory })}
        size={largeScreen ? "lg" : "md"}
        color={isSelectedCategory ? "pink" : "blue"}
      >
        <AppLink href={pagesPath.category._slug(category.name).$url()} className={classes.link}>
          <Text size={largeScreen ? "sm" : "xs"}>#{category.name}</Text>
        </AppLink>
      </Badge>
    </>
  );
};

const useStyles = createStyles((theme) => ({
  container: {
    padding: "0",
    margin: "0 10px 10px 0",
    textTransform: "none",
    [theme.fn.smallerThan("md")]: {
      fontSize: "10px",
    },
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
