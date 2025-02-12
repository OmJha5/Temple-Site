import React from 'react'
import bg from "../../Images/aboutHomeBG.jpg";
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';

export default function AboutHome() {
    let navigate = useNavigate();
  return (
    <div className='!bg-white sm:p-10 max-sm:p-5'>
        <h1 className='font-bold md:text-4xl max-md:text-2xl md:my-10 max-md:my-4 text-center'>About Us</h1>
        <div className="flex gap-10 max-lg:flex-col md:my-10 max-md:my-4 max-w-7xl mx-auto sm:p-6">
            <img src={bg} className='max-lg:text-center lg:w-[30%] rounded-md' alt="" />
            <div className="flex flex-col gap-5 flex-1">
                <h1 className='font-semibold md:text-2xl max-md:text-xl'>VED MATA GAYATRI BAIJANTRI SHAKTI PEETH TRUST</h1>
                <p className='leading-relaxed  text-gray-600 '>Ved Mata Gayatri Baijantri Shakti Pith Trust and the Head office of the said Trust shall Permanently be situated at Sudhakar Ashram Patwa, P.O. Shripathar Via : Punsia, P.S. Dhoraiya, Dist. Banka, Bihar India.</p>
                <p className='leading-relaxed text-gray-600 '>This temple was founded by Shri Chandra Shekhar Mishra who was a freedom figher. His father was late Sudhakar Mishra and mother late Panchamee Devi.His primary schooling was done at Chandadih, and later at Munger Town High School. While at Munger he was always thinking about freedom struggle and wanted active participation.</p>

                <Button variant="outline" className="w-fit" onClick={() => navigate("/about")}>Read More</Button>
            </div>
        </div>
    </div>
  )
}
