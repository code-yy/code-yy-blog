import { FC, memo } from "react";
import { Box } from "@mantine/core";
import { Blog } from "@/module/blog";
import { Headline } from "@/component/Core/Headline";
import { BlogCard } from "../Card";
import { useStyles } from "./elements";

type Props = {
  blogs: Blog[];
};

export const BlogList: FC<Props> = memo(({ blogs }) => {
  const { classes } = useStyles();
  const year = blogs[0]?.createdAt.substring(0, 4) ?? "";

  return (
    <>
      <Headline order={3} size={24} title={year} urlTitle={year} />

      <Box className={classes.blogContainer}>
        {blogs.map((blog) => (
          <BlogCard key={`${blog.id}-${blog.title}`} blog={blog} />
        ))}
      </Box>
    </>
  );
});

BlogList.displayName = "Memo(BlogList)";
