import { FC, useEffect } from "react";
import hljs from "highlight.js";
import { Props } from "@/pages/blogs/[slug]";
import "highlight.js/styles/atom-one-dark.css";

export const BlogId: FC<Props> = ({ blog }) => {
  useEffect(() => {
    hljs.initHighlightingOnLoad();
  }, []);

  return (
    <article className="prose mx-auto max-w-none px-8 md:prose-base lg:prose lg:max-w-12%">
      <div dangerouslySetInnerHTML={{ __html: blog.content }} />
    </article>
  );
};
