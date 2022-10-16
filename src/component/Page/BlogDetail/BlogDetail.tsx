import "highlight.js/styles/github.css";
import hljs from "highlight.js";

import { load } from "cheerio";
import { FC, useEffect } from "react";
import { Box, createStyles, Image, TypographyStylesProvider } from "@mantine/core";
import { cheerioHeadline } from "@/lib/cheerio-headline";
import { Props } from "@/pages/blogs/[slug]";

export const BlogDetail: FC<Props> = ({ blog }) => {
  const { classes } = useStyle();

  const $ = load(blog.content);
  const content = cheerioHeadline($);

  useEffect(() => {
    hljs.initHighlightingOnLoad();
  }, []);

  return (
    <article className={classes.container}>
      <Image radius="md" src={blog.eyecatch.url} alt={`${blog.eyecatch.url}のアイキャッチ`} />
      <TypographyStylesProvider>
        <Box className={classes.blog} dangerouslySetInnerHTML={{ __html: content.html() }} />
      </TypographyStylesProvider>
    </article>
  );
};

const useStyle = createStyles(() => ({
  container: {
    marginRight: "2rem",
    backgroundColor: "white",
  },
  blog: {
    padding: "25px 40px",
  },
}));
