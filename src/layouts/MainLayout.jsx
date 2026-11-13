import { Box } from "@mantine/core";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <Box className="flex flex-col min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </Box>
  );
}
