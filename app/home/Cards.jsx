import React from 'react';
import Image from 'next/image';

export default function Cards() {
    return (
        <React.Fragment>
            <div className='container mt-5 w-75'>
                <section className='row mt-5'>
                    <div className='col-md-6'>
                        <div>
                            <Image src='/Images/ilustrations/ilu_01.svg' width={300} height={300} alt='Unique Designs - VOLQOR' />
                        </div>
                    </div>
                    <div className='col-md-6 mt-4'>
                        <h2>Unique Designs</h2>
                        <p>
                            Each of my projects features a unique and distinctive design. I ensure that every design is exclusive to provide users with a personalized and engaging experience. Explore my solutions and discover how my innovative designs can enhance your digital experience.
                        </p>
                    </div>
                </section>

                <section className='row mt-5'>
                    <div className='col-md-6 order-md-2'>
                        <div>
                            <Image src='/Images/ilustrations/ilu_02.svg' width={250} height={250} alt='Visual Appeal Matters - VOLQOR' />
                        </div>
                    </div>
                    <div className='col-md-6 mt-4 order-md-1'>
                        <h2>Visual Appeal Matters</h2>
                        <p>
                            I dedicate time and attention to every design detail to ensure each interface is unique, intuitive, and easy to use. My goal is for every user to enjoy a visually pleasing and functional experience, enhancing satisfaction and engagement.
                        </p>
                    </div>
                </section>

                <section className='row mt-5'>
                    <div className='col-md-6'>
                        <div>
                            <Image src='/Images/ilustrations/ilu_03.svg' width={250} height={250} alt='Multiplatform Designs - VOLQOR' />
                        </div>
                    </div>
                    <div className='col-md-6 mt-4'>
                        <h2>Multiplatform Designs</h2>
                        <p>
                            Most of my projects are designed to work on almost all modern platforms, including smartphones, tablets, desktops (PC and laptops), and the web. I ensure that each project is compatible and optimized to offer a smooth and consistent user experience, regardless of the device used. Explore my projects and discover the versatility of my multiplatform designs.
                        </p>
                    </div>
                </section>
                <hr />
            </div>
        </React.Fragment>
    )
}
