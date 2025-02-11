import React from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import bg1 from "../../Images/bg-1.jpeg"
import bg2 from "../../Images/bg-2.jpg"
import Event from "./Event"

export default function ImageCarousel() {
    let imageLinks = [
        bg1,
        bg2,
    ];

    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
    );

    return (
        <div className="w-screen relative">
            <div className="absolute z-10 top-0 w-screen">
                <Event/>
            </div>
            <div className='w-screen'>
            <Carousel
                plugins={[plugin.current]} // Using the stored autoplay instance
                className="w-screen h-[calc(100vh-16px)] relative border-none"
                onMouseEnter={plugin.current.stop} // Stops autoplay on hover
                onMouseLeave={plugin.current.reset} // Resumes autoplay on leave
            >
                <CarouselContent className="w-screen h-[calc(100vh-16px)] border-none">
                    {imageLinks.map((elm, index) => (
                        <CarouselItem key={index} className="relative w-screen h-[calc(100vh-16px)] border-none" >
                            <Card className="w-screen h-[calc(100vh-16px)] border-none">
                                <CardContent className="p-0 w-full h-[calc(100vh-16px)] border-none">
                                    <img
                                        src={elm}
                                        className="w-screen h-[calc(100vh-16px)] object-cover border-none"
                                    />
                                </CardContent>
                            </Card>

                            {/* Previous and Next buttons inside image */}
                            <CarouselPrevious className="absolute left-5 transform  bg-black/50 text-white rounded-full p-3 hover:bg-black/70 transition" />
                            <CarouselNext className="absolute xl:right-2 max-xl:right-[-1rem] bg-black/50 text-white rounded-full p-3 hover:bg-black/70 transition" />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
            </div>
        </div>
    );
}
