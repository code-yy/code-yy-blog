import { Box, Divider, Text } from "@mantine/core";
import { FC } from "react";
import { theme } from "@/constant/theme";
import { Toc } from ".";

export const TocDialog: FC = () => {
  return (
    <>
      <Text
        mt="md"
        mb="sm"
        size="lg"
        weight="bold"
        sx={() => ({ color: theme.colors.black })}
        className="absolute top-0"
      >
        目次
      </Text>
      <Divider mt="xl" size="sm" sx={() => ({ borderColor: theme.colors.black })} />
      <Box mt="md" className="max-h-[350px] overflow-y-scroll">
        <Toc />
      </Box>
    </>
  );
};
