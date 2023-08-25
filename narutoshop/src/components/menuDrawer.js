import React, { useState } from 'react';
import { AppBar, Button, Drawer, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import LunchDiningRoundedIcon from '@mui/icons-material/LunchDiningRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import BubbleChartRoundedIcon from '@mui/icons-material/BubbleChartRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';

// custom imports
import { poppinsBold, poppinsMedium } from '../shared/appfonts';

function MenuDrawer(props) {

    const mediumFont = poppinsMedium.style.fontFamily;
    const boldFont = poppinsBold.style.fontFamily;
    const [open, setOpen] = useState(false);

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
                <Stack alignItems={'flex-start'} width={200} sx={{overflowX : 'hidden'}}>
                    <Button variant="text" color="secondary" sx={{ mr: 2, fontFamily: boldFont, justifyContent: 'flex-start' , m:0.5 }} fullWidth startIcon={<HomeRoundedIcon fontSize='large' />}>
                        Home
                    </Button>
                    <Button variant="text" color="secondary" sx={{ mr: 2, fontFamily: boldFont, justifyContent: 'flex-start', m:0.5 }} fullWidth startIcon={<BubbleChartRoundedIcon fontSize='large' />}>
                        About us
                    </Button>
                    <Button variant="text" color="secondary" startIcon={<PersonRoundedIcon fontSize='large' />} fullWidth sx={{ fontFamily: boldFont, justifyContent: 'flex-start',m:0.5 }}>
                        Signin
                    </Button>
                </Stack>
            </Drawer>

        </React.Fragment>
    );
}

export default MenuDrawer;