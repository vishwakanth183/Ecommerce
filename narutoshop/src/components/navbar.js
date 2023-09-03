import React from 'react'
import { AppBar, Box, IconButton, Stack, Toolbar, Typography, Button, useMediaQuery, Badge } from '@mui/material'
import TipsAndUpdatesRoundedIcon from '@mui/icons-material/TipsAndUpdatesRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import BubbleChartRoundedIcon from '@mui/icons-material/BubbleChartRounded';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import { useRouter } from 'next/navigation'
import Link from 'next/link'


// custom imports
import { poppinsBold, poppinsMedium } from '../shared/appfonts';
import MenuDrawer from './menuDrawer';

export default function Navbar() {

    const mediumFont = poppinsMedium.style.fontFamily;
    const isDesktop = useMediaQuery('(min-width:600px)');

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
            startIcon: () => { return <BubbleChartRoundedIcon fontSize='large' /> },
        },
        {
            name: 'Signin',
            route: '/signin',
            startIcon: () => { return <PersonRoundedIcon fontSize='large' /> },
            variant: 'contained'
        },
        {
            name: 'Cart',
            route: '/cart',
            isIconButton: true,
            startIcon: () => { return <ShoppingBasketIcon fontSize='large' /> },
        }
    ]

    // Function to handle route
    const handleRoute = (destination) => {
        router.push(destination)
    }



    return (
        <Box sx={{ display: 'flex', mb: 10 }}>


            {
                isDesktop ?
                    <AppBar color='default' sx={{ height: 60 }}>
                        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>

                            {/* Left view section */}
                            <Stack direction={'row'} alignItems={'center'}>
                                <IconButton aria-label="bookMenuIcon" color='secondary'>
                                    <TipsAndUpdatesRoundedIcon fontSize='large' />
                                </IconButton>
                                <Typography variant="h6" sx={{ fontFamily: mediumFont }}>VBooks</Typography>
                            </Stack>

                            {/* Right view section */}
                            <Stack direction={'row'} alignItems={'center'}>
                                {
                                    navBarPages.map((pages, index) => {
                                        return <Link href={pages.route} key={index}>
                                            {pages.isIconButton ?

                                                <IconButton aria-label="cartIcon" color='secondary'>
                                                    <Badge badgeContent={4} sx={{fontFamily : poppinsMedium.style.fontStyle}} color='warning'>
                                                        {pages.startIcon()}
                                                    </Badge>
                                                </IconButton>
                                                : <Button variant={pages.variant ? pages.variant : "text"} color="secondary" sx={{ mr: 2, fontFamily: mediumFont }} startIcon={pages.startIcon()} onClick={() => handleRoute(pages.route)}>
                                                    {pages.name}
                                                </Button>}
                                        </Link>
                                    })
                                }
                            </Stack>
                        </Toolbar>
                    </AppBar>
                    :
                    <MenuDrawer />
            }
        </Box >
    )
}