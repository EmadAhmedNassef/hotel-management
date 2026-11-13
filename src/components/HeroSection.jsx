import {
  BackgroundImage,
  Box,
  Button,
  Group,
  Paper,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import {
  MapPinIcon,
  CalendarBlankIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "@phosphor-icons/react";
import heroImage from "../assets/hero.png";

export default function HeroSection() {
  return (
    <Box pos="relative" pb={4} mb={40}>
      {/* Hero Image */}
      <Box pos="relative" pb={4}>
        <BackgroundImage
          src={heroImage}
          radius="lg"
          h={{ base: 400, sm: 525 }}
          style={{
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          {/* <Box p={{ base: "lg", sm: 33 }} pt={{ base: 40, sm: 60 }} maw={550}>
              <Title
                order={1}
                fz={{ base: 32, sm: 42 }}
                fw={700}
                lh={1.15}
                c="#252525"
              >
                Find an apartment for your vacation
              </Title>

              <Text mt="md" fz="lg" c="#252525" lh={1.5}>
                We have several thousand apartments for every taste in every
                corner of the globe
              </Text>
            </Box> */}
        </BackgroundImage>

        {/* Search Bar */}
        <Paper
          shadow="md"
          radius="xl"
          p="xs"
          withBorder
          // w="min(95%, 570px)"
          pos="absolute"
          bottom={-28}
          left="50%"
          style={{
            transform: "translateX(-50%)",
            zIndex: 2,
          }}
        >
          <Group gap="xs" wrap="nowrap">
            <TextInput
              variant="unstyled"
              placeholder="Search Destination"
              leftSection={<MapPinIcon size={22} color="gray" />}
              // styles={{
              //   root: { flex: 1, minWidth: 0 },
              //   input: { fontSize: 14 },
              // }}
            />

            <Box h={38} style={{ borderLeft: "1px solid #e5e5e5" }} />

            <TextInput
              variant="unstyled"
              placeholder="Select Date"
              leftSection={<CalendarBlankIcon size={22} color="gray" />}
              // styles={{
              //   root: { flex: 1, minWidth: 0 },
              //   input: { fontSize: 14 },
              // }}
            />

            <Box h={38} style={{ borderLeft: "1px solid #e5e5e5" }} />

            <TextInput
              variant="unstyled"
              placeholder="Guests"
              leftSection={<UserIcon size={22} color="gray" />}
              // styles={{
              //   root: { flex: 1, minWidth: 0 },
              //   input: { fontSize: 14 },
              // }}
            />

            <Button
              color="red"
              radius="xl"
              size="compact-md"
              w={44}
              h={44}
              p={0}
              flex="0 0 44px"
            >
              <MagnifyingGlassIcon size={20} />
            </Button>
          </Group>
        </Paper>
      </Box>
    </Box>
  );
}
