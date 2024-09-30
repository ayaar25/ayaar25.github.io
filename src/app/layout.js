import { createTheme } from '@mui/material/styles';
import BookIcon from '@mui/icons-material/Book';
import CodeIcon from '@mui/icons-material/Code';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import localFont from "next/font/local";
import Navbar from './navigation';
import "./globals.css";
import LeftDrawer from './drawer';

const NAVIGATION = [
  {
    segment: 'blog',
    title: 'Blog',
    icon: <BookIcon />,
  },
  {
    segment: 'note',
    title: 'Note',
    icon: <StickyNote2Icon />,
  },
  {
    segment: 'project',
    title: 'Project',
    icon: <CodeIcon />,
  },
];

const BRANDING = {
  logo: <img src='/assets/images/chicken_code.svg' alt='rimbamorani.dev'/>,
  title: ' '
}

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "rimbamorani",
  description: "Aya Rimbamorani Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50`}>
        <Navbar />
        {/* <LeftDrawer /> */}
        {children}
      </body>
    </html>
  );
}
