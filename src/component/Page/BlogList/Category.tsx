import { FC } from "react";
import { Badge, createStyles, Text } from "@mantine/core";
import { useRouter } from "next/router";
import { Category as CategoryEntity } from "@/module/category";
import { AppLink } from "@/component/Element";

type Props = {
  category: CategoryEntity;
};

export const Category: FC<Props> = ({ category }) => {
  const { classes, cx } = useStyles();
  const router = useRouter();
  const isSelectedCategory = router.query.slug === category.slug;

  return (
    <>
      <Badge
        className={cx(classes.container, { [classes.selected]: isSelectedCategory })}
        size={"lg"}
        color={isSelectedCategory ? "pink" : "blue"}
      >
        <AppLink href={`/category/${category.slug}`} className={classes.link}>
          <Text size={"sm"}>#{category.name}</Text>
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
