import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles'
import { Box, Button, Divider, Grid, IconButton, Paper, Stack, Typography, useMediaQuery } from '@mui/material';
import { poppinsBold, poppinsMedium } from '../../shared/appfonts';
import Image from 'next/image';
import axios from 'axios';
import { AddCircleRounded, DeleteForeverSharp, DeleteRounded, PlusOneOutlined, RemoveCircle, TurnedInNotRounded } from '@mui/icons-material';

function CartListandSummary(props) {

    const TitleTypography = styled(Typography)({
        fontFamily: poppinsBold.style.fontFamily,
        color: "black"
    })

    const MediumTypography = styled(Typography)({
        fontFamily: poppinsMedium.style.fontFamily,
        color: "black"
    })

    const CustomButton = styled(Button)({
        fontFamily: poppinsBold.style.fontFamily,
    })

    const [cartList, setCartList] = useState([]) //Variable to handle carlist
    const [cartLoader, setCartLoader] = useState(true) //Variable to handle cartloader
    const isDesktop = useMediaQuery('(min-width:600px)'); //Variable to check whether the device is in tab or desktop state
    const cartSummaryData = [
        {
            title: 'Subtotal',
            value: '$3000.00'
        },
        {
            title: 'GST',
            value: '$50.00'
        },
        {
            title: 'CGST',
            value: '$50.00'
        },
        {
            title: 'Discount',
            value: '$100.00'
        },
        {
            title: 'Shipping',
            value: 'FREE'
        },
        {
            title: 'Total',
            value: '$3000.00'
        }
    ]

    useEffect(() => {
        setCartLoader(true);
        fetchCartList();
    }, [])

    const fetchCartList = async () => {
        try {
            const response = await axios.get(
                `http://localhost:5000/products?_page=${1}&_limit=${10}`
            );
            setCartList(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        } finally {
            setCartLoader(false);
        }
    }

    return (
        <Box sx={{ display: 'flex', width: '100%', flexDirection: 'column' }}>

            <Grid container spacing={3}>

                {/* Cart list view */}
                <Grid item lg={8} md={12} sx={{ width: '100%' }}>
                    <Paper sx={{ overflowY: 'scroll', paddingBottom: 5, width: '100%', height: 500, display: 'flex', flexDirection: 'column' }} elevation={5}>

                        <TitleTypography gutterBottom variant='h5' padding={2} position={'relative'}>
                            Cart Products
                            <Divider sx={{ mt: 2 }} />
                        </TitleTypography>

                        <Box sx={{ mt: 0 }}>
                            {cartList.map((cartItem, index) => {
                                return <Box sx={{ minHeight: 200, width: '95%', marginTop: 5, display: 'flex', alignSelf: 'center', flexDirection: 'column' }} key={index}>
                                    <Stack display={'flex'} flexDirection={'row'} width={'100%'}>

                                        {/* Image View */}
                                        <Box sx={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <Paper elevation={5} sx={{ ml: 3 }}>
                                                <Image
                                                    width={150}
                                                    height={150}
                                                    src={
                                                        'https://images.pexels.com/photos/10863290/pexels-photo-10863290.jpeg?auto=compress&cs=tinysrgb&w=600'
                                                    }
                                                    alt="Alternate image"
                                                    style={{ objectFit: 'cover' }}
                                                />
                                            </Paper>
                                        </Box>

                                        <Stack sx={{ ml: 2, width: '100%', mr: 3 }}>

                                            {/* Product name , delete , save for later section */}
                                            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                                                <TitleTypography variant='h6'>{cartItem.name}</TitleTypography>
                                                <Stack direction={'row'}>
                                                    <IconButton>
                                                        <DeleteRounded fontSize='medium' color='secondary' />
                                                    </IconButton>
                                                    <IconButton>
                                                        <TurnedInNotRounded fontSize='medium' color='success' />
                                                    </IconButton>
                                                </Stack>
                                            </Stack>

                                            <Divider sx={{ mt: 1, mb: 1 }} />

                                            {/*cart item details */}
                                            <Box>
                                                <Stack direction={'row'} alignItems={'center'}>
                                                    <MediumTypography variant='body2' mr={1} sx={{ textDecoration: 'line-through', color: 'gray' }}>
                                                        $300.00</MediumTypography>
                                                    <MediumTypography variant='body1'>$200.00</MediumTypography>
                                                </Stack>
                                                <Stack direction={'row'} sx={{ alignItems: 'center' }}>
                                                    <MediumTypography>Quantity</MediumTypography>
                                                    <IconButton>
                                                        <RemoveCircle color='error' />
                                                    </IconButton>
                                                    <MediumTypography variant='body1'>3</MediumTypography>
                                                    <IconButton>
                                                        <AddCircleRounded color='success' />
                                                    </IconButton>
                                                </Stack>
                                            </Box>

                                        </Stack>

                                    </Stack>

                                    <Divider sx={{ mt: 5, ml: 3 }} />
                                </Box>
                            })}
                        </Box>
                    </Paper>
                </Grid>

                {/* Cart summary view */}
                <Grid item lg={4} md={12} sx={{ width: '100%' }}>
                    <Box display={'flex'} width={"100%"} height={300} justifyContent={'center'}>
                        <Paper sx={{ height: 380, width: '100%', padding: 5 }} elevation={5}>
                            <TitleTypography gutterBottom variant='h5'>
                                Cart Summary
                            </TitleTypography>
                            <Divider sx={{ mb: 3 }} />

                            {cartSummaryData.map((summaryView, summaryIndex) => {
                                return <Box>
                                    <Stack direction={'row'} key={summaryIndex} justifyContent={'space-between'}>
                                        <TitleTypography>{summaryView.title}</TitleTypography>
                                        <MediumTypography sx={{ color: 'green' }}>{summaryView.value}</MediumTypography>
                                    </Stack>
                                    <Divider sx={{ mt: 1.5, mb: 1.5 }} />
                                </Box>
                            })}

                            {/* Checkout Button */}
                            <Stack display={'flex'} alignItems={'flex-end'} mt={2}>
                                <CustomButton variant='contained' sx={{width:130}}>
                                    Checkout
                                </CustomButton>
                            </Stack>

                        </Paper>
                    </Box>
                </Grid>

            </Grid>

            {/* Cart save for later */}
            <Box display={'flex'} width={"100%"} height={250} justifyContent={'center'} mt={isDesktop ? 5 : 23}>
                <Paper sx={{ height: 250, width: '100%', padding: isDesktop ? 2 : 5 }} elevation={5}>
                    <TitleTypography gutterBottom variant='h5'>
                        Save for later
                    </TitleTypography>
                    <Divider sx={{ mt: 2 }} />
                </Paper>
            </Box>

        </Box>
    );
}

export default CartListandSummary;