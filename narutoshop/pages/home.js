import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles'
import Image from 'next/image';
import { useMediaQuery } from '@mui/material';
import TrendingBooksSlider from '../src/components/sliders/trendingslider/trendingBooks';
import { poppinsBold } from '../src/shared/appfonts';
import KidsFavourite from '../src/components/homeComponents/kidsFavourite';

function Home(props) {

    const isMobile = useMediaQuery('(max-width:1200px)');

    const HeaderTypography = styled(Typography)({
        fontFamily: poppinsBold.style.fontFamily
    })

    return (
        <Box>

            {/* Trending Books section */}
            <Stack direction={isMobile ? 'column' : 'row'} sx={{ display: 'flex', width: '100%', justifyContent: 'center' }}>


                {!isMobile && <Box sx={{ width: '50%' }}>
                    <Image
                        src={"/trendingBooks.png"}
                        alt="Vercel Logo"
                        width={100}
                        height={100}
                        style={{ width: '100%', height: '100%', position: 'relative', objectFit: 'contain' }}
                        priority
                    />
                </Box>}

                {
                    isMobile && <HeaderTypography variant='h5' gutterBottom># Trending Books</HeaderTypography>
                }
                <Box sx={{ width: isMobile ? '100%' : '50%', maxHeight: 400 }}>
                    <TrendingBooksSlider />
                </Box>

            </Stack>

            {/* Kidsfavourite section */}
            <HeaderTypography variant='h5' sx={{ mt: 10 }} gutterBottom># Kids Favourite Books</HeaderTypography>
            <Stack>
                <KidsFavourite />
            </Stack>

            {/* Travel section */}
            {/* <HeaderTypography variant='h5' sx={{ mt: 10 }} gutterBottom># Travel Books</HeaderTypography>
            <Stack>
                <KidsFavourite />
            </Stack> */}
        </Box>
    );
}

export default Home;