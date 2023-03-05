import { AppShell } from "@mantine/core";
import { FC, ReactNode, useEffect, useState } from "react";
import { AppLoading } from "../../Core";
import { Header } from "../Header";
import { useStyles } from "./elements";

type Props = {
  children: ReactNode;
};

export const BlogDetailLayout: FC<Props> = ({ children }) => {
  const { classes } = useStyles();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) return <AppLoading />;

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
