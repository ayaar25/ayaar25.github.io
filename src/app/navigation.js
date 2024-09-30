import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Socials from './socials';

export default function Navbar() {
  return (
    <AppBar
      className="border-b-4 border-blue-950 object-cover"
      position="static"
      elevation={0}
      enableColorOnDark>
      <Toolbar
        className='bg-slate-50'>
        <img className='w-14 h-14 p-2 absolute left-0' src='/assets/images/chicken-code.svg' alt='rimbamorani.dev'/>
        <Socials/>
      </Toolbar>
    </AppBar>
  );
}
