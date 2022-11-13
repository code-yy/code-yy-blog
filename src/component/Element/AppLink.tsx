import Link, { LinkProps } from "next/link";
import { AnchorHTMLAttributes, FC, ReactNode } from "react";

type Props = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    children: ReactNode;
  };

export const AppLink: FC<Props> = ({ href, as, children, ...rest }) => {
  return (
    <Link href={href} as={as} {...rest}>
      {children}
    </Link>
  );
};
