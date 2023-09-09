import { FC } from "react";
import { AppLink } from "@/component/Core";
import { pagesPath } from "@/lib/$path";
import { format } from "@/lib/util/date";
import { Post } from "@/lib/api";
import { createdAt, infoContainer, paper, postCardEmoji, title } from "./styles.css";

type Props = {
  post: Post;
};

export const BlogCard: FC<Props> = ({ post }) => {
  return (
    <AppLink href={`/posts/${post.slug}`}>
      <div className={paper}>
        <p className={postCardEmoji} dangerouslySetInnerHTML={{ __html: post.emoji }}></p>

        <div className={infoContainer}>
          <h3 className={title}>{post.title}</h3>

          <p className={createdAt}>{format(post.date)}</p>
        </div>
      </div>
    </AppLink>
  );
};
