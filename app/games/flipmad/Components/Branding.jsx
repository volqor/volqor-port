"use client"
import React from 'react';
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const mobileImages = [
    '/Images/projects/flipmad/branding/mobile/eng_mobile_01.png',
    '/Images/projects/flipmad/branding/mobile/eng_mobile_02.png',
    '/Images/projects/flipmad/branding/mobile/eng_mobile_03.png'
];

const tabletImages = [
    '/Images/projects/flipmad/branding/tablet/eng_tablet_01.png',
    '/Images/projects/flipmad/branding/tablet/eng_tablet_02.png',
    '/Images/projects/flipmad/branding/tablet/eng_tablet_03.png'
];

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

export default function Branding() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h2>For mobile:</h2>
                    <Carousel
                        responsive={responsive}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={3000}
                        arrows={true}
                    >
                        {mobileImages.map((src, index) => (
                            <div key={index} className="d-flex justify-content-center align-items-center">
                                <Image
                                    src={src}
                                    className="img-fluid unselectable"
                                    width={1242}
                                    height={2208}
                                    alt={`Mobile slide ${index + 1}`}
                                    priority
                                />
                            </div>
                        ))}
                    </Carousel>
                </div>
                <div className="col-md-6 mt-4">
                    <h2>For Tablets:</h2>
                    <Carousel
                        responsive={responsive}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={3000}
                        arrows={true}
                    >
                        {tabletImages.map((src, index) => (
                            <div key={index} className="d-flex justify-content-center align-items-center">
                                <Image
                                    src={src}
                                    className="img-fluid unselectable"
                                    width={2048}
                                    height={2732}
                                    alt={`Tablet slide ${index + 1}`}
                                    priority
                                />
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    );
}
