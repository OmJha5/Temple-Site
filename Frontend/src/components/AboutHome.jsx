import React from 'react'
import bg from "../Images/aboutHomeBG.png";
import { Button } from './ui/button';

export default function AboutHome() {
  return (
    <div className='!bg-white p-10'>
        <h1 className='font-bold text-4xl my-10 text-center'>About Us</h1>
        <div className="flex gap-10 my-10 max-w-7xl mx-auto p-6">
            <img src={bg} alt="" />
            <div className="flex flex-col gap-5">
                <h1 className='font-semibold text-2xl'>VED MATA GAYATRI BAIJANTRI SHAKTI PEETH TRUST</h1>
                <p className='leading-relaxed'>Ved Mata Gayatri Baijantri Shakti Pith Trust and the Head office of the said Trust shall Permanently be situated at Sudhakar Ashram Patwa, P.O. Shripathar Via : Punsia, P.S. Dhoraiya, Dist. Banka, Bihar India.</p>
                <p className='leading-relaxed'>This temple was founded by Shri Chandra Shekhar Mishra who was a freedom figher. His father was late Sudhakar Mishra and mother late Panchamee Devi.His primary schooling was done at Chandadih, and later at Munger Town High School. While at Munger he was always thinking about freedom struggle and wanted active participation.</p>

                <Button variant="outline" className="w-fit bg-orange-500 text-white hover:border-orange-500 ">Read More</Button>
            </div>
        </div>
    </div>
  )
}
