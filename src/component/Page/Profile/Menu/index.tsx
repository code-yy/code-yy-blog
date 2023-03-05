import { Menu as MantineMenu, Button, Text } from "@mantine/core";
import { FC } from "react";

export const Menu: FC = () => {
  return (
    <MantineMenu shadow="md" width={200}>
      <MantineMenu.Target>
        <Button>Toggle MantineMenu</Button>
      </MantineMenu.Target>

      <MantineMenu.Dropdown>
        <MantineMenu.Label>Application</MantineMenu.Label>
        <MantineMenu.Item>Settings</MantineMenu.Item>
        <MantineMenu.Item>Messages</MantineMenu.Item>
        <MantineMenu.Item>Gallery</MantineMenu.Item>
        <MantineMenu.Item
          rightSection={
            <Text size="xs" color="dimmed">
              ⌘K
            </Text>
          }
        >
          Search
        </MantineMenu.Item>

        <MantineMenu.Divider />

        <MantineMenu.Label>Danger zone</MantineMenu.Label>
        <MantineMenu.Item>Transfer my data</MantineMenu.Item>
        <MantineMenu.Item color="red">Delete my account</MantineMenu.Item>
      </MantineMenu.Dropdown>
    </MantineMenu>
  );
};
