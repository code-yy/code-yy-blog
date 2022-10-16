import { FC } from "react";
import { Badge, Box, createStyles, Text } from "@mantine/core";
import { useRouter } from "next/router";
import { Blog } from "@/module/blog";
import { Categories } from "@/module/category";
import { AppLink } from "@/component/Element";
import { LINK } from "@/constant/link";
import { Category } from "../BlogList/Category";
import { BlogCard } from "../BlogList/BlogCard";

type Props = {
  blogs: Blog[];
  categories: Categories;
};

export const CategoryBlogList: FC<Props> = ({ blogs, categories }) => {
  const { classes, cx } = useStyles();
  const router = useRouter();
  const isHome = router.asPath === LINK.HOME;

  return (
    <Box className="mx-auto max-w-none flex-wrap justify-center px-3 sm:justify-start sm:pr-8 sm:pl-0">
      <Badge
        className={cx(classes.container, { [classes.selected]: isHome })}
        size={"lg"}
        color={isHome ? "pink" : "blue"}
      >
        <AppLink href={`/`} className={classes.link}>
          <Text size={"sm"}>#All</Text>
        </AppLink>
      </Badge>
      {categories.contents.map((category) => (
        <Category key={category.id} category={category} />
      ))}
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
