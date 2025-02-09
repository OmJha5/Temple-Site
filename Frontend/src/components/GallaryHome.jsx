import React from 'react'
import { Badge } from "@/components/ui/badge"
import { useNavigate } from 'react-router-dom';

export default function GallaryHome() {
  let navigate = useNavigate();
  return (
    <div>
        <div className="md:my-16 max-md:my-5 max-w-7xl mx-auto max-sm:p-10 sm:p-5">
            <div className="flex gap-10 max-md:flex-col max-md:items-center">
                
                <div className="flex flex-col max-md:order-2 gap-5 justify-center">
                    <h1 className='font-bold md:text-3xl max-md:text-2xl md:my-3 '>Our Gallery</h1>
                    <p className='lg:w-[50%] md:text-2xl max-md:text-xl text-gray-500'>Browse through our extensive gallery of high quality images of Patwa Ved Mata Mandir</p>
                    <Badge onClick={() => navigate("/gallary")} className="w-fit bg-red-600 text-sm md:px-8 max-md:px-4 md:py-3 max-md:py-2 rounded-full cursor-pointer hover:bg-white hover:text-black hover:border-red-500" >Browse</Badge>

                </div>

                <img className='lg:w-[30%] sm:w-[60%]  max-md:order-1 rounded-md' src="https://lh3.googleusercontent.com/pw/AP1GczOT9p-SLnMy1HWLz6E7l8yNezPIeaSMAeqs5QfUY0c-dw1JpBpdHcgSKsQedHOv6GPi1VX0CAKp4AgyuNee4nzNqDZniIU8_YJ8f8_nlt2qHqhT-tzN0MC7xRMjS8aA8qnzoMX9aTUpL5b_FVbCMCht_g=w1231-h923-s-no-gm?authuser=0" alt="" />
            </div>
        </div>
    </div>
  )
}
