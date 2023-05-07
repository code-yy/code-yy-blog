type SnsTitle = "Twitter" | "GitHub" | "LinkedIn" | "Instagram" | "Email" | "Zenn";

type Sns = {
  id: number;
  title: SnsTitle;
  href: string;
};

export const SnsList: Sns[] = [
  {
    id: 1,
    title: "Twitter",
    href: "https://twitter.com/codeyy_dev",
  },
  {
    id: 2,
    title: "GitHub",
    href: "https://github.com/code-yy",
  },
  {
    id: 3,
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/yutodev",
  },
  {
    id: 5,
    title: "Email",
    href: "mailto:codeyy021@gmail.com",
  },
  {
    id: 6,
    title: "Zenn",
    href: "https://zenn.dev/yuto76",
  },
];
