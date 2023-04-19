import { Paper, Title } from "@mantine/core";
import { FC } from "react";
import { AppLink } from "@/component/Core";
import { pagesPath } from "@/lib/$path";
import { format } from "@/lib/util/date";
import { Post } from "@/lib/api";
import { useStyles } from "./elements";
import { infoContainer, postCardEmoji, title } from "./styles.css";

type Props = {
  post: Post;
};

export const BlogCard: FC<Props> = ({ post }) => {
  const { classes } = useStyles();

  return (
    <AppLink href={pagesPath.posts._slug(post.slug).$url()}>
      <Paper shadow="md" radius="md" className={classes.paper}>
        <p className={postCardEmoji} dangerouslySetInnerHTML={{ __html: post.emoji }}></p>

        <div className={infoContainer}>
          <Title order={3} className={title}>
            {post.title}
          </Title>

          <p className={classes.createdAt}>{format(post.date)}</p>
        </div>
      </Paper>
    </AppLink>
  );
};
