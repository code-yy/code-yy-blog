import { FC, memo, useCallback } from "react";
import { useScrollIntoView } from "@mantine/hooks";
import { anchor, borderBottom, container } from "./styles.css";

type Props = {
  title: string;
  urlTitle: string;
  hasBorderBottom?: "no" | "need";
};

export const Headline: FC<Props> = memo(({ title, urlTitle, hasBorderBottom = "need" }) => {
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLAnchorElement>({ offset: 60 });

  const clickScroll = useCallback(() => {
    scrollIntoView({ alignment: "start" });
  }, [scrollIntoView]);

  return (
    <h2 className={`${container} ${borderBottom[hasBorderBottom]}`}>
      {title}
      <a href={`#${urlTitle}`} ref={targetRef} className={anchor} onClick={clickScroll}>
        #
      </a>
    </h2>
  );
});

Headline.displayName = "Memo(Headline)";
