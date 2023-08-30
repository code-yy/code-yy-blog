import { style, keyframes } from "@vanilla-extract/css";

const spin = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

export const loaderStyle = style({
  margin: "60px auto",
  border: "16px solid #f3f3f3",
  borderTop: "16px solid #3498db",
  borderRadius: "50%",
  width: "120px",
  height: "120px",
  animation: `${spin} 2s linear infinite`,
});
