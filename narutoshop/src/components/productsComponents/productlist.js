import React, { useEffect, useState } from "react";
import Image from 'next/image'
import { FixedSizeList as List } from 'react-window'
import InfiniteLoader from 'react-window-infinite-loader'
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import { Box, Grid, Stack, Typography } from '@mui/material';

// Custom imports
import { poppinsBold } from '../../shared/appfonts';

// Variables used for infinite virtualized list
const PAGE_SIZE = 20;
const TOTAL_PRODUCTS = 1000;
const LOAD_THRESHOLD = 200;
const itemSize = (index) => 300;

const HorizontalProductList = () => {
    const [products, setProducts] = useState([]); //State to maintain product list data
    const [isLoading, setIsLoading] = useState(false); //State to maintain loading state while fetching products from server
    const [currentPage, setCurrentPage] = useState(1); //State to maintain current page record

    // Custom Title MUI component for UI
    const TitleTypography = styled(Typography)({
        fontFamily: poppinsBold.style.fontFamily,
        color: 'black',
    });

    // Custom Medium MUI component for UI
    const MediumTypography = styled(Typography)({
        fontFamily: poppinsBold.style.fontFamily,
        color: 'black',
    });

    // Function used to fetch products from server
    const fetchProducts = async (pageNumber = currentPage) => {
        setIsLoading(true);
        try {
            const response = await axios.get(
                `http://localhost:5000/products?_page=${pageNumber}&_limit=${PAGE_SIZE}`
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

    // Function used to load more product items to infinite list
    const loadMoreItems = async () => {
        if (!isLoading) {
            console.log("currentPage", currentPage);
            if (products.length < TOTAL_PRODUCTS) {
                setIsLoading(true);
                setCurrentPage(currentPage + 1);
                fetchProducts(currentPage);
            }
            else {
                setIsLoading(false)
            }
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []); // Fetch initial data

    const renderItem = ({ index, style }) => {
        // console.log("index", products[index])
        const product = products[index];

        if (!product) {
            // Render a skeleton loader for items that are being fetched
            return renderSkeletonItem();
        }

        return (
            <Grid lg={3}>
                <div style={style} key={product.id}>
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
                </div>
            </Grid>
        );
    };


    return (
        <Box>
            <Grid container direction={'row'}>
                <InfiniteLoader
                    isItemLoaded={() => isLoading}
                    itemCount={TOTAL_PRODUCTS}
                    loadMoreItems={loadMoreItems}
                >
                    {({ onItemsRendered, ref }) => (
                        <List
                            height={window.innerHeight}
                            width={'100%'} // Check for window object
                            itemSize={200}
                            itemCount={products.length}
                            onItemsRendered={onItemsRendered}
                            ref={ref}
                        // layout="horizontal"
                        // {...props}
                        >
                            {renderItem}
                        </List>
                    )}
                </InfiniteLoader>
            </Grid>
        </Box>
    )
}

export default HorizontalProductList;
