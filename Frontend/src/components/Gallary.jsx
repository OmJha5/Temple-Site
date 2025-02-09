import React from 'react'
import Navbar from './Navbar'
const images = import.meta.glob("../Images/Gallary/*.{jpg,jpeg,png,gif,webp}", { eager: true });
const imageArray = Object.values(images).map((mod) => mod.default);
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from './ui/button';


export default function Gallary() {
    return (
        <div className='!bg-white'>
            <Navbar />

            <div className='starter'>
                <div className='p-16 !bg-[#f1f1f1]'>
                    <h1 className="font-bold text-3xl pl-[10rem]">Photo Gallary - Shree Ved Mata Trust</h1>
                </div>
            </div>

            <div className="max-w-7xl mx-auto main my-10">
                <div className="my-10 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-10 ">
                    {imageArray.map((img, index) => (

                        <div className='cursor-pointer'>
                            <Dialog>
                                <DialogTrigger asChild>
                                    <img key={index} src={img} alt={`img-${index}`} />
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                                    <img key={index} src={img} alt={`img-${index}`} className='p-5' />
                                </DialogContent>
                            </Dialog>
                        </div>

                    ))}
                </div>
            </div>

        </div>
    )
}
