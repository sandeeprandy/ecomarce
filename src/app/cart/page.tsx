'use client';
import { Box, Button, Grid, Typography, IconButton } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

export default function CartPage({ cart, setCart }: { cart: any[], setCart: React.Dispatch<React.SetStateAction<any[]>> }) {
  const adjustQuantity = (productId: number, operation: number) => {
    setCart(cart.map(item => 
      item.id === productId
        ? { ...item, quantity: Math.max(item.quantity + operation, 1) }
        : item
    ));
  };

  const removeFromCart = (productId: number) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 5.99;
  const total = subtotal + shipping;

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>Shopping Cart</Typography>
      <Grid container spacing={3}>
        {cart.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Box sx={{ border: '1px solid #ddd', padding: 2, borderRadius: 2 }}>
              <Typography variant="h6">{item.title}</Typography>
              <Typography variant="body2">${item.price.toFixed(2)}</Typography>
              <Box display="flex" alignItems="center" mt={2}>
                <IconButton onClick={() => adjustQuantity(item.id, -1)}>
                  <RemoveIcon />
                </IconButton>
                <Typography variant="body1">{item.quantity}</Typography>
                <IconButton onClick={() => adjustQuantity(item.id, 1)}>
                  <AddIcon />
                </IconButton>
              </Box>
              <Button fullWidth variant="outlined" color="secondary" sx={{ mt: 2 }} onClick={() => removeFromCart(item.id)}>
                Remove
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h6" align="right">Subtotal: ${subtotal.toFixed(2)}</Typography>
        <Typography variant="h6" align="right">Shipping: ${shipping.toFixed(2)}</Typography>
        <Typography variant="h5" align="right">Total: ${total.toFixed(2)}</Typography>

        <Button variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}>
          Proceed to Checkout
        </Button>
      </Box>
    </Box>
  );
}
