import { Box, Flex } from "@radix-ui/themes";
import { PropsWithChildren } from "react";
import AppBar from "./_components/appbar";
import Sidebar from "./_components/sidebar";

const DashboardTemplate = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <Flex direction="row" className="h-screen w-screen">
      <Sidebar />
      <Flex
        direction="column"
        className="flex-1 overflow-y-auto overflow-x-hidden"
      >
        <AppBar />
        <Box p="4">{children}</Box>
      </Flex>
    </Flex>
  );
};

export default DashboardTemplate;
