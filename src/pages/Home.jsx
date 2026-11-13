import { Box } from "@mantine/core";
import HeroSection from "../components/HeroSection";
import WhyChooseUs from "../components/WhyChooseUs";
import SpecialOffers from "../components/SpecialOffers";
import Reviews from "../components/Reviews";
import RecentPosts from "../components/RecentPosts";

export default function HomePage() {
  return (
    <Box className="flex-1 flex">
      <Box className="max-w-7xl mx-auto  w-full px-4 pt-4">
        <HeroSection />
        <WhyChooseUs />
        <SpecialOffers />
        <Reviews />
        <RecentPosts />
      </Box>
    </Box>
  );
}
