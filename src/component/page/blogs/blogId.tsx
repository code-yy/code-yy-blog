import "highlight.js/styles/atom-one-dark.css";
import hljs from "highlight.js";

import { load } from "cheerio";
import { FC, useEffect } from "react";
import { useMantineColorScheme } from "@mantine/core";
import { Props } from "@/pages/blogs/[slug]";
import { cheerioHeadline } from "@/lib/cheerio-headline";

export const BlogId: FC<Props> = ({ blog }) => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  const $ = load(blog.content);
  const content = cheerioHeadline($);

  useEffect(() => {
    hljs.initHighlightingOnLoad();
  }, []);

  return (
    <article className="prose mx-auto max-w-none px-4 md:prose-base lg:prose lg:max-w-12%">
      <img
        src={blog.eyecatch.url}
        alt={`${blog.eyecatch.url}のアイキャッチ`}
        className="mx-auto max-h-[500px] max-w-full md:max-w-4xl"
      />
      <div className={`${dark && "text-white"}`} dangerouslySetInnerHTML={{ __html: content.html() }} />
    </article>
  );
};
