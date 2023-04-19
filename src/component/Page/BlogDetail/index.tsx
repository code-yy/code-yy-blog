import { FC } from "react";
import { Post } from "@/lib/api";
import "zenn-content-css";

type Props = {
  blog: Post;
};

export const BlogDetail: FC<Props> = ({ blog }) => {
  return (
    <article className="znc">
      <div dangerouslySetInnerHTML={{ __html: blog.content }} />
    </article>
  );
};
