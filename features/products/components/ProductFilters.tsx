"use client";

import {
  Box,
  TextField,
  Select,
  MenuItem,
  Slider,
  Rating,
  Typography,
  Paper,
} from "@mui/material";
import { useProductFilters } from "../hooks/useProductFilters";

type Props = {
  categories: string[];
};

export default function ProductFilters({ categories }: Props) {
  const { filters, setFilter, setSearchDebounced } = useProductFilters();

  return (
    <Paper
      elevation={1}
      sx={{
        p: 3,
        mb: 4,
        backgroundColor: "background.paper",
        borderRadius: 2,
      }}
    >
      <Box
        display="grid"
        gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }}
        gap={3}
      >
        {/* Search */}
        <TextField
          label="Search products"
          size="small"
          defaultValue={filters.search}
          onChange={(e) => setSearchDebounced(e.target.value)}
          fullWidth
        />

        {/* Category */}
        <Select
          size="small"
          value={filters.category ?? ""}
          displayEmpty
          onChange={(e) => setFilter("category", e.target.value || null)}
        >
          <MenuItem value="">All Categories</MenuItem>
          {categories.map((cat) => (
            <MenuItem key={cat} value={cat}>
              {cat}
            </MenuItem>
          ))}
        </Select>

        {/* Price Range */}
        <Box>
          <Typography variant="body2" gutterBottom>
            Price Range
          </Typography>
          <Slider
            size="small"
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
        </Box>

        {/* Rating */}
        <Box>
          <Typography variant="body2" gutterBottom>
            Minimum Rating
          </Typography>
          <Rating
            size="small"
            value={filters.rating}
            onChange={(_, value) => setFilter("rating", value ?? 0)}
          />
        </Box>
      </Box>
    </Paper>
  );
}
