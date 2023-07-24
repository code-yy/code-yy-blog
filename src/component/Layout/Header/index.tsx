import { Box } from "@mantine/core";
import { FC } from "react";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { pagesPath } from "@/lib/$path";
import { LINK } from "@/constant/link";
import { AppLink } from "../../Core";
import { useStyles } from "./elements";

export const Header: FC = () => {
  const { classes } = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.wrapper}>
        <AppLink href={pagesPath.$url()} className={classes.title}>
          Yuto Blog
        </AppLink>

        <Box className={classes.iconsContainer}>
          <AppLink href={LINK.TWITTER} target={"_blank"} className={classes.icon}>
            <BsTwitter size={24} color="white" />
          </AppLink>
          <AppLink href={LINK.GITHUB} target={"_blank"} className={classes.icon}>
            <BsGithub size={24} color="white" />
          </AppLink>
        </Box>
      </Box>
    </Box>
  );
};
