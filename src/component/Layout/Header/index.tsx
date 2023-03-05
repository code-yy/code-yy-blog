import { Box } from "@mantine/core";
import { FC } from "react";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { pagesPath } from "@/lib/$path";
import { AppLink } from "../../Core";
import { useStyles } from "./elements";
import { GITHUB_URL, TWITTER_URL } from "./constants";

export const Header: FC = () => {
  const { classes } = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.wrapper}>
        <AppLink href={pagesPath.$url()} className={classes.title}>
          Yuto Blog
        </AppLink>

        <Box className={classes.iconsContainer}>
          <AppLink href={TWITTER_URL} target={"_blank"} className={classes.icon}>
            <BsTwitter size={24} color="white" />
          </AppLink>
          <AppLink href={GITHUB_URL} target={"_blank"} className={classes.icon}>
            <BsGithub size={24} color="white" />
          </AppLink>
        </Box>
      </Box>
    </Box>
  );
};
