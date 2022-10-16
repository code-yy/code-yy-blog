import { Paper, Title, Text, createStyles } from "@mantine/core";
import { FC } from "react";
import { useMediaQuery } from "@mantine/hooks";
import { AppLink } from "@/component/Element";
import { Blog } from "@/module/blog";

type Props = {
  blog: Blog;
};

export const BlogCard: FC<Props> = ({ blog }) => {
  const { classes } = useStyles();

  return (
    <AppLink href={`/blogs/${blog.slug}`}>
      <Paper shadow="md" radius="md" className={classes.paper}>
        <Text className="" size="xs">
          {blog.category.name}
        </Text>
        <Title order={3} className={classes.title}>
          {blog.title}
        </Title>
      </Paper>
    </AppLink>
  );
};

const useStyles = createStyles((theme) => ({
  paper: {
    marginBottom: "15px",
    padding: "16px",
    [theme.fn.smallerThan("md")]: {
      marginBottom: "5px",
      padding: "10px",
    },
  },
  title: {
    fontSize: "22px",
    opacity: 70,
    color: theme.colors.gray[7],
    [theme.fn.smallerThan("md")]: {
      fontSize: "16px",
    },
  },
}));
