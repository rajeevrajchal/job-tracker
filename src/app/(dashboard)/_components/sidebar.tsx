"use client";

import Route from "@/constant/rotue";
import { Box, Button, Flex } from "@radix-ui/themes";
import { usePathname, useRouter } from "next/navigation";
import { GiBookCover } from "react-icons/gi";
import { IoIosGitBranch } from "react-icons/io";
import { IoHome, IoIdCard } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";

const sidebar = [
  {
    label: "Home",
    href: Route.home,
    key: "home",
    icon: <IoHome size="20" />,
  },
  {
    label: "My Account",
    href: Route.profile,
    key: "my-account",
    icon: <MdAccountCircle size="20" />,
  },
  {
    label: "Resume",
    href: Route.resume,
    key: "resume",
    icon: <IoIdCard size="20" />,
  },
  {
    label: "Cover Letter",
    href: Route.cover_letter,
    key: "cover-letter",
    icon: <GiBookCover size="20" />,
  },
  {
    label: "Tracker",
    href: Route.tracker,
    key: "tracker",
    icon: <IoIosGitBranch size="20" />,
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Flex
      direction="column"
      className="w-[200px] h-full border-r"
      p="2"
      gap="4"
    >
      <Box className="flex items-center justify-center">
        <p>Job App</p>
      </Box>
      <Flex direction="column" className="flex-1" gap="4">
        {sidebar.map((item, index: number) => (
          <Button
            key={`side-bar-${index}-${item.key}`}
            variant={pathname === item.href ? "solid" : "ghost"}
            className={`flex items-center justify-start py-2 ${
              pathname !== item.href ? "px-5 text-black" : ""
            }`}
            onClick={() => router.push(item.href)}
          >
            {item.icon}
            {item.label}
          </Button>
        ))}
      </Flex>
    </Flex>
  );
};

export default Sidebar;
