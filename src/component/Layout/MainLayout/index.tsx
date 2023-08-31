import { FC, ReactNode } from "react";
import { Header } from "../Header";
import { root, body, main } from "./styles.css";

type Props = {
  children: ReactNode;
};

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <div className={root}>
      <div className={body}>
        <Header />
        <main className={main}>{children}</main>
      </div>
    </div>
  );
};
