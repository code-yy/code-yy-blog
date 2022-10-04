import { FC, useState } from "react";
import { Pagination } from "@mantine/core";
import { useRouter } from "next/router";
import { Props } from "@/pages/blogs/page/[id]";
import { BlogCard } from "@/component/feature/BlogCard";

export const BlogList: FC<Props> = ({ blogs }) => {
  const { contents, totalCount, limit } = blogs;
  const [page, setPage] = useState<number>(1);
  const router = useRouter();

  // 投稿数 / 8 = ページ数(整数)
  const totalPages: number = Math.ceil(totalCount / limit);

  const handleChange = (pageId: number) => {
    setPage(pageId);
    router.push(`/blogs/page/${pageId}`);
  };

  return (
    <>
      <div className="mx-auto min-h-[73vh] max-w-none flex-wrap justify-center gap-10 px-3 sm:justify-start sm:px-8 lg:gap-12 xl:max-w-12%">
        {contents.map((blog) => {
          return (
            <div key={blog.id}>
              <BlogCard blog={blog} />
            </div>
          );
        })}
      </div>
      <div className="my-7 flex justify-center">
        <Pagination
          total={totalPages}
          page={Number(router.query.id) || page}
          onChange={handleChange}
          size="sm"
          radius="md"
          color="indigo"
        />
      </div>
    </>
  );
};
