import { createTheme } from "@vanilla-extract/css";

export const [themeClass, vars] = createTheme({
  color: {
    // gray
    gray100: "#F3F4F6",
    gray200: "#0c0c0c",
    gray300: "#111827",
    gray400: "#DEE2E6",
    gray500: "#CED4DA",
    gray600: "#ADB5BD",
    gray700: "#868E96",
    gray800: "#495057",
    gray900: "#343A40",
    gray1000: "#212529",

    // dark
    dark100: "#F3F4F6",
    dark200: "#8c8fa3",
    dark300: "#666980",
    dark400: "#4d4f66",
    dark500: "#34354a",
    dark600: "#2b2c3d",
    dark700: "#1d1e30",
    dark800: "#000000",
    dark900: "#0c0d21",
    dark1000: "#01010a",
  },
});
