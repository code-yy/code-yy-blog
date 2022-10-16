import { GetStaticProps, GetStaticPaths, NextPage } from "next/types";
import { Head, MainLayout } from "@/component/Layout";
import { Blog, blogRepository } from "@/module/blog";
import { Categories, categoryRepository } from "@/module/category";
import { CategoryBlogList } from "@/component/Page/CategoryBlogList";

export type Props = {
  blogs: Blog[];
  categories: Categories;
};

const CategoryBlogListPage: NextPage<Props> = ({ blogs, categories }) => {
  return (
    <>
      <Head />
      <MainLayout>
        <CategoryBlogList blogs={blogs} categories={categories} />
      </MainLayout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await blogRepository.findCategoryPath();
  return { paths: res, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const blogs = await blogRepository.findCategory(context);
  const categories = await categoryRepository.find();

  return {
    props: {
      blogs: blogs,
      categories: { contents: categories.contents },
    },
  };
};

export default CategoryBlogListPage;
