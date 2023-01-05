import { BrandTwitter, BrandGithub, BrandInstagram, BrandAmazon } from "tabler-icons-react";
import { ActionIcon } from "@mantine/core";
import { FC } from "react";
import { LINK } from "@/constant/link/link";
import { AppLink } from "@/component/Element";

const SnsIcons = [
  {
    icon: <BrandTwitter size={25} />,
    link: LINK.TWITTER,
  },
  {
    icon: <BrandGithub size={25} />,
    link: LINK.GITHUB,
  },
  {
    icon: <BrandInstagram size={25} />,
    link: LINK.INSTAGRAM,
  },
  {
    icon: <BrandAmazon size={25} />,
    link: LINK.AMAZON,
  },
];

export const SnsIcon: FC = () => {
  return (
    <>
      {SnsIcons.map(({ icon, link }, index) => {
        return (
          <AppLink key={index} href={link} target="_blank" rel="noreferrer">
            <ActionIcon size="lg" mr={5}>
              {icon}
            </ActionIcon>
          </AppLink>
        );
      })}
    </>
  );
};
