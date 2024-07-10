import React from 'react';
import Script from 'next/script';
import { Inter } from 'next/font/google';

import "../public/CSS/bootstrap.css";
import Data from "./data.json";

import { NavBar } from './Navigation';
import Footer from './Footer';

const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Home | VOLQOR',
  description: 'Welcome to VOLQOR, the portfolio of a dedicated developer and designer specializing in creating unique, visually appealing, and multiplatform software solutions. Explore my projects and discover how my innovative designs can enhance your digital experience.',
  keywords: 'VOLQOR, developer portfolio, software solutions, unique designs, multiplatform development, mobile development, tablet development, web development, innovative software, personalized user experience',
  icons: {
    icon: Data.logo,
  },
  openGraph: {
    title: 'Home | VOLQOR',
    description: 'Welcome to VOLQOR, the portfolio of a dedicated developer and designer specializing in creating unique, visually appealing, and multiplatform software solutions. Explore my projects and discover how my innovative designs can enhance your digital experience.',
    url: 'https://volqor.github.io/',
    type: 'website',
    images: [
      {
        url: '/Images/projects/flipmad/favicon/favicon_noBorders_1024x1024.jpg',
        width: 1024,
        height: 1024,
        alt: 'VOLQOR Logo'
      }
    ],
    site_name: 'VOLQOR'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@volqor',
    title: 'Home | VOLQOR',
    description: 'Welcome to VOLQOR, the portfolio of a dedicated developer and designer specializing in creating unique, visually appealing, and multiplatform software solutions. Explore my projects and discover how my innovative designs can enhance your digital experience.',
    image: '/Images/projects/flipmad/favicon/favicon_noBorders_1024x1024.jpg'
  },
  robots: 'index, follow',
  canonical: 'https://volqor.github.io/'
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <div className='container-fluid mt-2'>
          <NavBar />
        </div>

        {children}

        <Footer />
      </body>


      <Script src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js' integrity='sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz' crossOrigin='anonymous' />
    </html>
  )
}
