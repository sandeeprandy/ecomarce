
import React from 'react';
import './globals.css'; // optional, if you have global styles
import { AppBar, Toolbar, Typography, IconButton, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const metadata = {
  title: 'E-Commerce App',
  description: 'Next.js E-commerce frontend',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Header */}
        <AppBar position="sticky">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              E-Shop
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>

        {/* Page Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer
          style={{
            marginTop: 'auto',
            backgroundColor: '#1976d2',
            padding: '1rem',
            textAlign: 'center',
            color: 'white',
          }}
        >
          &copy; 2025 E-Shop. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
