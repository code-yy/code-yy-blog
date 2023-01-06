import { FC, useEffect, useState } from "react";
import { ActionIcon, Box, createStyles, Group, Overlay, Paper } from "@mantine/core";
import { Menu2, X } from "tabler-icons-react";
import tocbot from "tocbot";
import { Props } from "@/pages/blogs/[slug]";
import { theme } from "@/constant/theme";
import { useMediaQueryMin } from "@/hooks/useMediaQuery";
import { TocCard } from "./Toc/TocCard";
import { TocDialog } from "./Toc/TocDialog";
import { BlogContent } from "./BlogContent";

export const BlogDetail: FC<Props> = ({ blog }) => {
  const [open, setOpen] = useState(false);
  const { classes, cx } = useStyle();
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
            className={cx(`${open ? "" : "hidden"}`, "fixed top-[17%] left-[50%] z-[300] ml-[-46%] w-[90%]")}
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
                color: open ? theme.colors.primary : "white",
                backgroundColor: open ? "white" : theme.colors.primary,
                "&:hover": {
                  color: open ? theme.colors.primary : "white",
                  backgroundColor: open ? "white" : theme.colors.primary,
                },
              })}
              size={56}
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={32} /> : <Menu2 size={32} />}
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

const useStyle = createStyles((theme) => ({
  mainContainer: {
    display: "flex",
    position: "relative",
    [theme.fn.smallerThan("md")]: {
      flexDirection: "column",
    },
  },
  toc: {
    minWidth: "300px",
    top: "2rem",
    position: "sticky",
  },
  tocDialog: {
    display: "none",
    [theme.fn.smallerThan("md")]: {
      position: "fixed",
      top: "0",
      left: "0",
    },
  },
  tocButton: {
    top: "2rem",
    position: "sticky",
    marginBottom: "10px",
    marginLeft: "10px",
    borderRadius: "50%",
    width: "56px",
    height: "56px",
  },
  menu: {
    [theme.fn.smallerThan("md")]: {
      backgroundColor: "rgb(1, 44, 107)",
    },
  },
  close: {
    [theme.fn.smallerThan("md")]: {
      backgroundColor: "white",
    },
  },
}));
