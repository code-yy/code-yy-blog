import { FC } from "react";
import { Box } from "@mantine/core";
import { Blog } from "@/module/blog";
import { Categories } from "@/module/category";
import { Category } from "../BlogList/Category";
import { BlogCard } from "../BlogList/BlogCard";

type Props = {
  blogs: Blog[];
  categories: Categories;
};

export const CategoryBlogList: FC<Props> = ({ blogs, categories }) => {
  return (
    <Box className="mx-auto max-w-none flex-wrap justify-center px-3 sm:justify-start sm:pr-8 sm:pl-0">
      {categories.contents.map((category) => (
        <Category key={category.id} category={category} />
      ))}
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </Box>
  );
};
