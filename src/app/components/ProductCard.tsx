'use client';

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid, // ✅ <-- Import Grid here
} from '@mui/material';

export default function ProductCard({ product, addToCart }: { product: any; addToCart: (product: any) => void }) {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card>
        <CardMedia
          component="img"
          image={product.image}
          alt={product.title}
          height="200"
          style={{ objectFit: 'contain' }}
        />
        <CardContent>
          <Typography variant="subtitle1">{product.title}</Typography>
          <Typography variant="h6">${product.price}</Typography>
          <Button variant="contained" onClick={() => addToCart(product)}>
            Add to Cart
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
}
