"use client";

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Box,
  TextField,
  Select,
  MenuItem,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

import { useAppSelector } from "@/store/hooks";
import { selectTotalItems } from "@/store/selectors/cartSelectors";
import { useUI } from "@/app/ui-context";
import { useGetCategoriesQuery } from "@/store/api/productsApi";
import { useProductFilters } from "@/features/products/hooks/useProductFilters";

export default function Navbar() {
  const { openCart, openSidebar } = useUI();
  const totalItems = useAppSelector(selectTotalItems);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const { data: categories = [] } = useGetCategoriesQuery();
  const { filters, setFilter } = useProductFilters();

  return (
    <AppBar position="sticky" color="default" elevation={1}>
      <Toolbar
        sx={{ gap: 2, display: "flex", justifyContent: "space-between" }}
      >
        {/* Logo */}

        <Typography
          variant="h6"
          component={Link}
          href="/"
          sx={{
            textDecoration: "none",
            color: "inherit",
            fontWeight: 600,
            whiteSpace: "nowrap",
          }}
        >
          Damatag Dashboard
        </Typography>

        {/* Categories */}
        {!isMobile && (
          <Select
            size="small"
            value={filters.category ?? ""}
            displayEmpty
            onChange={(e) => setFilter("category", e.target.value ||null)}
            sx={{ minWidth: 200 }}
          >
            <MenuItem value="">All Categories</MenuItem>
            {categories.map((cat) => (
              <MenuItem key={cat} value={cat}>
                {cat}
              </MenuItem>
            ))}
          </Select>
        )}

        {/* Search */}
        <TextField
          size="small"
          placeholder="Search products…"
          value={filters.search}
          onChange={(e) => setFilter("search", e.target.value)}
          sx={{
            flexGrow: 1,
            maxWidth: 600,
          }}
        />

        {/* Actions */}
        <Box display="flex" alignItems="center" gap={1}>
          {isMobile && (
            <IconButton onClick={openSidebar}>
              <MenuIcon />
            </IconButton>
          )}

          <IconButton onClick={openCart}>
            <Badge badgeContent={totalItems} color="primary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
