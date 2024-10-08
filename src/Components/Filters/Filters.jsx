import React, { useState } from 'react'
import { Box, Button, Menu, MenuItem, Tab, Tabs, Typography } from '@mui/material'
import SortIcon from '@mui/icons-material/Sort';

const Filters = () => {

    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget); // Set anchorEl to the button
        setOpen(true); // Open the menu
    };
    return (
        <>
            <Box component="div" sx={{ display: 'flex', justifyContent: 'space-between', mt: 8, overflowX:{sm: 'auto',xs: "scroll"} }}>
                <Box component='div' sx={{ display: 'flex', gap: 2 }}>
                    <Button variant="outlined" sx={{ border: '1px solid #d6d6d6', padding: "4px 16px", borderRadius: 6, fontSize: "12px", color: 'black' }}>All</Button>
                    <Button variant="outlined" sx={{ border: '1px solid #d6d6d6', padding: "4px 16px", borderRadius: 6, fontSize: "12px", color: 'black' }}>Women</Button>
                    <Button variant="outlined" sx={{ border: '1px solid #d6d6d6', padding: "4px 16px", borderRadius: 6, fontSize: "12px", color: 'black' }}>Mens</Button>
                    <Button variant="outlined" sx={{ border: '1px solid #d6d6d6', padding: "4px 16px", borderRadius: 6, fontSize: "12px", color: 'black' }}>Kids</Button>
                    <Button variant="outlined" sx={{ border: '1px solid #d6d6d6', padding: "4px 16px", borderRadius: 6, fontSize: "12px", color: 'black' }}>Boys</Button>
                </Box>
                <Box component='div' position={'relative'}>
                    <Button onClick={handleClick} sx={{ border: '1px solid #d6d6d6', padding: "4px 16px", borderRadius: 6, fontSize: "12px", color: 'black' }} variant="outlined" startIcon={<SortIcon />}>
                        Sort
                    </Button>
                    <Menu
                        id="demo-positioned-menu"
                        anchorEl={anchorEl}
                        aria-labelledby="demo-positioned-button"
                        open={open}
                        onClose={() => setOpen(false)}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                    >
                        <MenuItem>Ascending</MenuItem>
                        <MenuItem>Descending</MenuItem>
                    </Menu>
                </Box>
            </Box>
        </>
    )
}

export default Filters