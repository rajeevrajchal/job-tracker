"use server";
import { Button, Flex, Text } from "@radix-ui/themes";
import { logout } from "./action";

const Home = () => {
  return (
    <Flex direction="column" gap="2">
      <Text>Hello from Radix Themes :)</Text>
      <Button formAction={logout}>Logout</Button>
    </Flex>
  );
};

export default Home;
