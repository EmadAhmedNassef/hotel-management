import { Box } from "@mantine/core";
import LogoComp from "./LogoComp";
import LinksComp from "./LinksComp";
import UserMenu from "./UserMenu";

export default function Header() {
  return (
    <Box className="h-15 border-b border-gray-200">
      <Box className="flex items-center h-full justify-between max-w-7xl mx-auto px-4">
        <LogoComp />
        <LinksComp />
        <UserMenu />
      </Box>
    </Box>
  );
}
