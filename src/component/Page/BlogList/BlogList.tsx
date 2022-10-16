import { FC } from "react";
import { Box, createStyles } from "@mantine/core";
import { useRouter } from "next/router";
import { AppBadge } from "@/component/Element";
import { LINK } from "@/constant/link";
import { Props } from "@/pages";
import { Blog } from "@/module/blog";
import { BlogCard } from "./BlogCard";

export const BlogList: FC<Props<Blog[]>> = ({ blogs, categories }) => {
  const { classes } = useStyles();
  const router = useRouter();
  const selectedHome = router.asPath === LINK.HOME;

  return (
    <Box className="mx-auto max-w-none flex-wrap justify-center sm:justify-start sm:pr-8 sm:pl-0">
      <Box className={classes.container}>
        <AppBadge text={"All"} href={LINK.HOME} isSelected={selectedHome} />
        {categories.contents.map((category) => {
          const selectedCategory = router.query.slug === category.slug;
          return (
            <AppBadge
              key={category.id}
              text={`${category.name}`}
              href={`/category/${category.slug}`}
              isSelected={selectedCategory}
            />
          );
        })}
      </Box>
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </Box>
  );
};

const useStyles = createStyles((theme) => ({
  container: {
    [theme.fn.smallerThan("md")]: {
      width: "365px",
      whiteSpace: "nowrap",
      overflowX: "scroll",
    },
  },
}));
