import React from 'react'
import { Badge } from "@/components/ui/badge"

export default function GallaryHome() {
  return (
    <div>
        <div className="my-16 max-w-7xl mx-auto">
            <div className="flex gap-10">
                
                <div className="flex flex-col gap-5 justify-center">
                    <h1 className='font-bold text-3xl my-3 '>Our Gallery</h1>
                    <p className='w-[50%] text-2xl text-gray-500'>Browse through our extensive gallery of high quality images of Patwa Ved Mata Mandir</p>
                    <Badge className="w-fit bg-red-600 text-sm px-8 py-3 rounded-full cursor-pointer hover:bg-white hover:text-black hover:border-red-500" >Browse</Badge>

                </div>

                <img className='w-[30%] rounded-md' src="https://lh3.googleusercontent.com/pw/AP1GczOT9p-SLnMy1HWLz6E7l8yNezPIeaSMAeqs5QfUY0c-dw1JpBpdHcgSKsQedHOv6GPi1VX0CAKp4AgyuNee4nzNqDZniIU8_YJ8f8_nlt2qHqhT-tzN0MC7xRMjS8aA8qnzoMX9aTUpL5b_FVbCMCht_g=w1231-h923-s-no-gm?authuser=0" alt="" />
            </div>
        </div>
    </div>
  )
}
