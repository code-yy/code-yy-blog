import { Container, Group, useMantineColorScheme } from "@mantine/core";
import { FC } from "react";
import { SnsIcon } from "../feature/SnsIcon";
import { ProfileIcon } from "../ui/ProfileIcon";

export const Footer: FC = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <footer className={`mt-4 border-t-[1px] border-solid md:mt-8 ${dark ? `border-gray-dark` : `border-gray-light`}`}>
      <Container className="flex flex-row items-center justify-between py-4">
        <ProfileIcon />
        <Group spacing={0} position="right" noWrap>
          <SnsIcon />
        </Group>
      </Container>
    </footer>
  );
};
