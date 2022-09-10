/* eslint-disable @next/next/no-img-element */
import { useMantineColorScheme } from "@mantine/core";
import { FC, useEffect, useState } from "react";
import { AppLoading } from "../../ui/AppLoading";

export const Home: FC = () => {
  const [loading, setLoading] = useState(true);
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  useEffect(() => {
    setLoading(false);
  }, [loading]);

  if (loading) return <AppLoading />;

  return (
    <div className="mx-auto flex max-w-none flex-wrap px-2 sm:px-8 lg:max-w-12%">
      <div className="border p-5 sm:p-10">
        <div className="flex flex-col">
          <h1 className="mr-2 mb-3 text-xl font-bold sm:text-3xl">My name is Yuto Yoshino</h1>
          <div className="mb-3 flex gap-1 sm:gap-3">
            <a href="https://www.twitter.com/codeyy_dev" target="_blank" rel="noreferrer">
              <img
                src="https://img.shields.io/twitter/follow/codeyy_dev?logo=twitter&style=for-the-badge&color=0891b2&labelColor=1c1917"
                alt="twitter"
              />
            </a>
            <a href="https://www.github.com/code-yy" target="_blank" rel="noreferrer">
              <img
                src="https://img.shields.io/github/followers/code-yy?logo=github&style=for-the-badge&color=0891b2&labelColor=1c1917"
                alt="github"
              />
            </a>
          </div>
        </div>
        <div className="mb-2">
          <p className="mb-2 text-base font-bold sm:text-xl">簡単すぎる自己紹介</p>
          <p className="my-2 text-xs sm:text-base">
            - 高卒20歳 フロントエンドエンジニア
            <br />
            - React・Next.js・TypeScript
            <br />
            - Flutter 社内研修 - Node.js 勉強中
            <br />
            - 高校サッカー県大会優勝＆優秀選手賞・インターハイ県準優勝
            <br />
            - 営業職で社内売上2位
            <br />
            - 自営業 YouTube受託など
            <br />
            - 神戸のエンジニア向け勉強会『つながる勉強会』運営者
            <br />- 関西学院大学プログラミング研究会『TechUni』 所属
          </p>
        </div>
        <h3 className="my-2 text-base font-bold sm:text-xl">Skills</h3>
        <h4 className="mb-3 text-sm font-bold">- Frontend</h4>
        <div className="flex gap-2">
          <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg"
              width="36"
              height="36"
              alt="HTML5"
            />
          </a>
          <a href="https://www.w3.org/TR/CSS/#css" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg"
              width="36"
              height="36"
              alt="CSS3"
            />
          </a>
          <a href="https://sass-lang.com/" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg"
              width="36"
              height="36"
              alt="Sass"
            />
          </a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg"
              width="36"
              height="36"
              alt="Javascript"
            />
          </a>
          <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg"
              width="36"
              height="36"
              alt="Typescript"
            />
          </a>
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg"
              width="36"
              height="36"
              alt="React"
            />
          </a>
          <a href="https://nextjs.org/docs" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored.svg"
              width="36"
              height="36"
              alt="NextJs"
            />
          </a>
          <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg"
              width="36"
              height="36"
              alt="TailwindCSS"
            />
          </a>
          <a href="https://mui.com/" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/materialui-colored.svg"
              width="36"
              height="36"
              alt="Material UI"
            />
          </a>
        </div>
        <h4 className="my-3 text-sm font-bold">- Backend</h4>
        <div className="flex gap-2">
          <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg"
              width="36"
              height="36"
              alt="NodeJS"
            />
          </a>
          <a href="https://expressjs.com/" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored-dark.svg"
              width="36"
              height="36"
              alt="Express"
              className={`${dark ? "bg-transparent" : "bg-gray-500"}`}
            />
          </a>
          <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg"
              width="36"
              height="36"
              alt="MySQL"
            />
          </a>
        </div>
        <h4 className="my-3 text-sm font-bold">- Web3</h4>
        <div className="flex gap-2">
          <a href="https://ethereum.org/en/" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/ethereum-colored.svg"
              width="36"
              height="36"
              alt="Ethereum"
            />
          </a>
          <a href="https://metamask.io/" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/metamask-colored.svg"
              width="36"
              height="36"
              alt="MetaMask"
            />
          </a>
        </div>
        <h4 className="my-3 text-sm font-bold">- Socials</h4>
        <div className="flex gap-2">
          <a href="https://www.github.com/code-yy" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/github-dark.svg"
              alt="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/github-dark.svg"
              width="32"
              height="32"
              className={`${dark ? "bg-transparent" : "rounded-md bg-gray-500"}`}
            />
          </a>
          <a href="https://www.twitter.com/codeyy_dev" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/twitter.svg"
              alt="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/twitter.svg"
              width="32"
              height="32"
            />
          </a>
          <a href="http://www.instagram.com/https://www.instagram.com/gourmet.2001/" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/instagram.svg"
              alt="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/instagram.svg"
              width="32"
              height="32"
            />
          </a>
          <a href="https://zenn.dev/yuto76/feed" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/rss.svg"
              alt="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/rss.svg"
              width="32"
              height="32"
            />
          </a>
        </div>
        <h3 className="mt-5 mb-3 text-base font-bold sm:text-xl">Badges</h3>
        <div className="flex">
          <div>
            <a href="https://github.com/code-yy">
              <img
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=code-yy&langs_count=10&title_color=3382ed&text_color=ffffff&icon_color=3382ed&bg_color=0f172a&hide_border=true&locale=en&custom_title=Top%20%Languages"
                alt="Top Languages"
              />
            </a>
          </div>
          <div>
            <a href="http://www.github.com/code-yy">
              <img
                src="https://github-readme-stats.vercel.app/api?username=code-yy&show_icons=true&hide=stars,contribs&count_private=true&title_color=3382ed&text_color=ffffff&icon_color=3382ed&bg_color=0f172a&hide_border=true&show_icons=true"
                alt="code-yy's GitHub stats"
              />
            </a>
            <a href="http://www.github.com/code-yy">
              <img
                src="https://github-readme-streak-stats.herokuapp.com/?user=code-yy&stroke=ffffff&background=0f172a&ring=3382ed&fire=3382ed&currStreakNum=ffffff&currStreakLabel=3382ed&sideNums=ffffff&sideLabels=ffffff&dates=ffffff&hide_border=true"
                alt="code-yy's GitHub stats github-readme-streak-stats.herokuapp.com"
              />
            </a>
          </div>
        </div>
        <a href="http://www.github.com/code-yy">
          <img
            src="https://activity-graph.herokuapp.com/graph?username=code-yy&bg_color=0f172a&color=ffffff&line=3382ed&point=ffffff&area_color=0f172a&area=true&hide_border=true&custom_title=GitHub%20Commits%20Graph"
            alt="GitHub Commits Graph"
            width={828}
          />
        </a>
      </div>
    </div>
  );
};
