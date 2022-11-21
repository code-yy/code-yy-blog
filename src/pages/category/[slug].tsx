import { GetStaticProps, GetStaticPaths, NextPage } from "next/types";
import { Head, MainLayout } from "@/component/Layout";
import { Blog, blogRepository } from "@/module/blog";
import { categoryRepository } from "@/module/category";
import { BlogList } from "@/component/Page/BlogList";
import { rssClient } from "@/lib/rss/rss-client";
import { Props } from "..";

const CategoryBlogListPage: NextPage<Props<Blog[]>> = ({ blogs, categories }) => {
  return (
    <>
      <Head />
      <MainLayout>
        <BlogList blogs={blogs} categories={categories} />
      </MainLayout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await blogRepository.findCategoryPath();
  const rss = rssClient.findCategory();
  const paths = [...res, rss];
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const blogs = await blogRepository.findCategory(context);
  const rss = rssClient.find();
  const isRss = context.params?.slug === rss[0].category?.slug;

  const categories = await categoryRepository.find();

  return {
    props: {
      blogs: isRss ? rss : blogs,
      categories: { contents: categories.contents },
    },
  };
};

export default CategoryBlogListPage;
