import { Text } from "@mantine/core";
import { FC, memo } from "react";
import { AppLink } from "@/component/Core";
import { Headline } from "@/component/Core/Headline";
import { pagesPath } from "@/lib/$path";
import { link, text } from "./styles.css";

export const Profile: FC = memo(() => {
  return (
    <div>
      <Headline title={"Hi! I'm Yuto"} urlTitle={"hi-im-yuto-yoshino"} />

      <Text className={text}>
        {
          "21歳のフロントエンドエンジニア。TypeScript, Reactを主に触っており、最近ではWebパフォーマンス / フロントエンドテスト / DXに興味があります。"
        }
        <AppLink href={pagesPath.profile.$url()} className={link}>
          Read more →
        </AppLink>
      </Text>
    </div>
  );
});

Profile.displayName = "Memo(Profile)";
