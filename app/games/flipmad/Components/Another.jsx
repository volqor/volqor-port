import React from 'react'
import Link from 'next/link'

export default function Another() {
    return (
        <React.Fragment>
            <div className='container-fluid d-flex justify-content-center'>
                <Link href={'/games/flipmad/privacy-policy'}>Privacy Policy</Link>
            </div>
        </React.Fragment>
    )
}
