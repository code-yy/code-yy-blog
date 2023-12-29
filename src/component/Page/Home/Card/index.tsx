import { format } from "util";
import { FC } from "react";
import { AppLink } from "@/component/Core";
import { Post } from "@/lib/api";
import { container, link } from "./styles.css";

type Props = {
  post: Post;
};

export const BlogCard: FC<Props> = ({ post }) => {
  return (
    <h3 className={container}>
      {format(post.date)}:
      <AppLink href={`/posts/${post.slug}`} className={link}>
        {post.title}
      </AppLink>
    </h3>
  );
};
