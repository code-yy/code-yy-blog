import { FC, memo } from "react";
import { Box } from "@mantine/core";
import { Post } from "@/lib/api";
import { BlogCard } from "../Card";
import { useStyles } from "./elements";

type Props = {
  posts: Post[];
};

export const BlogList: FC<Props> = memo(({ posts }) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.blogContainer}>
      {posts.map((post, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <BlogCard key={`${post.title}-${index}`} post={post} />
      ))}
    </Box>
  );
});

BlogList.displayName = "Memo(BlogList)";
