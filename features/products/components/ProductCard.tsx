import Image from "next/image";
import { Card, CardContent, Typography } from "@mui/material";
import { Product } from "../types";

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  return (
    <Card className="h-full flex flex-col">
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

        <Typography variant="caption">{product.category}</Typography>
      </CardContent>
    </Card>
  );
};
