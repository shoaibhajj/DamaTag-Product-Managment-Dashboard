"use client";

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Box,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";
import { useAppSelector } from "@/store/hooks";
import { selectTotalItems } from "@/store/selectors/cartSelectors";

type Props = {
  onCartClick: () => void;
};

export default function Navbar({ onCartClick }: Props) {
  const totalItems = useAppSelector(selectTotalItems);

  return (
    <AppBar position="sticky" color="default" elevation={1}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Left: Logo / Brand */}
        <Typography
          variant="h6"
          component={Link}
          href="/"
          sx={{
            textDecoration: "none",
            color: "inherit",
            fontWeight: 600,
          }}
        >
        Damatag  Product Dashboard
        </Typography>

        {/* Right: Actions */}
        <Box>
          <IconButton color="inherit" onClick={onCartClick}>
            <Badge badgeContent={totalItems} color="primary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
