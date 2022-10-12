import { Container, ActionIcon, Group, useMantineColorScheme, Menu, Box } from "@mantine/core";
import { Sun, MoonStars } from "tabler-icons-react";
import { FC } from "react";
import { LINK } from "@/constant/link";
import { AppLink } from "@/component/ui";
import { SnsIcon } from "@/component/feature/SnsIcon";

const NavList = [
  {
    label: "Home",
    link: LINK.HOME,
  },
  {
    label: "Blog",
    link: LINK.BLOGS,
  },
];

export const Header: FC = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <Container className="px-0" fluid={true}>
      <Box className="flex h-14 items-center justify-between border-b-2 border-solid px-96">
        <Menu className="block sm:hidden">
          {NavList.map((item) => (
            <Menu.Item key={item.label}>
              <AppLink href={item.link}>{item.label}</AppLink>
            </Menu.Item>
          ))}
        </Menu>
        <Group className="hidden w-[260px] sm:flex" spacing={5}>
          {NavList.map(({ link, label }) => {
            return (
              <AppLink
                key={label}
                href={link}
                className={`decoration-[none] block py-2 px-3 font-medium leading-[1] dark:text-gray-light-200  ${
                  dark ? "hover:bg-blue-500" : "hover:bg-gray-100"
                }`}
              >
                {label}
              </AppLink>
            );
          })}
        </Group>
        <Group spacing={0} className="w-[260px]" position="right" noWrap>
          <div className="mr-3 flex">
            <SnsIcon />
          </div>
          <ActionIcon
            onClick={() => toggleColorScheme()}
            size="lg"
            className={`${dark ? "text-yellow-400" : "text-blue-400"}`}
          >
            {dark ? <Sun size={18} /> : <MoonStars size={18} />}
          </ActionIcon>
        </Group>
      </Box>
    </Container>
  );
};
