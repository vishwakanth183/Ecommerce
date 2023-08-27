import React from 'react';
import { useMediaQuery, Divider, Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles'
import { InfoOutlined, MenuBookOutlined, TipsAndUpdatesRounded } from '@mui/icons-material';


// Custom imports
import { poppinsBold, poppinsMedium } from '../shared/appfonts';

const Footer = () => {

    const FooterBoldTypography = styled(Typography)({
        fontFamily: poppinsBold.style.fontFamily,
        color: 'white'
    })

    const FooterMediumTypography = styled(Typography)({
        fontFamily: poppinsMedium.style.fontFamily,
        color: 'white',
        fontSize: 12
    })

    // Variable to handle list of footer pages
    const appPages = [
        { pageName: 'Home', route: 'home' },
        { pageName: 'Products', route: 'products' },
        { pageName: 'Wishlist', route: 'wishlist' },
        { pageName: 'Toprated', route: 'toprated' },
        { pageName: 'TrendingBooks', route: 'trending-books' },
        { pageName: 'Comicbooks', route: 'comicbooks' },
        { pageName: 'Cookingbooks', route: 'cookingbooks' },
        { pageName: 'Novels', route: 'novels' },
        { pageName: 'Aboutus', route: 'aboutus' },
        { pageName: 'Contactus', route: 'contactus' },
        { pageName: 'Kidsfavourite', route: 'kidsfavourite' },
        { pageName: 'Mensfavourite', route: 'mensfavourite' },
        { pageName: 'Travelbooks', route: 'travelbooks' }
    ]

    const isDesktop = useMediaQuery('(min-width:1200px)');


    // Variable to handle terms pages
    const termsPages = [
        {
            pageName: 'Terms and conditions',
            route: 'terms&conditions'
        },
        {
            pageName: 'Privacy and policy',
            route: 'privacy&policy'
        },
        {
            pageName: 'FAQ',
            route: 'faq'
        }
    ]



    return (
        <footer>
            <Grid container sx={{ backgroundColor: 'black', mt: 20, justifyContent: 'center' }} spacing={2}>

                {/* Logo section with company details */}
                <Grid item xs={12} md={12} lg={3} p={isDesktop ? 0 :3}>
                    <Stack direction={'row'} alignItems={'center'} color={'white'}>
                        <IconButton aria-label="bookMenuIcon" color='inherit'>
                            <TipsAndUpdatesRounded fontSize='large' />
                        </IconButton>
                        <FooterBoldTypography variant="h6">VBooks</FooterBoldTypography>
                    </Stack>
                    <FooterMediumTypography gutterBottom sx={{ ml: 0.5, mt: 1 }}>
                        At Vbooks, we're passionate about bringing the world of literature to your fingertips. Our carefully curated collection spans genres, from timeless classics to contemporary gems. Immerse yourself in captivating stories, embark on knowledge-seeking journeys, and explore diverse perspectives. Our commitment to quality ensures that each book resonates with the reader's soul. Join us in fostering a community bound by a love for the written word. With Vbooks, you're not just buying a book – you're embarking on an adventure, page by page. Let your reading journey begin with Vbooks. Discover, explore, and experience the magic of words.
                    </FooterMediumTypography>
                </Grid>

                {/* List of sections available in app */}
                <Grid item xs={12} md={12} lg={5} marginBottom={2} sx={{ display: 'flex', flexDirection: 'row' }}>
                    {isDesktop && <Divider orientation='vertical' color='#ddd' sx={{ width: 2, ml: 3, mr: 1 }} />}

                    <Stack sx={{ width: '100%' }}>
                        <List sx={{ display: 'flex', flexWrap: 'wrap', maxHeight: isDesktop ? 300 : 500, flexDirection: 'column' }}>
                            {appPages.map((page, index) => {
                                return <ListItem sx={{ width: 50 }} key={index}>
                                    <ListItemButton>
                                        <ListItemIcon sx={{ mr: -2 }}>
                                            <MenuBookOutlined fontSize='small' htmlColor='white' />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <FooterMediumTypography>
                                                {page.pageName}
                                            </FooterMediumTypography>
                                        </ListItemText>
                                    </ListItemButton>
                                </ListItem>
                            })}
                        </List>
                    </Stack>
                </Grid>

                {/* Faqs and privacy policy */}
                <Grid item xs={12} md={12} lg={3} marginBottom={2} marginLeft={5} sx={{ display: 'flex', flexDirection: 'row' }}>
                    {isDesktop && <Divider orientation='vertical' color='#ddd' sx={{ width: 2, height: 200 }} />}
                    <Stack direction={'row'} sx={{ width: '100%', ml: isDesktop ? 0 : -5 }}>
                        <List sx={{}}>
                            {termsPages.map((page, index) => {
                                return <ListItem key={index}>
                                    <ListItemButton>
                                        <ListItemIcon sx={{ mr: -2 }}>
                                            <InfoOutlined fontSize='small' htmlColor='white' />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <FooterMediumTypography>
                                                {page.pageName}
                                            </FooterMediumTypography>
                                        </ListItemText>
                                    </ListItemButton>
                                </ListItem>
                            })}
                        </List>
                    </Stack>
                </Grid>
            </Grid>
        </footer>
    );
};

export default Footer;
