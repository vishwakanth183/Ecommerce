import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// custom styles
import './styles.css';
import { Box, Paper } from '@mui/material';
import trendingJson from './trendingImages.json'

export default function TrendingBooksSlider() {
    return (
        <Box sx={{ height: '100%', width: '100%' }}>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                {
                    trendingJson.images.map((trendingBooks, index) => {
                        return <SwiperSlide key={index}>
                            <Paper elevation={3}>
                                <img
                                    style={{ height: 300, width: '100%' , objectFit:'cover' }}
                                    src={trendingBooks}
                                />
                            </Paper>
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </Box>
    );
}