import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Downloads() {
    return (
        <React.Fragment>
            <div className='container-fluid mt-5'>
                <section className='p-4'>
                    <p className='mx-auto' style={{ textAlign: 'justify', width: '90%' }}>
                        Are you ready for an addictive mental challenge? Discover FlipMAD! This exciting free and offline puzzle game for Android will make you think quickly as you search for and match cards before time runs out. Each level is a new adventure with different difficulties and styles, ensuring you'll never get bored. Earn coins with each victory and use them to continue from where you left off without losing your progress.
                    </p>
                </section>

                <section className='container-fluid'>
                    <h2 className='text-center'>
                        Download for Free
                    </h2>
                    <p className='text-center'>
                        You can download FlipMAD completely free from the official platforms
                    </p>
                </section>
            </div>

            <div className='container-fluid d-flex justify-content-center align-items-center'>
                <Link href='' legacyBehavior>
                    <a className='mx-2'>
                        <Image src='/Images/icons/download_googlePlay.svg' width={250} height={250} alt='FlipMAD Google Play' className='img-fluid' />
                    </a>
                </Link>
                <Link href='' legacyBehavior>
                    <a className='mx-2'>
                        <Image src='/Images/icons/download_itchio.svg' width={235} height={74} alt='FlipMAD Itch.io' className='img-fluid' />
                    </a>
                </Link>
            </div>
        </React.Fragment>
    );
}
