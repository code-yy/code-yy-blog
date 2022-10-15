import { ParsedUrlQuery } from "querystring";
import { GetStaticPropsContext, PreviewData } from "next";
import { client } from "@/lib/microcms-client";
import { Blog } from ".";

export type Blogs = {
  contents: Blog[];
  limit: number;
  offset: number;
  totalCount: number;
};

export const blogRepository = {
  async find(): Promise<Blogs> {
    const res = await client.get({ endpoint: "blogs" });
    return res;
  },

  async findOne(context: GetStaticPropsContext<ParsedUrlQuery, PreviewData>): Promise<Blog> {
    const res: Blogs = await client.get({ endpoint: "blogs" });
    const blog: Blog[] = res.contents.filter((blog) => blog.slug === context.params?.slug);
    return blog[0];
  },

  async findPath() {
    const blogs: Blogs = await client.get({ endpoint: "blogs" });
    const paths = blogs.contents.map((blog) => `/blogs/${blog.slug}`);
    return paths;
  },
};
