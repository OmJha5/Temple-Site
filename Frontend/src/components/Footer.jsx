import { Facebook, Home, Instagram, Mail, Phone, Twitter } from 'lucide-react'
import React from 'react'

export default function Footer() {
    return (
        <div className='!bg-white pt-10'>
            <div className='flex flex-col gap-10'>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(370px,1fr))] gap-16">
                    <div className="text-xl font-bold text-gray-900 justify-self-center">
                        Temple
                    </div>

                    <div className="flex flex-col gap-3 justify-self-center">
                        <h1 className="font-bold text-lg">Quick Links</h1>
                        <span>Home</span>
                        <span>About Us</span>
                        <span>Donate</span>
                        <span>Our Donators</span>
                        <span>Contact Us</span>
                    </div>

                    <div className="flex flex-col gap-3 justify-self-center">
                        <h1 className="font-bold text-lg">Help</h1>
                        <span>Privacy & Policy</span>
                        <span>Refund And Cancellation</span>
                        <span>FAQ</span>
                    </div>

                    <div className="flex flex-col gap-4 justify-self-center">
                        <div className="flex gap-2">
                            <Home />
                            <span>Village - Patwa(Bihar)</span>
                        </div>

                        <div className="flex gap-2">
                            <Phone />
                            <div>
                                <a href="https://wa.me/919431125651" target="_blank">9431125651</a>,
                                <a href="https://wa.me/919696578766" target="_blank">9696578766</a>
                            </div>
                        </div>

                        <div className="flex gap-2">
                            <Mail />
                            <a href="mailto:rkm007@gmail.com">rkm007@gmail.com</a>
                        </div>
                    </div>


                </div>

                <div className="flex flex-col gap-3 relative items-center justify-center p-5">
                    <p className='text-lg'>Copyright <b>2025 </b> &copy;  Ved Mata Gayatri Baijantri Shakti Pith Trust. All right Reserved</p>
                    <div className="flex gap-5">
                        <a href="" ><Facebook className='w-6 h-6 hover:text-orange-500' /></a> <a href=""><Instagram className='w-6 h-6 hover:text-orange-500' /></a> <a href=""><Twitter className='w-6 h-6 hover:text-orange-500' /></a>
                    </div>
                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-orange-500 opacity-20 pointer-events-none"></div>

                </div>
            </div>
        </div>
    )
}
