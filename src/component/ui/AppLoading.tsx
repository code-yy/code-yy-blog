import { FC } from "react";
import { Loader } from "@mantine/core";

export const AppLoading: FC = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Loader variant="dots" />
    </div>
  );
};
