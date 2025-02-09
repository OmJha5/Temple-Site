import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function RefundAndCancellation() {
    return (
        <div>
            <Navbar />
            <div className="my-10 max-w-7xl mx-auto rounded-md shadow-2xl !bg-white p-10 flex flex-col gap-10">
                <h1 className='font-normal text-4xl my-5'>Refund / Cancellation Policy</h1>
                <p className='text-gray-500 leading-loose'>
                    1. Devotees are authorized to deposit their donation and payment of pooja booking only through Debit Card/Credit Card or Net Banking facility.
                </p>

                <p className="text-gray-500 leading-loose">
                    2. Once the donation or ticket booking fee is paid, it can’t be refunded through any mode.
                </p>
            </div>
            <Footer />
        </div>
    )
}
