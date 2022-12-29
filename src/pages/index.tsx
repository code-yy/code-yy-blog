import { GetStaticProps, NextPage } from "next/types";
import { Head, MainLayout } from "@/component/Layout";
import { BlogList } from "@/component/Page/BlogList";
import { blogRepository, Blogs } from "@/module/blog";
import { Categories, categoryRepository } from "@/module/category";
import { rssClient } from "@/lib/rss/rss-client";

export type Props<T> = {
  blogs: T;
  categories: Categories;
};

const HomePage: NextPage<Props<Blogs>> = ({ blogs, categories }) => {
  const { contents } = blogs;

  return (
    <>
      <Head />
      <MainLayout>
        <BlogList blogs={contents} categories={categories} />
      </MainLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const blogs = await blogRepository.find();
  const rss = rssClient.find();
  const mergedContents = [...blogs.contents, ...rss];

  mergedContents.sort((a, b) => {
    if (a.createdAt! < b.createdAt!) {
      return 1;
    } else {
      return -1;
    }
  });
  const categories = await categoryRepository.find();

  return {
    props: {
      blogs: {
        contents: mergedContents,
        totalCount: blogs.totalCount,
        limit: blogs.limit,
        offset: blogs.offset,
      },
      categories: { contents: categories.contents },
    },
  };
};

export default HomePage;
