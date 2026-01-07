import Image from "next/image";
import {
  Box,
  Card,
  CardContent,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";
import { Product } from "../types";
import Link from "next/link";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toggleWishlist } from "@/store/slices/wishlistSlice";
import { selectIsWishlisted } from "@/store/selectors/wishlistSelectors";
interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  const dispatch = useAppDispatch();
  const isWishlisted = useAppSelector(selectIsWishlisted(product.id));
  return (
    <Card className="h-full flex flex-col">
      <div className="relative h-48">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain p-4"
        />
        <IconButton
          onClick={() => dispatch(toggleWishlist(product.id))}
          color={isWishlisted ? "error" : "default"}
        >
          {isWishlisted ? <Favorite /> : <FavoriteBorder />}
        </IconButton>
      </div>
      <Link href={`/products/${product.id}`}>
        <CardContent className="flex-1">
          <Typography variant="subtitle1" fontWeight={600}>
            {product.title}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            ${product.price}
          </Typography>
          <div className="flex justify-between">
            <Typography variant="caption">{product.category}</Typography>
            <Rating value={product.rating.rate} precision={0.5} readOnly />
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};
