import { FC, memo } from "react";
import { Box } from "@mantine/core";
import { Headline } from "@/component/Core/Headline";
import { Post } from "@/lib/api";
import { useStyles } from "./elements";
import { Profile } from "./Profile";
import { BlogCard } from "./Card";

type Props = {
  posts: Post[];
};

export const Home: FC<Props> = memo(({ posts }) => {
  const { classes } = useStyles();

  return (
    <>
      <Profile />

      <Box className={classes.box} />

      {/* タイトル */}
      <Headline title={"Blog Posts"} urlTitle={"blog-posts"} size={30} order={2} />

      {/* ブログ */}
      {posts.map((post, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <BlogCard key={`${post.title}-${index}`} post={post} />
      ))}
    </>
  );
});

Home.displayName = "Memo(Home)";
