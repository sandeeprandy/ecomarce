'use client';
import { Drawer, List, ListItem, ListItemText, Divider, Button } from '@mui/material';

export default function MiniCart({ isOpen, cart, setCart }: { isOpen: boolean, cart: any[], setCart: React.Dispatch<React.SetStateAction<any[]>> }) {
  if (!isOpen) return null;

  const removeFromCart = (productId: number) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Drawer anchor="right" open={isOpen} onClose={() => {}}>
      <List sx={{ width: 250 }}>
        {cart.map((item) => (
          <ListItem key={item.id}>
            <ListItemText primary={item.title} secondary={`$${item.price.toFixed(2)} x ${item.quantity}`} />
            <Button variant="outlined" color="error" onClick={() => removeFromCart(item.id)}>
              Remove
            </Button>
          </ListItem>
        ))}
        <Divider />
        <ListItem>
          <ListItemText primary="Subtotal" secondary={`$${subtotal.toFixed(2)}`} />
        </ListItem>
        <ListItem>
          <Button fullWidth variant="contained" color="primary">
            View Cart
          </Button>
        </ListItem>
        <ListItem>
          <Button fullWidth variant="contained" color="secondary" disabled>
            Checkout
          </Button>
        </ListItem>
      </List>
    </Drawer>
  );
}
