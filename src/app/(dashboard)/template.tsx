import { Flex, Text } from "@radix-ui/themes";
import { PropsWithChildren } from "react";

const DashboardTemplate = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <Flex direction="column" gap="2">
      <Text>Dashboard</Text>
      {children}
    </Flex>
  );
};

export default DashboardTemplate;
