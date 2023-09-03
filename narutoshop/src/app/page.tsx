"use client";
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation'
import styles from './page.module.css'
import TipsAndUpdatesRoundedIcon from '@mui/icons-material/TipsAndUpdatesRounded';
import Typography from '@mui/material/Typography'
import { Stack } from '@mui/material'

import { poppinsBold } from '../../src/shared/appfonts'

export default function Home() {

  // for navigation purpose
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/home')
    }, 5000)
  }, [])

  return (
    <main className={styles.main}>
      <div className={styles.splashAnim}>
        <Stack display={'flex'} direction={'row'} alignItems={'center'} justifyContent={'center'}>
          <TipsAndUpdatesRoundedIcon sx={{ height: 150, width: 150, mr: 3 }} color='secondary' />
          <Typography variant="h1" color="initial" sx={{ fontFamily: poppinsBold.style.fontFamily , color:'black' }}>
            Vbooks
          </Typography>
        </Stack>
      </div>
    </main>
  )
}
