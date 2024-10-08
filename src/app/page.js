import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import './globals.css'

export default function Home() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Grid
        container 
        justifyContent="center"
        alignItems="center">
        <Grid
          className='relative m-8'>
          <Box
            className="relative p-2 border-4 border-dashed border-blue-950 rounded-full animate-spin-slow"
            justifyContent="center">
            <Avatar
              className="max-w-80 max-h-80 min-w-64 min-h-64 relative animate-anti-spin-slow"
              src={'/assets/images/rimbamorani-2.svg'} />
          </Box>

          <Box
            className="absolute -z-10 -bottom-4 -right-4 max-w-80 max-h-80 min-w-64 min-h-64 bg-yellow-300 rounded-full"
            justifyContent="center"></Box>
        </Grid>
      </Grid>
    </Box>
  );
}
