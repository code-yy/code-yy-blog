import { Paper, Title, Box } from "@mantine/core";
import { FC } from "react";
import { AppLink } from "@/component/Core";
import { Blog } from "@/module/blog";
import { pagesPath } from "@/lib/$path";
import { format } from "@/lib/util/date";
import { useStyles } from "./elements";

type Props = {
  blog: Blog;
};

export const BlogCard: FC<Props> = ({ blog }) => {
  const { classes } = useStyles();
  const link = blog.link ?? "";
  const href = blog.isRss ? link : pagesPath.blogs._slug(blog.slug).$url();

  return (
    <AppLink href={href}>
      <Paper shadow="md" radius="md" className={classes.paper}>
        <Box className={classes.eyecatchContainer}>
          <img src={blog.eyecatch.url} alt={blog.title} className={classes.eyecatch} />
        </Box>

        <Box className={classes.infoContainer}>
          <Box>
            <p className={classes.categoryName}>{blog.category.name}</p>

            <Title order={3} className={classes.title}>
              {blog.title}
            </Title>
          </Box>

          <p className={classes.createdAt}>{format(blog.createdAt)}</p>
        </Box>
      </Paper>
    </AppLink>
  );
};
