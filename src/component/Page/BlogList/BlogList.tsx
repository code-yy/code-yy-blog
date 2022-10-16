import { FC } from "react";
import { Badge, Box, createStyles, Text } from "@mantine/core";
import { useRouter } from "next/router";
import { useMediaQuery } from "@mantine/hooks";
import { AppLink } from "@/component/Element";
import { LINK } from "@/constant/link";
import { Props } from "@/pages";
import { Blog } from "@/module/blog";
import { BlogCard } from "./BlogCard";
import { Category } from "./Category";

export const BlogList: FC<Props<Blog[]>> = ({ blogs, categories }) => {
  const { classes, cx } = useStyles();
  const router = useRouter();
  const isHome = router.asPath === LINK.HOME;
  const largeScreen = useMediaQuery("(min-width: 900px)");

  return (
    <Box className="mx-auto max-w-none flex-wrap justify-center sm:justify-start sm:pr-8 sm:pl-0">
      <Box className={classes.category}>
        <Badge
          className={cx(classes.container, { [classes.selected]: isHome })}
          size={largeScreen ? "lg" : "md"}
          color={isHome ? "pink" : "blue"}
        >
          <AppLink href={`/`} className={classes.link}>
            <Text size={largeScreen ? "sm" : "xs"}>#All</Text>
          </AppLink>
        </Badge>
        {categories.contents.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </Box>
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </Box>
  );
};

const useStyles = createStyles((theme) => ({
  container: {
    padding: "0",
    margin: "0 10px 10px 0",
    textTransform: "none",
  },
  category: {
    [theme.fn.smallerThan("md")]: {
      width: "365px",
      whiteSpace: "nowrap",
      overflowX: "scroll",
    },
  },
  link: {
    padding: "0 13px",
    display: "flex",
    alignItems: "center",
    height: "26px",
    cursor: "pointer",
  },
  selected: {
    border: `1px solid ${theme.colors.pink[5]}`,
  },
}));
