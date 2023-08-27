import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grow from '@mui/material/Grow';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Theme } from '@mui/material/styles';

// Custom imports
import trendingJson from '../sliders/trendingslider/trendingImages.json'
import kidsbookJson from './kidbook.json'






export default function KidsFavourite() {

    // Variable to handle favourites animation
    const [showFavouriteKids, setShowFavouriteKids] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowFavouriteKids(true)
        }, 2000)
    }, [])

    const GrowImageComponet = ({ imgSrc, index }) => {
        // console.log("index+1 * 2000",index,index+1 * 2000)
        return <Grow in={showFavouriteKids} timeout={(index+1)*1.3 * 1000}>
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
                {/* <Grow in={checked}>{icon}</Grow> */}
                {/* Conditionally applies the timeout prop to change the entry speed. */}
                {/* <Grow
                    in={checked}
                    style={{ transformOrigin: '0 0 0' }}
                    {...(checked ? { timeout: 1000 } : {})}
                >
                    {icon}
                </Grow> */}

                {
                    kidsbookJson.images.map((imgSrc, index) => {
                        return <GrowImageComponet imgSrc={imgSrc} index={index} key={index} />
                    })
                }
            </Box>
        </Box>
    );
}