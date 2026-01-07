"use client";

import {
  Box,
  Slider,
  Rating,
  Select,
  MenuItem,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useProductFilters } from "../hooks/useProductFilters";
import { useGetCategoriesQuery } from "@/store/api/productsApi";

type Props = {
  mobile?: boolean;
};


export default function SidebarFilters({ mobile = false }: Props) {
  const { filters, setFilter } = useProductFilters();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
      const { data: categories = [] } = useGetCategoriesQuery();

  return (
    <Box
      width={mobile ? "100%" : 260}
      p={3}
      borderRight={mobile ? 0 : "1px solid"}
      borderColor="divider"
      bgcolor={"background.paper"}
      color={"black"}
    >
      <Typography fontWeight={600} mb={2}>
        Filters
      </Typography>

      {/* Categories */}
            {isMobile && (
              <Select
                size="small"
                value={filters.category ?? ""}
                displayEmpty
                onChange={(e) => setFilter("category", e.target.value || null)}
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
      {/* Sorting */}
      <Typography mt={3} mb={1}>
        Sort
      </Typography>
      <Select
        size="small"
        fullWidth
        value={filters.sort ?? ""}
        onChange={(e) => setFilter("sort", e.target.value as string)}
      >
        <MenuItem value="">Default</MenuItem>
        <MenuItem value="price-asc">Price: Low → High</MenuItem>
        <MenuItem value="price-desc">Price: High → Low</MenuItem>
        <MenuItem value="rating-desc">Rating</MenuItem>
      </Select>

      {/* Price */}
      <Typography mt={3} mb={1}>
        Price
      </Typography>
      <Slider
        value={[filters.minPrice, filters.maxPrice]}
        min={0}
        max={1000}
        onChange={(_, value) => {
          const [min, max] = value as number[];
          setFilter("minPrice", min);
          setFilter("maxPrice", max);
        }}
        valueLabelDisplay="auto"
      />

      {/* Rating */}
      <Typography mt={3} mb={1}>
        Rating
      </Typography>
      <Rating
        value={filters.rating}
        onChange={(_, value) => setFilter("rating", value ?? 0)}
      />
    </Box>
  );
}
