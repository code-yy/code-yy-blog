import Link, { LinkProps } from "next/link";
import { FC, ReactNode } from "react";

type Props = LinkProps & {
  children: ReactNode;
};

export const AppLink: FC<Props> = ({ href, as, children, ...rest }) => {
  return (
    <Link href={href} as={as} {...rest}>
      {children}
    </Link>
  );
};
