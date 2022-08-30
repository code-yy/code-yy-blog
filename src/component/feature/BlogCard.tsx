import { Paper, Title, Button, Text } from "@mantine/core";
import { FC } from "react";
import { Blog } from "@/type/blog";
import { AppLink } from "../ui/AppLink";

type Props = {
  blog: Blog;
};

export const BlogCard: FC<Props> = ({ blog }) => {
  return (
    <div>
      <Paper
        shadow="md"
        p="xl"
        radius="md"
        sx={{ backgroundImage: `url(${blog.eyecatch.url})` }}
        className="mx-auto flex h-[440px] w-[350px] flex-col items-start justify-between bg-cover bg-center sm:w-[260px]"
      >
        <div>
          <Text className="font-greycliff" size="xs">
            {blog.category.name}
          </Text>
          <Title order={3} className="font-medium uppercase text-black	opacity-70">
            {blog.title}
          </Title>
        </div>
        <AppLink href={`/blogs/${blog.slug}`}>
          <Button variant="white" color="dark" className="bg-gray-500 text-white">
            Read article
          </Button>
        </AppLink>
      </Paper>
    </div>
  );
};
