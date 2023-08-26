import React, { useState } from 'react';
import { AppBar, Button, Drawer, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import LunchDiningRoundedIcon from '@mui/icons-material/LunchDiningRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import BubbleChartRoundedIcon from '@mui/icons-material/BubbleChartRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import { useRouter } from 'next/navigation'

// custom imports
import { poppinsBold, poppinsMedium } from '../shared/appfonts';

function MenuDrawer(props) {

    const mediumFont = poppinsMedium.style.fontFamily;
    const [open, setOpen] = useState(false);

    // for navigation purpose
    const router = useRouter();

    // For menu options
  const navBarPages = [
    {
      name: 'Home',
      route: '/home',
      startIcon: () => { return <HomeRoundedIcon fontSize='large' /> },
    },
    {
      name: 'Products',
      route: '/product',
      startIcon: () => { return <MenuBookRoundedIcon fontSize='large' /> },
    },
    {
      name: 'About us',
      route: '/about',
      startIcon: () => {return <BubbleChartRoundedIcon fontSize='large' /> },
    },
    {
      name: 'Signin',
      route: '/signin',
      startIcon: () => { return <PersonRoundedIcon fontSize='large' /> },
      variant: 'contained'
    }
  ]

    // Function to handle route
    const handleRoute = (destination) => {
        router.push(destination);
        setOpen(false)
    }

    return (
        <React.Fragment>

            {/* Navbar for mobile */}

            <AppBar position='fixed' color='secondary'>
                <Toolbar>
                    <Stack alignItems={'center'} flexDirection={'row'}>
                        <IconButton onClick={() => { setOpen(true) }}>
                            <LunchDiningRoundedIcon fontSize='medium' htmlColor='white' />
                        </IconButton>
                        <Typography variant='h6' sx={{ fontFamily: mediumFont }}>VK Books</Typography>
                    </Stack>
                </Toolbar>
            </AppBar>

            {/* Mobile drawer section */}
            <Drawer anchor='left' open={open} onClose={() => { setOpen(false) }}>
                <Stack alignItems={'flex-start'} width={200} sx={{ overflowX: 'hidden' }}>
                    {
                        navBarPages.map((pages, index) => {
                            return <Button fullWidth key={index} variant={"text"} color="secondary" sx={{ mr: 2, fontFamily: mediumFont, justifyContent: 'flex-start', m: 0.5 }} startIcon={pages.startIcon()} onClick={() => handleRoute(pages.route)}>
                                {pages.name}
                            </Button>
                        })
                    }
                </Stack>
            </Drawer>

        </React.Fragment>
    );
}

export default MenuDrawer;