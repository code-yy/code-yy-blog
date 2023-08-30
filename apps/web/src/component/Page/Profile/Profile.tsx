import { FC, memo } from "react";
import { Headline } from "@/component/Core/Headline";
import { AppLink } from "@/component/Core";
import { Text } from "./Text/Text";
import { SnsList } from "./constants";
import { circleStyle, line, link, liStyle, resumeLinkContainer, ulStyle } from "./styles.css";

export const Profile: FC = memo(() => {
  return (
    <>
      <Headline title={"About Me"} urlTitle={"about-me"} />

      <Text text={"21歳のフロントエンドエンジニアとして働いているユウトです。出身は日本です。🇯🇵🏯"} />
      <Text text={"TypeScript, Reactを主に触っており、最近ではWebパフォーマンス / テスト / DXに興味があります。"} />

      {/* border */}
      <div className={line} />

      <Text
        text={
          "2022年からフルタイムでエンジニアとして働き始め、スピード感のある開発をしていく中で、フロントエンドとバックエンド両方の経験をさせていただけたのはとてもいい経験でした。そして2023年、新しい会社にジョインし、SEOやWebパフォーマンス、デザインシステムの構築など、また新しいことに挑戦し、開発者としてレベルアップすることに注力しています。"
        }
      />

      <Text
        text={
          "空いた時間で、技術のキャッチアップをし、それを実際に自分の手で動かしてみたりすること。理解が足りない部分や、新しく学んだことを記事にすることも好きです。あとは勉強会に行って発表したりすることも好きです。"
        }
      />

      <div className={resumeLinkContainer}>
        <AppLink href={"https://yossydev.github.io/resume/"} className={link}>
          Resumeを見る →
        </AppLink>
      </div>

      {/* border */}
      <div className={line} />
      <ul className={ulStyle}>
        {SnsList.map(({ id, title, href }) => (
          <li key={`${id}-${title}`} className={liStyle}>
            <div className={circleStyle} />
            <AppLink href={href} className={link}>
              {title}
            </AppLink>
          </li>
        ))}
      </ul>
    </>
  );
});

Profile.displayName = "Memo(Profile)";
