import { Metadata } from "next";
import { notFound } from "next/navigation";
import markdownToHtml from "zenn-markdown-html";
import Script from "next/script";
import { MainLayout } from "@/component/Layout";
import { BlogDetail } from "@/component/Page/BlogDetail";
import { Post, getPostBySlug } from "@/lib/api";

const getStaticPostBySlug = async ({ params }: { params: string }) => {
  const post = getPostBySlug<Post>({
    slug: params,
    fields: ["title", "description", "slug", "content", "ogImage", "coverImage", "published"],
  });

  const content = markdownToHtml((post && post.content) || "", {
    embedOrigin: "https://embed.zenn.studio",
  });

  return {
    blog: {
      ...post,
      content,
    },
  };
};

export const generateMetadata = async ({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata> => {
  const { blog } = await getStaticPostBySlug({ params: params.slug });
  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      images: [blog.emoji ?? "/noimage.png"],
    },
    twitter: {
      title: blog.title,
      description: blog.description,
      images: [blog.emoji ?? "/noimage.png"],
      card: "summary",
    },
  };
};

const BlogDetailPage = async ({ params }: { params: { slug: string } }) => {
  const { blog } = await getStaticPostBySlug({ params: params.slug });

  if (blog === undefined) {
    notFound();
  }

  return (
    <>
      {/* Zenn 埋め込みコンテンツ表示用 */}
      <Script src="https://embed.zenn.studio/js/listen-embed-event.js" />
      <MainLayout>
        <BlogDetail blog={blog} />
      </MainLayout>
    </>
  );
};

export default BlogDetailPage;
