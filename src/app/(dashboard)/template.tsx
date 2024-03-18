import { Flex } from "@radix-ui/themes";
import { PropsWithChildren } from "react";

const DashboardTemplate = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <Flex direction="column" gap="2" className="h-screen w-screen">
      {children}
    </Flex>
  );
};

export default DashboardTemplate;
