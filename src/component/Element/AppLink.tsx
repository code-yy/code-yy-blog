import Link, { LinkProps } from "next/link";
import { DetailedHTMLProps, AnchorHTMLAttributes, FC } from "react";

type Props = LinkProps & DetailedHTMLProps<Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">, HTMLAnchorElement>;

export const AppLink: FC<Props> = ({ href, as, children, ...rest }) => {
  return (
    <Link href={href} as={as}>
      <a {...rest}>{children}</a>
    </Link>
  );
};
