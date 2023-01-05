import "highlight.js/styles/github.css";
import hljs from "highlight.js";

import { load } from "cheerio";
import { FC, useEffect } from "react";
import { Box, createStyles, Image, Paper, Text, Title, TypographyStylesProvider } from "@mantine/core";
import { ClockHour5, Edit } from "tabler-icons-react";

import { useMediaQuery } from "@mantine/hooks";
import { cheerioHeadline } from "@/lib/cheerio-headline";
import { Props } from "@/pages/blogs/[slug]";
import { format } from "@/lib/util/date";

export const BlogDetail: FC<Props> = ({ blog }) => {
  const { classes, theme } = useStyle();
  const mediaQuery = useMediaQuery("(min-width: 768px)");
  const iconSize = mediaQuery ? 16 : 12;
  const dateTimeSize = mediaQuery ? "md" : "sm";

  const $ = load(blog.content);
  const content = cheerioHeadline($);

  useEffect(() => {
    hljs.initHighlightingOnLoad();
  }, []);

  return (
    <Paper className={classes.container} radius="md">
      <Title order={2} className={classes.title}>
        {blog.title}
      </Title>
      <Box className={classes.dateContainer}>
        <Box className={classes.dateWrapper}>
          <ClockHour5 size={iconSize} color={theme.colors.gray[7]} />
          <Text size={dateTimeSize}>{format(blog.createdAt)}</Text>
        </Box>
        <Box className={classes.dateWrapper}>
          <Edit size={iconSize} color={theme.colors.gray[7]} />
          <Text size={dateTimeSize}>{format(blog.updatedAt!)}</Text>
        </Box>
      </Box>
      <Image
        radius="md"
        src={blog.eyecatch.url}
        alt={`${blog.eyecatch.url}のアイキャッチ`}
        className={classes.eyecatch}
      />
      <TypographyStylesProvider>
        <Box dangerouslySetInnerHTML={{ __html: content.html() }} />
      </TypographyStylesProvider>
    </Paper>
  );
};

const useStyle = createStyles((theme) => ({
  container: {
    marginRight: "2rem",
    padding: "24px",
    backgroundColor: "white",
    [theme.fn.smallerThan("md")]: {
      padding: "10px",
      margin: "0 0 20px",
    },
  },
  title: {
    fontSize: "26px",
    [theme.fn.smallerThan("md")]: {
      fontSize: "20px",
    },
  },
  dateContainer: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    margin: "16px 0",
  },
  dateWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },
  eyecatch: {
    width: "60%",
    margin: "0 auto",
    marginBottom: "40px",
    [theme.fn.smallerThan("md")]: {},
  },
}));
