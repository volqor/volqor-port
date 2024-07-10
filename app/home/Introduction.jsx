"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import Data from "../data.json";
import styles from './modules/h2.module.css';


export default function Introduction() {
    const strings = [
        "Making games",
        "Making apps",
        "Making good software"
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(150 - Math.random() * 100);
    const [period, setPeriod] = useState(2000);

    useEffect(() => {
        let ticker = setInterval(handleType, delta);

        return () => { clearInterval(ticker) };
    }, [text]);

    const handleType = () => {
        let i = currentIndex % strings.length;
        let fullText = strings[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 1.5);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setCurrentIndex((prevIndex) => prevIndex + 1);
            setPeriod(2000);
            setDelta(150 - Math.random() * 100);
        }
    }

    // Calcula la altura máxima basada en el string más largo
    const maxHeight = Math.max(...strings.map(str => str.length)) * 0.8;

    return (
        <React.Fragment>
            <div className='container-fluid mt-4'>
                <div className='d-flex justify-content-center'>
                    <Image src={Data.logo_bg_black} width={115} height={115} alt='VOLQOR' style={{ borderRadius: '50%' }} />
                </div>
            </div>

            <div className='container-fluid mt-3'>
                <h1 className='text-center' style={{ fontSize: '35px' }}>
                    VOLQOR
                </h1>
                <hr />
                <div style={{ height: `${maxHeight}px`, position: 'relative' }}>
                    <h2
                        className={`${styles['h2-animated']} text-center`}
                        style={{
                            fontSize: '15px',
                            position: 'absolute',
                            width: '100%',
                        }}
                    >
                        {text}
                    </h2>
                </div>
                <hr />
            </div>
        </React.Fragment>
    );
}