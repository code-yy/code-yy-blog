import { LINK } from "@/constant/link";

type Sns = {
  id: number;
  title: "Twitter" | "GitHub" | "LinkedIn" | "Instagram" | "Email" | "Zenn";
  href: string;
};

export const SnsList: Sns[] = [
  {
    id: 1,
    title: "Twitter",
    href: LINK.TWITTER,
  },
  {
    id: 2,
    title: "GitHub",
    href: LINK.GITHUB,
  },
  {
    id: 3,
    title: "LinkedIn",
    href: LINK.LINKEDIN,
  },
  {
    id: 5,
    title: "Email",
    href: LINK.EMAIL,
  },
  {
    id: 6,
    title: "Zenn",
    href: LINK.ZENN,
  },
];
