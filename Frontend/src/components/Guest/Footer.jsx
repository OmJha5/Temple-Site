import { Facebook, Home, Instagram, Mail, Phone, Twitter } from 'lucide-react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

export default function Footer() {
    let navigate = useNavigate();

    let FaqClickHandler = () => {
        toast.success("We are working on it , will soon roll out this")
    }

    return (
        <div className='!bg-white pt-10'>
            <div className='flex flex-col gap-10'>
                <div className="grid md:grid-cols-[repeat(auto-fit,minmax(370px,1fr))] max-md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] md:gap-16 max-md:gap-10">
                    <div className="text-xl font-bold text-gray-900 justify-self-center">
                        <span className="cursor-pointer"><span onClick={() => navigate("/")} className="text-red-500">Ved Mata</span> Temple</span>
                    </div>

                    <div className="flex flex-col gap-3 justify-self-center max-md:items-center">
                        <h1 className="font-bold text-xl">Quick Links</h1>
                        <Link to="/" ><span>Home</span></Link>
                        <Link to="/about"><span>About Us</span></Link>
                        <span>Donate</span>
                        <span>Our Donators</span>
                        <Link to="/contact"><span>Contact Us</span></Link>
                    </div>

                    <div className="flex flex-col gap-3 justify-self-center max-md:items-center">
                        <h1 className="font-bold text-xl">Help</h1>
                        <Link to="/privacy"><span>Privacy & Policy</span></Link>
                        <Link to="/refundandcancellation"><span>Refund And Cancellation</span></Link>
                        <Link to="#" onClick={FaqClickHandler}><span>FAQ</span></Link>
                    </div>

                    <div className="flex flex-col gap-4 justify-self-center max-md:items-center">
                        <div className="flex gap-2">
                            <Home />
                            <span>Village - Patwa(Bihar)</span>
                        </div>

                        <div className="flex gap-2">
                            <Phone />
                            <div>
                                <a href="https://wa.me/919431125651" target="_blank">9431125651</a> &nbsp; 
                                <a href="https://wa.me/919696578766" target="_blank">9696578766</a>
                            </div>
                        </div>

                        <div className="flex gap-2">
                            <Mail />
                            <a href="mailto:rkm007@gmail.com">rkm007@gmail.com</a>
                        </div>
                    </div>


                </div>

                <div className="flex flex-col sm:gap-3 max-sm:gap-1 relative items-center justify-center p-5">
                    <p className='sm:text-lg max-sm:text-sm text-center my-3 leading-loose'>Copyright <b>2025 </b> &copy;  Ved Mata Gayatri Baijantri Shakti Pith Trust. All right Reserved</p>
                    <div className="flex sm:gap-5 max-sm:gap-4">
                        <a href="https://www.facebook.com/profile.php?id=61572622636540" target='_blank'><Facebook className='sm:w-6 sm:h-6 max-sm:w-5 max-sm:h-5 hover:text-orange-500' /></a> <a href="" target='_blank'><Instagram className='sm:w-6 sm:h-6 max-sm:w-5 max-sm:h-5 hover:text-orange-500' /></a> <a href="https://x.com/OmkumarJha84512" target='_blank'><Twitter className='sm:w-6 sm:h-6 max-sm:w-5 max-sm:h-5 hover:text-orange-500' /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
