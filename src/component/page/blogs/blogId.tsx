/* eslint-disable @next/next/no-img-element */
import { FC, useEffect } from "react";
import hljs from "highlight.js";
import { useMantineColorScheme } from "@mantine/core";
import { Props } from "@/pages/blogs/[slug]";
import "highlight.js/styles/atom-one-dark.css";

export const BlogId: FC<Props> = ({ blog }) => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  useEffect(() => {
    hljs.initHighlightingOnLoad();
  }, []);

  return (
    <article className="prose mx-auto max-w-none px-8  md:prose-base lg:prose lg:max-w-12%">
      <img
        src={blog.eyecatch.url}
        alt={`${blog.eyecatch.url}のアイキャッチ`}
        className="mx-auto max-h-[500px] max-w-4xl"
      />
      <div className={`${dark && "text-white"}`} dangerouslySetInnerHTML={{ __html: blog.content }} />
    </article>
  );
};
