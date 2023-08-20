import { MantineTheme, DEFAULT_THEME } from "@mantine/core";

export const theme: MantineTheme = {
  ...DEFAULT_THEME,
  colors: {
    ...DEFAULT_THEME.colors,
    gray: [
      "#F3F4F6",
      "#0c0c0c",
      "#111827",
      "#DEE2E6",
      "#CED4DA",
      "#ADB5BD",
      "#868E96",
      "#495057",
      "#343A40",
      "#212529",
    ],
    dark: [
      "#F3F4F6",
      "#8c8fa3",
      "#666980",
      "#4d4f66",
      "#34354a",
      "#2b2c3d",
      "#1d1e30",
      "#000000",
      "#0c0d21",
      "#01010a",
    ],
  },

  globalStyles: (theme) => ({
    body: {
      ...theme.fn.fontStyles(),
      lineHeight: theme.lineHeight,
    },
  }),
};
