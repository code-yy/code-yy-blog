/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Paper, Title, Text, createStyles } from "@mantine/core";
import { FC } from "react";
import { AppLink } from "@/component/Element";
import { Blog } from "@/module/blog";
import { pagesPath } from "@/lib/$path";

type Props = {
  blog: Blog;
};

export const BlogCard: FC<Props> = ({ blog }) => {
  const { classes } = useStyles();
  const href = blog.isRss ? blog.link! : pagesPath.blogs._slug(blog.slug).$url();

  return (
    <AppLink href={href}>
      <Paper shadow="md" radius="md" className={classes.paper}>
        <img src={blog.eyecatch.url} alt={"アイキャッチ"} width={300} height={300} />
        <Text size="xs" className={classes.categoryName}>
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
    padding: "18px",
    height: "240px",
    [theme.fn.smallerThan("md")]: {
      padding: "10px",
    },
  },
  categoryName: {
    marginTop: "7px",
  },
  title: {
    fontSize: "1rem",
    opacity: 70,
    marginTop: "7px",
    color: theme.colors.gray[7],
    [theme.fn.smallerThan("md")]: {
      fontSize: "16px",
    },
  },
}));
