import { FC } from "react";
import { Headline } from "@/component/Core/Headline";
import { Post } from "@/lib/api";
import { Profile } from "./Profile";
import { BlogCard } from "./Card";
import { blogContainer, box } from "./styles.css";

type Props = {
  posts: Post[];
};

const FIRST_BLOG_POST_YEAR = 2021;

export const Home: FC<Props> = ({ posts }) => {
  // 年ごとのブログ投稿
  const yearlyBlogs = () => {
    const blogData = [];
    const thisYear = new Date().getFullYear();
    for (let year = FIRST_BLOG_POST_YEAR; year <= thisYear; year++) {
      const arrBlog = posts.filter((blog) => blog.date.indexOf(`${year}`) === 0);

      blogData.push(arrBlog);
    }
    return blogData;
  };

  return (
    <>
      <Profile />

      <div className={box} />

      {/* タイトル */}
      <Headline title={"Posts"} urlTitle={"posts"} />

      {/* ブログ */}
      <div className={blogContainer}>
        {yearlyBlogs()
          .reverse()
          .map((blogs) => {
            const year = blogs[0]?.date.substring(0, 4) ?? "";
            return (
              <>
                <h2>{year}</h2>
                {blogs.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </>
            );
          })}
      </div>
    </>
  );
};
