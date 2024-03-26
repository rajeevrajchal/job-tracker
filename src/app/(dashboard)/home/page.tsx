import { Box } from "@radix-ui/themes";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "This is home",
};

const Dashboard = () => {
  return (
    <Box>
      <p>the dashboard page</p>
    </Box>
  );
};

export default Dashboard;
