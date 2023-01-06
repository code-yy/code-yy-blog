import { AppShell, createStyles } from "@mantine/core";
import { FC, ReactNode, useEffect, useState } from "react";
import { AppLoading } from "../Element";
import { Header } from "./Header";

type Props = {
  children: ReactNode;
};

export const BlogDetailLayout: FC<Props> = ({ children }) => {
  const { classes } = useStyles();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(false);
  }, [loading]);

  if (loading) return <AppLoading />;

  return (
    <>
      <AppShell
        header={<Header />}
        classNames={{
          root: classes.root,
          body: classes.body,
          main: classes.main,
        }}
      >
        {children}
      </AppShell>
    </>
  );
};

const useStyles = createStyles((theme) => ({
  root: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "16px",
    [theme.fn.smallerThan("md")]: {
      width: "100%",
      padding: "0",
    },
  },
  body: {
    [theme.fn.smallerThan("md")]: {
      flexDirection: "column",
      marginBottom: "20px",
    },
  },
  main: {
    padding: "0",
    [theme.fn.smallerThan("md")]: {
      width: "100%",
    },
  },
}));
