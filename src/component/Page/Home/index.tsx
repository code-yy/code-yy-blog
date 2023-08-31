import { FC } from "react";
import { Headline } from "@/component/Core/Headline";
import { Post } from "@/lib/api";
import { Profile } from "./Profile";
import { BlogCard } from "./Card";
import { blogContainer, box } from "./styles.css";

type Props = {
  posts: Post[];
};

export const Home: FC<Props> = ({ posts }) => {
  return (
    <>
      <Profile />

      <div className={box} />

      {/* タイトル */}
      <Headline title={"Blog Posts"} urlTitle={"blog-posts"} />

      {/* ブログ */}
      <div className={blogContainer}>
        {posts.map((post, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <BlogCard key={`${post.title}-${index}`} post={post} />
        ))}
      </div>
    </>
  );
};
