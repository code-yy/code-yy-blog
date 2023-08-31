import { GetStaticProps, GetStaticPaths, NextPage } from "next/types";
import markdownToHtml from "zenn-markdown-html";
import Script from "next/script";
import { Head, MainLayout } from "@/component/Layout";
import { BlogDetail } from "@/component/Page/BlogDetail";
import { Post, getAllPosts, getPostBySlug } from "@/lib/api";

type Props = {
  blog: Post;
};

const BlogDetailPage: NextPage<Props> = ({ blog }) => {
  return (
    <>
      <Head title={blog.title} description={blog.content} imageUrl={blog.ogImage} />

      {/* Zenn 埋め込みコンテンツ表示用 */}
      <Script src="https://embed.zenn.studio/js/listen-embed-event.js" />

      <MainLayout>
        <BlogDetail blog={blog} />
      </MainLayout>
    </>
  );
};

type Result = { blog: Post };
type Params = { slug: string };
export const getStaticProps: GetStaticProps<Result, Params> = async ({ params }) => {
  const post = getPostBySlug<Post>({
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    slug: params!.slug,
    fields: ["title", "slug", "content", "ogImage", "coverImage", "published"],
  });

  const content = markdownToHtml((post && post.content) || "", {
    embedOrigin: "https://embed.zenn.studio",
  });

  if (post?.published === false) {
    return { notFound: true };
  }

  return {
    props: {
      blog: {
        ...post,
        content,
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts(["slug", "published"]);

  const paths = posts.map((post) => {
    return { params: { slug: post.slug } };
  });

  return { paths, fallback: false };
};

export default BlogDetailPage;
