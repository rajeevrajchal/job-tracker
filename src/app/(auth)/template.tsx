import { Flex, Text } from "@radix-ui/themes";
import { PropsWithChildren } from "react";

const AuthTemplate = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <Flex direction="column" gap="2">
      <Text>Auth</Text>
      {children}
    </Flex>
  );
};

export default AuthTemplate;
