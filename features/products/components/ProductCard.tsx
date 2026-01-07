import Image from "next/image";
import { Box, Card, CardContent, Rating, Typography } from "@mui/material";
import { Product } from "../types";
import Link from "next/link";
interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  return (
    <Card className="h-full flex flex-col">
        <Link href={`/products/${product.id}`} >
        <div className="relative h-48">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain p-4"
          />
        </div>

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
