// import { Avatar, Box } from "@mantine/core";
// import { ListIcon } from "@phosphor-icons/react";

// export default function UserMenu() {
//   return (
//     <Box className="border border-gray-200 rounded-full w-22 px-2 py-1">
//       <Box className="flex items-center justify-between w-full gap-2">
//         <ListIcon className="shrink-0" size={25} weight="bold" color="orange" />
//         <Avatar size="md" className="shrink-0" src={null} alt="no image here" />
//       </Box>
//     </Box>
//   );
// }

import { Avatar, Box } from "@mantine/core";
import { ListIcon } from "@phosphor-icons/react";

export default function UserMenu() {
  return (
    <Box className="flex items-center justify-between gap-2">
      <ListIcon className="shrink-0" size={25} weight="bold" color="orange" />
      <Avatar size="md" className="shrink-0" src={null} alt="no image here" />
    </Box>
  );
}
