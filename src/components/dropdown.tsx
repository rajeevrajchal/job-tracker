import { Button, DropdownMenu, Flex } from "@radix-ui/themes";

import Link from "next/link";
import { ReactElement } from "react";

export type DropdownMenuItem =
  | { label: string; type: "button"; onClick: () => void }
  | { label: string; type: "href"; href: string };

interface DropdownProps {
  trigger: ReactElement;
  items: DropdownMenuItem[];
}

const getComponent = (item: DropdownMenuItem) => {
  switch (item.type) {
    case "href":
      return (
        <Link className="cursor-pointer" href={item.href}>
          {item.label}
        </Link>
      );
    case "button":
      return (
        <Button
          className="cursor-pointer"
          variant="soft"
          onClick={item.onClick}
        >
          {item.label}
        </Button>
      );
  }
};

const Dropdown = ({ trigger, items }: DropdownProps) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>{trigger}</DropdownMenu.Trigger>
      <DropdownMenu.Content size="2" className="min-w-[150px]">
        <Flex direction="column" gap="2">
          {items.map((item, index) => (
            <DropdownMenu.Item key={`dropdown-item-${index}`} asChild>
              {getComponent(item)}
            </DropdownMenu.Item>
          ))}
        </Flex>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default Dropdown;
