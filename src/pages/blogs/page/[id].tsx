import { GetStaticPaths, GetStaticProps } from "next";
import { client } from "@/lib/microcms-client";
import { Layout, SEO } from "@/component/layout";
import { Blogs } from "@/type/blog";
import { NextPageWithLayout } from "@/type/next-type";
import { BlogList } from "@/component/page/blogs/blogs";

export type Props = {
  blogs: Blogs;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const repos = await client.get({ endpoint: "blogs" });

  const PER_PAGE = 5;

  const range = (start: number, end: number) => {
    return [...Array(end - start + 1)].map((_, i) => start + i);
  };

  const paths = range(1, Math.ceil(repos.totalCount / PER_PAGE)).map((repo) => {
    return `/blogs/page/${repo}`;
  });

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as { id: string };

  const data = await client.get({
    endpoint: "blogs",
    queries: { offset: (Number(id) - 1) * 6, limit: 6 },
  });

  return {
    props: {
      blogs: {
        contents: data.contents,
        totalCount: data.totalCount,
        limit: data.limit,
        offset: data.offset,
      },
    },
  };
};

const BlogListPage: NextPageWithLayout<Props> = ({ blogs }) => {
  return (
    <>
      <SEO
        title="ユウトブログ"
        description="技術ブログや、近況報告などをやっていきます"
        url="https://lh3.googleusercontent.com/wR7ElVGqrF2okr0ibllfrVAA5-uEKcrXjr4xDjX9lA4YC4f_8x8_jl6vLDSAfbOFMn5uDemDz2q-6-h-pwbHLV_0GaZjl04pZ7UhpYw=s0"
      />
      <BlogList blogs={blogs} />
    </>
  );
};

BlogListPage.getLayout = Layout;

export default BlogListPage;
