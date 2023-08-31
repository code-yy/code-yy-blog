import { FC } from "react";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { pagesPath } from "@/lib/$path";
import { LINK } from "@/constant/link";
import { AppLink } from "@/component/Core";
import { container, wrapper, title, iconsContainer, icon } from "./styles.css";

export const Header: FC = () => {
  return (
    <div className={container}>
      <div className={wrapper}>
        <AppLink href={pagesPath.$url()} className={title}>
          Yuto Blog
        </AppLink>

        <div className={iconsContainer}>
          <AppLink href={LINK.TWITTER} target={"_blank"} className={icon}>
            <BsTwitter size={24} color="white" />
          </AppLink>
          <AppLink href={LINK.GITHUB} target={"_blank"} className={icon}>
            <BsGithub size={24} color="white" />
          </AppLink>
        </div>
      </div>
    </div>
  );
};
