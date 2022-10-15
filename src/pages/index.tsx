import { GetStaticProps, NextPage } from "next";
import { Head, MainLayout } from "@/component/Layout";
import { BlogList } from "@/component/Page/BlogList";
import { blogRepository, Blogs } from "@/module/blog";

export type Props = {
  blogs: Blogs;
};

const HomePage: NextPage<Props> = ({ blogs }) => {
  return (
    <>
      <Head />
      <MainLayout>
        <BlogList blogs={blogs} />
      </MainLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await blogRepository.find();

  return {
    props: {
      blogs: {
        contents: res.contents,
        totalCount: res.totalCount,
        limit: res.limit,
        offset: res.offset,
      },
    },
  };
};

export default HomePage;
