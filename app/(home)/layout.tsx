"use client";

import { Box, Drawer, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SidebarFilters from "@/features/products/components/SidebarFilters";
import { useUI } from "../ui-context";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { sidebarOpen, closeSidebar } = useUI();

  return (
    <Box display="flex">
      {/* Desktop Sidebar */}
      {!isMobile && <SidebarFilters />}

      {/* Mobile Sidebar */}
      {isMobile && (
        <Drawer anchor="left" open={sidebarOpen} onClose={closeSidebar}>
          <SidebarFilters mobile />
        </Drawer>
      )}

      {/* Page Content */}
      <Box flex={1} p={3}>
        {children}
      </Box>
    </Box>
  );
}
