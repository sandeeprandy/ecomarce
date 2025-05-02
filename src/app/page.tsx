'use client';
import { useState, useEffect } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import axios from 'axios';
import ProductCard from './components/ProductCard';

export default function HomePage() {
  const [products, setProducts] = useState<any[]>([]);
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const addToCart = (product: any) => {
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Welcome to E-Shop
      </Typography>
      <Typography variant="h5" align="center" paragraph>
        Best products at the best prices!
      </Typography>

      <Grid container spacing={4}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </Grid>
    </Container>
  );
}
