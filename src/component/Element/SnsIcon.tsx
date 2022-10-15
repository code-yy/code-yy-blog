import { BrandTwitter, BrandGithub, BrandInstagram, BrandAmazon } from "tabler-icons-react";
import { ActionIcon } from "@mantine/core";
import { FC } from "react";
import { LINK } from "@/constant/link";
import { AppLink } from "./AppLink";

const SnsIcons = [
  {
    icon: <BrandTwitter size={18} />,
    link: LINK.TWITTER,
  },
  {
    icon: <BrandGithub size={18} />,
    link: LINK.GITHUB,
  },
  {
    icon: <BrandInstagram size={18} />,
    link: LINK.INSTAGRAM,
  },
  {
    icon: <BrandAmazon size={18} />,
    link: LINK.AMAZON,
  },
];

export const SnsIcon: FC = () => {
  return (
    <>
      {SnsIcons.map(({ icon, link }) => {
        return (
          <AppLink key={link} href={link} target="_blank" rel="noreferrer">
            <ActionIcon size="lg">{icon}</ActionIcon>
          </AppLink>
        );
      })}
    </>
  );
};
