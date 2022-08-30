import { GetStaticProps, GetStaticPaths } from "next/types";
import { Layout } from "@/component/layout";
import { Blog, Blogs } from "@/type/blog";
import { NextPageWithLayout } from "@/type/next-type";
import { client } from "@/lib/microcms-client";
import { BlogId } from "@/component/page/blogs/blogId";

export type Props = {
  blog: Blog;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const blogs: Blogs = await client.get({ endpoint: "blogs" });

  const paths = blogs.contents.map((blog) => `/blogs/${blog.slug}`);
  return { paths: paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const blogs: Blogs = await client.get({
    endpoint: "blogs",
  });

  const blog: Blog[] = blogs.contents.filter((blog) => {
    return blog.slug === context.params?.slug;
  });

  return {
    props: {
      blog: blog[0],
    },
  };
};

const BlogIdPage: NextPageWithLayout<Props> = ({ blog }) => {
  return <BlogId blog={blog} />;
};

BlogIdPage.getLayout = Layout;

export default BlogIdPage;
