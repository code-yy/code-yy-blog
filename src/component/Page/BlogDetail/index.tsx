import { FC, useEffect, useState } from "react";
import { ActionIcon, Box, Group, Overlay, Paper } from "@mantine/core";
import tocbot from "tocbot";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";
import { Props } from "@/pages/blogs/[slug]";
import { theme } from "@/constant/theme";
import { useMediaQueryMin } from "@/hooks/useMediaQuery";
import { TocCard } from "./Toc/TocCard";
import { TocDialog } from "./Toc/TocDialog";
import { BlogContent } from "./Content";
import { useStyles } from "./elements";

export const BlogDetail: FC<Props> = ({ blog }) => {
  const [open, setOpen] = useState(false);
  const { classes, cx } = useStyles();
  const [largerThanMd] = useMediaQueryMin("md", true);

  useEffect(() => {
    tocbot.init({
      tocSelector: ".toc",
      contentSelector: ".body",
      headingSelector: "h2, h3, h4, h5, h6",
      scrollSmoothOffset: -10,
    });
    return () => tocbot.destroy();
  }, [largerThanMd]);

  return (
    <Box className={classes.mainContainer}>
      {!largerThanMd && (
        <>
          <Paper
            my="md"
            p="md"
            radius="md"
            shadow="xs"
            onClick={() => setOpen(false)}
            className={cx(classes.tocDialogContainer, open ? undefined : classes.tocDialogContainerHidden)}
          >
            <TocDialog />
          </Paper>

          <Group
            position="right"
            align="flex-end"
            sx={() => ({
              display: "flex",
              alignItems: "center",
              top: "2rem",
              position: "sticky",
              zIndex: 300,
            })}
          >
            <ActionIcon
              variant="filled"
              aria-label="toc"
              radius={100}
              sx={() => ({
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 10px 10px 0",
                color: open ? theme.colors.gray[7] : "white",
                backgroundColor: open ? "white" : theme.colors.black,
                "&:hover": {
                  color: open ? theme.colors.black : "white",
                  backgroundColor: open ? "white" : theme.colors.black,
                },
              })}
              size={56}
              onClick={() => setOpen(!open)}
            >
              {open ? <MdOutlineCancel size={32} /> : <AiOutlineMenu size={32} />}
            </ActionIcon>
          </Group>
        </>
      )}

      <BlogContent blog={blog} />

      {open && (
        <Overlay
          color="black"
          opacity={0.5}
          zIndex={200}
          sx={() => ({ position: "fixed" })}
          onClick={() => setOpen(false)}
        />
      )}

      {largerThanMd && (
        <aside className={classes.toc}>
          <TocCard />
        </aside>
      )}
    </Box>
  );
};
