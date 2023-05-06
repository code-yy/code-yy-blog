import { FC } from "react";
import { Loader } from "@mantine/core";
import { container } from "./styles.css";

export const AppLoading: FC = () => {
  return (
    <div className={container}>
      <Loader />
    </div>
  );
};
