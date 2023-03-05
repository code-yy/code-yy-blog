import "highlight.js/styles/github.css";
import hljs from "highlight.js";

import { Box, Paper, Title, TypographyStylesProvider, Text, Image } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { load } from "cheerio";
import { FC, useEffect } from "react";
import { BsClock } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { cheerioHeadline } from "@/lib/cheerio-headline";
import { Blog } from "@/module/blog";
import { format } from "@/lib/util/date";
import { useStyles } from "./elements";

type Props = {
  blog: Blog;
};

export const BlogContent: FC<Props> = ({ blog }) => {
  const { classes, theme, cx } = useStyles();
  const mediaQuery = useMediaQuery("(min-width: 768px)");
  const iconSize = mediaQuery ? 16 : 12;
  const dateTimeSize = mediaQuery ? "md" : "sm";

  const $ = load(blog.content);
  const content = cheerioHeadline($);

  useEffect(() => {
    hljs.initHighlightingOnLoad();
  }, []);

  return (
    <Paper className={classes.bodyContainer} radius="md" shadow={"xs"}>
      <Title order={1} className={classes.title}>
        {blog.title}
      </Title>

      <Box className={classes.dateContainer}>
        <Box className={classes.dateWrapper}>
          <BsClock />
          <Text size={dateTimeSize}>{format(blog.createdAt)}</Text>
        </Box>
        <Box className={classes.dateWrapper}>
          <FiEdit size={iconSize} color={theme.colors.gray[7]} />
          <Text size={dateTimeSize}>{format(blog.updatedAt!)}</Text>
        </Box>
      </Box>

      <Image
        radius="md"
        src={blog.eyecatch.url}
        alt={`${blog.eyecatch.url}のアイキャッチ`}
        className={classes.eyecatch}
      />

      <TypographyStylesProvider className={cx("body", classes.content)}>
        <Box dangerouslySetInnerHTML={{ __html: content.html() }} />
      </TypographyStylesProvider>
    </Paper>
  );
};
