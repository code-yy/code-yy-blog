import { FC } from "react";
import { Box, createStyles } from "@mantine/core";
import { useRouter } from "next/dist/client/router";
import { AppBadge } from "@/component/Element";
import { Props } from "@/pages";
import { Blog } from "@/module/blog";
import { pagesPath } from "@/lib/$path";
import { LINK } from "@/constant/link";
import { BlogCard } from "./BlogCard";

export const BlogList: FC<Props<Blog[]>> = ({ blogs, categories }) => {
  const { classes } = useStyles();
  const router = useRouter();
  const selectedHome = router.asPath === LINK.HOME;

  return (
    <Box className="mx-auto max-w-none flex-wrap justify-center sm:justify-start sm:pr-8 sm:pl-0">
      <Box className={classes.container}>
        <AppBadge text={"All"} href={LINK.HOME} isSelected={selectedHome} />
        {categories.contents.map((category, index) => {
          const selectedCategory = router.query.slug === category.slug;
          return (
            <AppBadge
              key={index}
              text={category.name}
              href={pagesPath.category._slug(category.slug).$url()}
              isSelected={selectedCategory}
            />
          );
        })}
      </Box>
      <Box className={classes.blogContainer}>
        {blogs.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </Box>
    </Box>
  );
};

const useStyles = createStyles((theme) => ({
  container: {
    [theme.fn.smallerThan("md")]: {
      width: "365px",
      whiteSpace: "nowrap",
      overflowX: "scroll",
      margin: "0 10px",
    },
  },

  blogContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "1.2rem",
    [theme.fn.smallerThan("md")]: {
      gridTemplateColumns: "1fr 1fr",
      margin: "0 10px 20px",
    },
  },
}));
