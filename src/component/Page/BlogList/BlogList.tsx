import { FC } from "react";
import { Box } from "@mantine/core";
import { Props } from "@/pages";
import { BlogCard } from "./BlogCard";
import { Category } from "./Category";

export const BlogList: FC<Props> = ({ blogs, categories }) => {
  return (
    <Box className="mx-auto max-w-none flex-wrap justify-center px-3 sm:justify-start sm:pr-8 sm:pl-0">
      {categories.contents.map((category) => (
        <Category key={category.id} category={category} />
      ))}
      {blogs.contents.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </Box>
  );
};
