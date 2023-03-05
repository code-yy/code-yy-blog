import { GetStaticProps, NextPage } from "next/types";
import { Head, MainLayout } from "@/component/Layout";
import { Home } from "@/component/Page/Home";
import { blogRepository, Blogs } from "@/module/blog";
import { rssClient } from "@/lib/rss/rss-client";

type Props = {
  blogs: Blogs;
};

const HomePage: NextPage<Props> = ({ blogs }) => {
  const { contents } = blogs;

  return (
    <>
      <Head />
      <MainLayout>
        <Home blogs={contents} />
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

  return {
    props: {
      blogs: {
        contents: mergedContents,
        totalCount: blogs.totalCount,
        limit: blogs.limit,
        offset: blogs.offset,
      },
    },
  };
};

export default HomePage;
