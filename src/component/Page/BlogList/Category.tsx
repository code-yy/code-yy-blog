import { FC } from "react";
import { Badge, createStyles } from "@mantine/core";
import { Category as CategoryEntity } from "@/module/category";

type Props = {
  category: CategoryEntity;
};

export const Category: FC<Props> = ({ category }) => {
  const { classes } = useStyles();

  return (
    <Badge className={classes.container} size={"lg"}>
      #{category.name}
    </Badge>
  );
};

const useStyles = createStyles(() => ({
  container: {
    margin: "0 10px 10px 0",
  },
}));
