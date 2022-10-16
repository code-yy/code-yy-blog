import { AppShell, ColorSchemeProvider, createStyles, Global, MantineProvider } from "@mantine/core";
import { FC, ReactNode, useEffect, useState } from "react";
import { AppLoading } from "../Element";
import { Header } from "./Header";
import { ProfileCard } from "./ProfileCard";

type Props = {
  children: ReactNode;
};

export const MainLayout: FC<Props> = ({ children }) => {
  const { classes } = useStyles();
  // NOTE: ColorSchemeの型の拡張方法がわからなかったので、一旦anyで妥協する😭
  const [colorScheme, setColorScheme] = useState<any>("#FBFBFB");

  const toggleColorScheme = (value: any) => {
    const isDarkTheme = value || (colorScheme === "dark" ? "#FBFBFB" : "dark");
    setColorScheme(isDarkTheme);
  };
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(false);
  }, [loading]);

  if (loading) return <AppLoading />;

  return (
    <>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider theme={{ colorScheme, fontFamily: "Noto Sans JP, sans-serif" }} withGlobalStyles>
          <Global
            styles={(theme) => ({
              body: {
                fontFamily: "Noto Sans JP sans-serif",
                backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0],
              },
            })}
          />
          <AppShell header={<Header />} aside={<ProfileCard />} className={classes.container}>
            {children}
          </AppShell>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
};

const useStyles = createStyles(() => ({
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "16px",
    main: {
      padding: "0",
    },
  },
}));
