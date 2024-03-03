import { Button, Flex, Text } from "@radix-ui/themes";
import { logout } from "./action";

const Home = () => {
  return (
    <form action={logout}>
      <Flex direction="column" gap="2">
        <Text>Hello from Radix Themes :)</Text>
        <Button>Logout</Button>
      </Flex>
    </form>
  );
};

export default Home;
