import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import './globals.css'

export default function Home() {
  return (
    <Container>
      <Grid
        className='relative'
        container 
        justifyContent="center"
        display="flex"
        alignItems="center" >
        <Box
          className="relative p-2 border border-dashed border-gray-50 rounded-full animate-spin-slow"
          component="section"
          justifyContent="center"
          display="flex">

        <Avatar
          className="w-80 h-80 relative animate-anti-spin-slow"
          src={'/assets/images/rimbamorani_ava.svg'} />
        </Box>
      </Grid>
    </Container>
  );
}
