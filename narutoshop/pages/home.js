import React from 'react'
import { AppBar, Box, IconButton, Stack, Toolbar, Typography, Button, useMediaQuery } from '@mui/material'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import BubbleChartRoundedIcon from '@mui/icons-material/BubbleChartRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';


// custom imports
import { poppinsMedium } from '../src/shared/appfonts';
import MenuDrawer from '../src/components/menuDrawer';

export default function Home() {

  const mediumFont = poppinsMedium.style.fontFamily;
  const isMobile = useMediaQuery('(min-width:600px)');

  return (
    <Box sx={{ display: 'flex' }}>


      {
        isMobile ?
          <AppBar color='transparent' position='fixed'>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>

              {/* Left view section */}
              <Stack direction={'row'} alignItems={'center'}>
                <IconButton aria-label="bookMenuIcon" color='secondary'>
                  <MenuBookIcon fontSize='large' />
                </IconButton>
                <Typography variant="h6" sx={{ fontFamily: mediumFont }}>VBooks</Typography>
              </Stack>

              {/* Right view section */}
              <Stack direction={'row'} alignItems={'center'}>
                <Button variant="text" color="secondary" sx={{ mr: 2, fontFamily: mediumFont }} startIcon={<HomeRoundedIcon fontSize='large' />}>
                  Home
                </Button>
                <Button variant="text" color="secondary" sx={{ mr: 2, fontFamily: mediumFont }} startIcon={<BubbleChartRoundedIcon fontSize='large' />}>
                  About us
                </Button>
                <Button variant="contained" color="secondary" startIcon={<PersonRoundedIcon fontSize='large' />} sx={{ fontFamily: mediumFont }}>
                  Signin
                </Button>
              </Stack>

            </Toolbar>
          </AppBar>
          :
          <MenuDrawer />  
    }
    </Box>
  )
}