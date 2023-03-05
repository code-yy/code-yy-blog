import { FC, memo, useCallback } from "react";
import { Title as MantineTitle, TitleOrder } from "@mantine/core";
import { useHover, useScrollIntoView } from "@mantine/hooks";
import { TitleSize } from "@mantine/core/lib/Title/Title";
import { useStyles } from "./elements";

type Props = {
  title: string;
  urlTitle: string;
  order: TitleOrder;
  size: TitleSize;
};

export const Headline: FC<Props> = memo(({ title, urlTitle, order, size }) => {
  const { classes, cx } = useStyles();
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLAnchorElement>({ offset: 60 });
  const { hovered, ref } = useHover();

  const clickScroll = useCallback(() => {
    scrollIntoView({ alignment: "start" });
  }, [scrollIntoView]);

  return (
    <MantineTitle
      order={order}
      size={size}
      className={cx(classes.container, order === 3 && classes.nonBorderBottom)}
      ref={ref}
    >
      {title}
      <a
        href={`#${urlTitle}`}
        ref={targetRef}
        onClick={clickScroll}
        className={cx(classes.anchor, hovered && classes.hoveredAnchor)}
      >
        #
      </a>
    </MantineTitle>
  );
});

Headline.displayName = "Memo(Headline)";
