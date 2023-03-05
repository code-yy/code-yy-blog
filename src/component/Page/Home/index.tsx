import { FC, memo, useMemo } from "react";
import { Box } from "@mantine/core";
import { Blog } from "@/module/blog";
import { Headline } from "@/component/Core/Headline";
import { useStyles } from "./elements";
import { Profile } from "./Profile";
import { BlogList } from "./List";
import { FIRST_BLOG_POST_YEAR } from "./constants";

type Props = {
  blogs: Blog[];
};

export const Home: FC<Props> = memo(({ blogs }) => {
  const { classes } = useStyles();

  // 年ごとのブログ投稿
  const yearlyBlogs: Blog[][] = useMemo(() => {
    const blogData: Blog[][] = [];
    const thisYear = new Date().getFullYear();
    for (let year = FIRST_BLOG_POST_YEAR; year <= thisYear; year++) {
      const arrBlog = blogs.filter((blog) => blog.createdAt.indexOf(`${year}`) === 0);

      blogData.push(arrBlog);
    }
    return blogData;
  }, [blogs]);

  return (
    <>
      <Profile />

      {/* 高さ確保 */}
      <Box className={classes.box} />

      {/* タイトル */}
      <Headline title={"Blog Posts"} urlTitle={"blog-posts"} size={30} order={2} />

      {/* ブログ */}
      {yearlyBlogs.reverse().map((blogs) => (
        <BlogList key={`${blogs[0].title}-${blogs[0].id}`} blogs={blogs} />
      ))}
    </>
  );
});

Home.displayName = "Memo(Home)";
