import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grow from '@mui/material/Grow';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Theme } from '@mui/material/styles';

// Custom imports
import trendingJson from '../sliders/trendingslider/trendingImages.json'
import kidsbookJson from './kidbook.json'
import { Skeleton, Stack, colors } from '@mui/material';






export default function KidsFavourite() {

    // Variable to handle favourites animation
    const [showFavouriteKids, setShowFavouriteKids] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowFavouriteKids(true)
        }, 10000)
    }, [])

    const GrowImageComponet = ({ imgSrc, index }) => {
        // console.log("index+1 * 2000",index,index+1 * 2000)
        return <Grow in={showFavouriteKids} timeout={(index + 1) * 1.3 * 1000}>
            <Paper sx={{ m: 1 }} elevation={4} key={index}>
                <img
                    style={{ height: 200, width: 200, objectFit: 'cover' }}
                    src={imgSrc}
                />
            </Paper>
        </Grow>
    };


    return (
        <Box >
            <Box sx={{ display: 'flex' }}>
                {showFavouriteKids ?
                    kidsbookJson.images.map((imgSrc, index) => {
                        return <GrowImageComponet imgSrc={imgSrc} index={index} key={index} />
                    })
                    :
                    <Stack direction={'row'}>
                        {Array.from({ length: 6 }).map((i, index) => {
                            return <Paper elevation={3} sx={{ m: 1 }}><Skeleton variant="rectangular" width={200} height={200} animation={'wave'} sx={{ backgroundColor: colors.deepPurple[100] }} /></Paper>
                        })}
                    </Stack>
                }
            </Box>
        </Box>
    );
}