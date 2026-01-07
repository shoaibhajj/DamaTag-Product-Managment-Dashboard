"use client";

import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Button,
  Divider,
  TextField,
} from "@mui/material";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  removeFromCart,
  updateQuantity,
  clearCart,
} from "@/store/slices/cartSlice";
import {
  selectCartItems,
  selectTotalPrice,
} from "@/store/selectors/cartSelectors";
import CloseIcon from "@mui/icons-material/Close";
type Props = {
  open: boolean;
  onClose: () => void;
};

export default function CartDrawer({ open, onClose }: Props) {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectCartItems);
  const totalPrice = useAppSelector(selectTotalPrice);

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box width={360} p={3}>
        <Box display="flex" justifyContent="space-between" mb={2}>
          <Typography variant="h6">Your Cart</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider />

        {items.length === 0 ? (
          <Typography mt={4}>Cart is empty</Typography>
        ) : (
          <>
            {items.map((item) => (
              <Box key={item.id} mt={3}>
                <Typography fontWeight="bold">{item.title}</Typography>

                <Typography variant="body2">${item.price}</Typography>

                <Box display="flex" alignItems="center" mt={1} gap={1}>
                  <TextField
                    type="number"
                    size="small"
                    value={item.quantity}
                    inputProps={{ min: 1 }}
                    onChange={(e) =>
                      dispatch(
                        updateQuantity({
                          id: item.id,
                          quantity: Number(e.target.value),
                        })
                      )
                    }
                    sx={{ width: 80 }}
                  />

                  <Button
                    size="small"
                    color="error"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    Remove
                  </Button>
                </Box>
              </Box>
            ))}

            <Divider sx={{ my: 3 }} />

            <Typography fontWeight="bold">
              Total: ${totalPrice.toFixed(2)}
            </Typography>

            <Button
              variant="contained"
              fullWidth
              sx={{ mt: 2 }}
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </Button>
          </>
        )}
      </Box>
    </Drawer>
  );
}
