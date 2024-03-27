"use client";

import Dropdown from "@/components/dropdown";
import Route from "@/constant/rotue";
import { Avatar, Flex } from "@radix-ui/themes";
import { useRouter } from "next/navigation";

const AppBar = () => {
  const router = useRouter();

  return (
    <Flex align="center" justify="end" className="border-b" p="2">
      <Dropdown
        trigger={
          <Avatar
            src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
            fallback="RR"
            size="2"
            radius="full"
            className="cursor-pointer hover:brightness-75 transition-all duration-200 ease-in-out"
          />
        }
        items={[
          {
            label: "Profile",
            type: "href",
            href: Route.profile,
          },
          {
            label: "Logout",
            type: "button",
            onClick: () => console.log("logout"),
          },
        ]}
      />
    </Flex>
  );
};

export default AppBar;
