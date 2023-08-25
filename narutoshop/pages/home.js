import React from 'react'
import { AppBar, Box, IconButton, Stack, Toolbar, Typography, Button } from '@mui/material'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import BubbleChartRoundedIcon from '@mui/icons-material/BubbleChartRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import {Poppins} from 'next/font/google'

const poppinsBold = Poppins({
  weight : '500',
  subsets : ['latin']
})

export default function Home() {

  return (
    <Box sx={{ display: 'flex' }}>

      <AppBar color='transparent' position='fixed'>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>

          {/* Left view section */}
          <Stack direction={'row'} alignItems={'center'}>
            <IconButton aria-label="bookMenuIcon" color='secondary'>
              <MenuBookIcon fontSize='large' />
            </IconButton>
            <Typography variant="h6" sx={{fontFamily : poppinsBold.style.fontFamily}}>VBooks</Typography>
          </Stack>

          {/* Right view section */}
          <Stack direction={'row'} alignItems={'center'}>
            <Button variant="text" color="secondary" sx={{ mr: 2 , fontFamily : poppinsBold.style.fontFamily }} startIcon={<HomeRoundedIcon fontSize='large' />}>
              Home
            </Button>
            <Button variant="text" color="secondary" sx={{ mr: 2 , fontFamily : poppinsBold.style.fontFamily }} startIcon={<BubbleChartRoundedIcon fontSize='large' />}>
              About us
            </Button>
            <Button variant="contained" color="secondary" startIcon={<PersonRoundedIcon fontSize='large' />} sx={{fontFamily : poppinsBold.style.fontFamily}}>
              Signin
            </Button>
          </Stack>

        </Toolbar>
      </AppBar>
    </Box>
  )
}