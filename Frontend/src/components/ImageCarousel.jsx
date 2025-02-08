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

export default function ImageCarousel() {
    let imageLinks = [
        "https://lh3.googleusercontent.com/pw/AP1GczNfu5yKxVP84wnZXI7rGucn-hVPB0tM1KjiSs7NJxNEaMEPNaL58pif8GTno7Qcyv_nylxLfkuZCu0Dhq0uAROFYIhJ3tks0OgO53xXvIGUxxn-bCin7cVZijn2KFS7XsHMEBV-AazSb6HfFCGIgTNZkA=w1230-h923-s-no-gm?authuser=0",
        "https://lh3.googleusercontent.com/pw/AP1GczMH307AlUmI6UkbUVzwRs6bhhesVx1vfSVp18dhqmh8KMh5upYB6_jzodmLlbf51aV_m94hc4ASH8_gh5VZkmMDiimuJUXtb6bpOUKzE3fYSHlgfMPibqpQdgJ3vQh-KXG0Ikh49-5tIsS7L39y6BiWxA=w1231-h923-s-no-gm?authuser=0",
    ];

    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
    );

    return (
        <div className="w-screen">
            <Carousel
                plugins={[plugin.current]} // Using the stored autoplay instance
                className="w-full h-[calc(100vh-16px)] relative border-none"
                onMouseEnter={plugin.current.stop} // Stops autoplay on hover
                onMouseLeave={plugin.current.reset} // Resumes autoplay on leave
            >
                <CarouselContent className="w-full h-[calc(100vh-16px)] border-none">
                    {imageLinks.map((elm, index) => (
                        <CarouselItem key={index} className="relative w-full h-[calc(100vh-16px)] border-none" >
                            <Card className="w-full h-[calc(100vh-16px)] border-none">
                                <CardContent className="p-0 w-full h-[calc(100vh-16px)] border-none">
                                    <img
                                        src={elm}
                                        className="w-full h-[calc(100vh-16px)] object-cover border-none"
                                    />
                                </CardContent>
                            </Card>

                            {/* Previous and Next buttons inside image */}
                            <CarouselPrevious className="absolute left-5 transform  bg-black/50 text-white rounded-full p-3 hover:bg-black/70 transition" />
                            <CarouselNext className="absolute right-2 bg-black/50 text-white rounded-full p-3 hover:bg-black/70 transition" />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
}
