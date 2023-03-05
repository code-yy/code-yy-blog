import { GetStaticProps, GetStaticPaths, NextPage } from "next/types";
import { Head } from "@/component/Layout";
import { BlogDetail } from "@/component/Page/BlogDetail";
import { Blog, blogRepository } from "@/module/blog";
import { BlogDetailLayout } from "@/component/Layout/BlogDetailLayout";

export type Props = {
  blog: Blog;
};

const BlogIdPage: NextPage<Props> = ({ blog }) => {
  return (
    <>
      <Head title={blog.title} description={blog.description} url={blog.eyecatch.url} />
      <BlogDetailLayout>
        <BlogDetail blog={blog} />
      </BlogDetailLayout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await blogRepository.findPath();
  return { paths: res, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await blogRepository.findOne(context);
  return { props: { blog: res } };
};

export default BlogIdPage;
