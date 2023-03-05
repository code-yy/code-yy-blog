import { Box, Text } from "@mantine/core";
import { FC, memo } from "react";
import { AppLink } from "@/component/Core";
import { Headline } from "@/component/Core/Headline";
import { pagesPath } from "@/lib/$path";
import { useStyles } from "./elements";

export const Profile: FC = memo(() => {
  const { classes } = useStyles();

  return (
    <Box>
      <Headline title={"Hi! I'm Yuto"} urlTitle={"hi-im-yuto-yoshino"} size={30} order={2} />

      <Text className={classes.text}>
        {
          "21歳のフロントエンドエンジニア。TypeScript, Reactを主に触っており、最近ではWebパフォーマンスに興味があります。"
        }
        <AppLink href={pagesPath.profile.$url()} className={classes.link}>
          Read more →
        </AppLink>
      </Text>
    </Box>
  );
});

Profile.displayName = "Memo(Profile)";
