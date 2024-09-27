import React from 'react'
import { AppBar, Box, Button, Container, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, styled, Toolbar, Typography } from '@mui/material'
import { Link, NavLink } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import MailIcon from '@mui/icons-material/Mail';
import StoreIcon from '@mui/icons-material/Store';
const Navbar = () => {

  const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  })

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['Shop', 'World', 'Information'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <StoreIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position='static' elevation={0} sx={{ backgroundColor: 'transparent', color: 'black' }}>
        <Container>
          <StyledToolbar>
            <Box sx={{ display: { xs: "block", sm: "none", } }}>
              <MenuIcon onClick={toggleDrawer(true)} />
            </Box>
            <Box sx={{ display: { xs: 'none', sm: "flex" }, gap: 2 }}>
              <NavLink to="/" style={{ textDecoration: "none", color: 'black' }}><Typography sx={{ fontSize: '12px', textTransform: 'uppercase' }}>Shop</Typography></NavLink>
              <NavLink style={{ textDecoration: "none", color: 'black' }}><Typography sx={{ fontSize: '12px', textTransform: 'uppercase' }}>World</Typography></NavLink>
              <NavLink style={{ textDecoration: "none", color: 'black' }}><Typography sx={{ fontSize: '12px', textTransform: 'uppercase' }}>Information</Typography></NavLink>
            </Box>
            <Box>
              <img src='/images/logo.PNG' />
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <NavLink style={{ textDecoration: "none", color: 'black' }}><Typography sx={{ fontSize: '12px', textTransform: 'uppercase' }}>Account</Typography></NavLink>
              <NavLink style={{ textDecoration: "none", color: 'black' }}><Typography sx={{ fontSize: '12px', textTransform: 'uppercase' }}>Login</Typography></NavLink>
              <NavLink to="cart" style={{ textDecoration: "none", color: 'black' }}><Typography sx={{ fontSize: '12px', textTransform: 'uppercase' }}>Cart(0)</Typography></NavLink>
            </Box>
          </StyledToolbar>
        </Container>
      </AppBar>

      <div>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </div>
    </>
  )
}

export default Navbar