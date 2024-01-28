import { FC } from "react";
import { AppLink } from "@/component/Core";
import { Headline } from "@/component/Core/Headline";
import { pagesPath } from "@/lib/$path";
import { link, text } from "./styles.css";

export const Profile: FC = () => {
  return (
    <div>
      <Headline title={"Hi! I'm Yuto"} urlTitle={"hi-im-yuto-yoshino"} />

      <div className={text}>
        {
          "22歳のフロントエンドエンジニア。TypeScript, Reactを主に触っており、最近ではWebパフォーマンス / フロントエンドテスト / DXに興味があります。"
        }
        <AppLink href={pagesPath.profile.$url()} className={link}>
          Read more →
        </AppLink>
      </div>
    </div>
  );
};
