import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export type Post = {
  title: string;
  date: string;
  slug: string;
  emoji: string;
  content: string;
  ogImage: string;
  coverImage: string;
  published: boolean;
};

type GetPostBySlugParams = { slug: string; fields: string[] };
type GetPostBySlugResponse = { [key: string]: any };

function formatFields(
  data: { [key: string]: string },
  content: string,
  realSlug: string,
  fields: string[]
): GetPostBySlugResponse {
  /**
   * 必要最低限のデータだけ返却する
   */
  const items: { [key: string]: string } = {};

  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }
    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export function getPostBySlug<T extends GetPostBySlugResponse>({ slug, fields }: GetPostBySlugParams): T {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const res = formatFields(data, content, realSlug, fields);

  return res as T;
}

export function getAllPosts(fields: string[] = []): Post[] {
  const slugs = getPostSlugs();
  return (
    slugs
      .map((slug) => getPostBySlug<Post>({ slug, fields }))
      .filter((post) => post.published)
      // 日付の新しい順にソートする
      .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  );
}
