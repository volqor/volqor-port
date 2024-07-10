import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Data from "./data.json";

const Footer = () => {
    return (
        <footer className="bg-black text-black d-flex justify-content-center py-4 mt-5">
            <div className="container">
                <div className="row">
                    <hr />
                    <div className="container-fluid d-flex justify-content-center w-75">
                        <Image src={Data.logo} height={80} width={80} alt="Logo | @stianook" />
                    </div>

                    <h5 className="text-center mt-2" style={{color: 'white'}}>
                        VOLQOR
                    </h5>
                    <p className="text-center text-secondary" style={{color: 'white'}}>
                        "I make good software"
                    </p>

                    

                    <div className='container-fluid d-flex justify-content-end'>
                        <a href="#top" style={{color: 'white'}}>Back to top</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;