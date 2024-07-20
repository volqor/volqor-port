import React from 'react';

import "../../../public/CSS/bootstrap.css";
import Data from "../../data.json";

import Introduction from './Components/Introduction';
import Branding from './Components/Branding';
import Downloads from './Components/Downloads';
import Another from './Components/Another';




export const metadata = {
    title: 'FlipMAD | VOLQOR',
    description: 'Discover FlipMAD, an exciting and addictive free puzzle game for Android. Find and match cards before time runs out! Each level offers new challenges with varied animations and difficulties. Download now and enjoy this offline mental challenge!',
    keywords: 'FlipMAD, VOLQOR, puzzle game, Android game, free game, offline game, mental challenge, card matching game, addictive game, mobile game, tablet game, free download, a1, b2, c3, d4, e5',
    icons: {
        icon: Data.game_flipmad_logo,
    },
    openGraph: {
        title: 'FlipMAD | VOLQOR',
        description: 'Discover FlipMAD, an exciting and addictive free puzzle game for Android. Find and match cards before time runs out! Each level offers new challenges with varied animations and difficulties. Download now and enjoy this offline mental challenge!',
        url: 'https://volqor.github.io/games/flipmad',
        type: 'website',
        images: [
            {
                url: '/Images/projects/flipmad/favicon/favicon_noBorders_1024x1024.jpg',
                width: 1024,
                height: 1024,
                alt: 'FlipMAD Logo'
            }
        ],
        site_name: 'FlipMAD'
    },
    twitter: {
        card: 'summary_large_image',
        site: '@volqor',
        title: 'FlipMAD | VOLQOR',
        description: 'Discover FlipMAD, an exciting and addictive free puzzle game for Android. Find and match cards before time runs out! Each level offers new challenges with varied animations and difficulties. Download now and enjoy this offline mental challenge!',
        image: '/Images/projects/flipmad/favicon/favicon_noBorders_1024x1024.jpg'
    },
    robots: 'index, follow',
    canonical: 'https://volqor.github.io/games/flipmad'
}
export default function page() {
    return (
        <React.Fragment>
            <Introduction />
            <Branding />
            <Downloads />
            <Another />
        </React.Fragment>
    )
}
