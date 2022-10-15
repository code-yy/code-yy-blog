import { Paper, Title, Text } from "@mantine/core";
import { FC } from "react";
import { AppLink } from "@/component/Element";
import { Blog } from "@/module/blog";

type Props = {
  blog: Blog;
};

export const BlogCard: FC<Props> = ({ blog }) => {
  return (
    <AppLink href={`/blogs/${blog.slug}`}>
      <Paper shadow="md" p="xl" radius="md" className="mx-auto mb-3 flex">
        <div>
          <Text className="font-greycliff" size="xs">
            {blog.category.name}
          </Text>
          <Title order={3} className="font-greycliff font-bold opacity-70">
            {blog.title}
          </Title>
        </div>
      </Paper>
    </AppLink>
  );
};
