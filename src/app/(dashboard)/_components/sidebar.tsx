import { Box, Flex } from "@radix-ui/themes";

const Sidebar = () => {
  return (
    <Flex direction="column" className="w-[250px] h-full border-r" p="4">
      <Box>
        <p>Job App</p>
      </Box>
      <Flex direction="column" className="flex-1" justify="center">
        <p>Tracker</p>
        <p>Resume</p>
      </Flex>
    </Flex>
  );
};

export default Sidebar;
