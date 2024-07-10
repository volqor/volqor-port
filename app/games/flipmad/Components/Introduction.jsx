import React from 'react';
import Image from 'next/image';

export default function Introduction() {
    return (
        <React.Fragment>
            <div className='container-fluid mt-5 mb-5'>
                <div className='d-flex justify-content-center'>
                    <Image src='/Images/projects/flipmad/favicon/favicon_noBorders_1024x1024.jpg' height={175} width={175} alt='FlipMAD Logo' className='img-fluid' style={{ borderRadius: '25%' }} />
                </div>
                <div className='container-fluid mt-3 d-flex justify-content-center'>
                    <h1 className='text-center' style={{ 'fontSize': '45px', 'fontWeight': 'bold' }}>
                        FlipMAD
                    </h1>
                </div>

                <section className='container-fluid'>
                    <p className='mx-auto' style={{ textAlign: 'justify', width: '80%' }}>
                        Find and match cards before time runs out! Each level is different, offering a new challenge with varied animations and exciting difficulties. Earn coins and continue where you left off. Download now and have fun! #FlipMAD
                    </p>
                </section>
            </div>
        </React.Fragment>
    )
}
