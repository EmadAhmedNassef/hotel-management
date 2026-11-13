import { Box } from "@mantine/core";
import { BuildingsIcon } from "@phosphor-icons/react";

export default function LogoComp() {
  return (
    <Box className="flex items-center gap-2 group cursor-pointer">
      <BuildingsIcon
        size={38}
        weight="duotone"
        className="text-amber-500 transition-transform duration-300 group-hover:scale-110"
      />
      <span className="text-2xl font-extrabold tracking-[0.12em] text-[#10294B] translate-y-1">
        HOTEL
        <span className="text-amber-500">.</span>
      </span>
    </Box>
  );
}
