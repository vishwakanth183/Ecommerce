import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { VariableSizeList as List } from 'react-window'; // Import VariableSizeList
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Skeleton from '@mui/material/Skeleton';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import { Box, Stack, Typography } from '@mui/material';

import { poppinsBold } from '../../shared/appfonts';

const PAGE_SIZE = 20;
const TOTAL_PRODUCTS = 1000;
const LOAD_THRESHOLD = 200;

const HorizontalProductList = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const containerRef = useRef();

    const itemSize = (index) => 300; // Fixed width of each item in pixels

    const TitleTypography = styled(Typography)({
        fontFamily: poppinsBold.style.fontFamily,
        color: 'black',
    });

    const MediumTypography = styled(Typography)({
        fontFamily: poppinsBold.style.fontFamily,
        color: 'black',
    });

    const fetchProducts = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get(
                `http://localhost:5000/products?_page=${currentPage}&_limit=${PAGE_SIZE}`
            );
            const newProducts = response.data;
            setProducts([...products, ...newProducts]);
            setCurrentPage(currentPage + 1);
        } catch (error) {
            console.error('Error fetching products:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []); // Fetch initial data

    const handleScroll = useCallback(() => {
        if (!isLoading && containerRef.current) {
            const container = containerRef.current;
            const isNearEnd =
                container.scrollLeft + container.clientWidth + LOAD_THRESHOLD > container.scrollWidth;
            console.log("container.scrollLeft", container.scrollLeft);
            console.log("container.clientWidth", container.clientWidth);
            console.log("container.scrollWidth", container.scrollWidth);
            console.log("isNearEnd", isNearEnd);
            if (false) {
                fetchProducts();
            }
        }
    }, [isLoading]);

    const renderSkeletonItem = () => {
        return (
            <div>
                <Grid item xs={1} md={2} lg={3}>
                    <Paper>
                        <Skeleton variant="rectangular" width={300} height={200} />
                        <Skeleton variant="text" width={200} />
                        <Skeleton variant="text" width={150} />
                        <Skeleton variant="text" width={80} />
                    </Paper>
                </Grid>
            </div>
        );
    };

    const renderItem = ({ index, style }) => {
        // console.log("index", products[index])
        const product = products[index];

        if (!product) {
            // Render a skeleton loader for items that are being fetched
            return renderSkeletonItem();
        }

        return (
            <div style={style} key={product.id}>
                <Grid item xs={1} md={2} lg={3}>
                    <Paper sx={{ m: 3 }} elevation={3}>
                        <Stack display={'flex'} direction={'row'}>
                            <Image
                                width={120}
                                height={150}
                                src={
                                    'https://images.pexels.com/photos/10863290/pexels-photo-10863290.jpeg?auto=compress&cs=tinysrgb&w=600'
                                }
                                alt="Alternate image"
                                style={{ objectFit: 'fill' }}
                            />
                            <Box
                                display={'flex'}
                                alignItems={'center'}
                                flexDirection={'column'}
                                justifyContent={'center'}
                                width={'100%'}
                            >
                                <TitleTypography>{product.name}</TitleTypography>
                                <MediumTypography>${product.price}</MediumTypography>
                            </Box>
                        </Stack>
                    </Paper>
                </Grid>
            </div>
        );
    };

    return (
        <div
            className="scroll-container" // Add a CSS class for horizontal scrolling
            ref={containerRef}
        >
            <div style={{ display: 'flex', overflowX: 'auto' }}>
                <List
                    height={200} // Specify the height of the list
                    width={typeof window !== 'undefined' ? window.innerWidth : 0} // Check for window object
                    itemCount={products.length + PAGE_SIZE} // Use products.length + PAGE_SIZE
                    itemSize={itemSize} // Width of each item
                    layout="horizontal" // Specify horizontal layout
                    onScroll={handleScroll}
                >
                    {renderItem}
                </List>
            </div>
        </div>
    );
};

export default HorizontalProductList;
