import { Card, CardContent, Skeleton } from "@mui/material";

export const ProductSkeleton = () => {
  return (
    <Card>
      <Skeleton variant="rectangular" height={200} />
      <CardContent>
        <Skeleton width="80%" />
        <Skeleton width="40%" />
      </CardContent>
    </Card>
  );
};
