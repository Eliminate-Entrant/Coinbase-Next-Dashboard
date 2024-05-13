"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Box, CssBaseline, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import WalletIcon from '@mui/icons-material/Wallet';
import HomeIcon from '@mui/icons-material/Home';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import MuiDrawer from '@mui/material/Drawer';
import { styled, Theme, CSSObject } from '@mui/material/styles';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);


const Sidebar = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<string>('/');
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
  
    const handlePageChange = (page:string) => {
      setCurrentPage(page);
    };
  
    return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Drawer variant="permanent" open={open}>
          {!open ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginLeft: 0,
              }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          )}
          <List>
            <Link href="/">
              <ListItemButton selected={currentPage.endsWith('/')} onClick={() => handlePageChange('/')}>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </Link>
            <Link href="/historic_price">
              <ListItemButton selected={currentPage.endsWith('/historic_price')} onClick={() => handlePageChange('/historic_price')}>
                <ListItemIcon>
                  <TrendingUpIcon />
                </ListItemIcon>
                <ListItemText primary="Symbol Prices" />
              </ListItemButton>
            </Link>
            <Link href="/wallets">
              <ListItemButton selected={currentPage.endsWith('/wallets')} onClick={() => handlePageChange('/wallets')}>
                <ListItemIcon>
                  <WalletIcon />
                </ListItemIcon>
                <ListItemText primary="Account Wallets" />
              </ListItemButton>
            </Link>
            {/* <Link href="/websocket">
              <ListItemButton selected={currentPage.endsWith('/websocket')} onClick={() => handlePageChange('/websocket')}>
                <ListItemIcon>
                  <WalletIcon />
                </ListItemIcon>
                <ListItemText primary="Websocket" />
              </ListItemButton>
            </Link> */}
          </List>
        </Drawer>
      </Box>
    );
  };
  
  export default Sidebar;