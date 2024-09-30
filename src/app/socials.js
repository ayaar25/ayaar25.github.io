import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';
import XIcon from '@mui/icons-material/X';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Box, Stack } from '@mui/material';

function LinkedInIcon() {
  return (
    <SvgIcon>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26.6667 13.3333C29.3188 13.3333 31.8624 14.3869 33.7377 16.2622C35.6131 18.1376 36.6667 20.6811 36.6667 23.3333V35H30V23.3333C30 22.4493 29.6488 21.6014 29.0237 20.9763C28.3986 20.3512 27.5507 20 26.6667 20C25.7826 20 24.9348 20.3512 24.3096 20.9763C23.6845 21.6014 23.3333 22.4493 23.3333 23.3333V35H16.6667V23.3333C16.6667 20.6811 17.7202 18.1376 19.5956 16.2622C21.471 14.3869 24.0145 13.3333 26.6667 13.3333Z" stroke="#061F37" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9.99999 15H3.33333V35H9.99999V15Z" stroke="#061F37" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6.66666 9.99998C8.50761 9.99998 9.99999 8.5076 9.99999 6.66665C9.99999 4.8257 8.50761 3.33331 6.66666 3.33331C4.82571 3.33331 3.33333 4.8257 3.33333 6.66665C3.33333 8.5076 4.82571 9.99998 6.66666 9.99998Z" stroke="#061F37" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </SvgIcon>
  )
}

function GitHubIcon() {
  return (
    <SvgIcon>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_50_72)">
        <path d="M15 31.6667C6.66668 34.1667 6.66668 27.5 3.33334 26.6667M26.6667 36.6667V30.2167C26.7292 29.4219 26.6218 28.623 26.3517 27.873C26.0816 27.123 25.6549 26.439 25.1 25.8667C30.3333 25.2833 35.8333 23.3 35.8333 14.2C35.8329 11.873 34.9378 9.63533 33.3333 7.95C34.0931 5.91418 34.0394 3.66391 33.1833 1.66666C33.1833 1.66666 31.2167 1.08333 26.6667 4.13333C22.8467 3.09803 18.82 3.09803 15 4.13333C10.45 1.08333 8.48334 1.66666 8.48334 1.66666C7.6273 3.66391 7.57358 5.91418 8.33334 7.95C6.71689 9.64783 5.82088 11.9058 5.83334 14.25C5.83334 23.2833 11.3333 25.2667 16.5667 25.9167C16.0183 26.4833 15.5954 27.159 15.3255 27.8999C15.0556 28.6407 14.9447 29.4301 15 30.2167V36.6667" stroke="#061F37" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <defs>
        <clipPath id="clip0_50_72">
        <rect width="40" height="40" fill="white"/>
        </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  )
}

export default function Socials() {
  return (
    <Stack direction='row' spacing={1} className='p-2 text-blue-950 absolute right-0'>
      <Box className='flex items-center justify-center w-9 h-9 border-2 border-blue-950 rounded-full'>
        <GitHubIcon/>
      </Box>
      <Box className='flex items-center justify-center w-9 h-9 border-2 border-blue-950 rounded-full'>
        <LinkedInIcon />
      </Box>
      <Box className='flex items-center justify-center w-9 h-9 border-2 border-blue-950 rounded-full'>
        <XIcon />
      </Box>
      <Box className='flex items-center justify-center w-9 h-9 border-2 border-blue-950 rounded-full'>
        <MailOutlineIcon/>
      </Box>
    </Stack>
  );
}
