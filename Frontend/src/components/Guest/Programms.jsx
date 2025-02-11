import React from 'react'
import health from "../../Images/health.jpg"
import marriage from "../../Images/marriage.jpeg"
import pravachan from "../../Images/pravachan.jpg"

export default function Programms() {
  return (
    <div>
        <div className="max-w-7xl mx-auto my-20">
            <h1 className='font-bold md:text-4xl max-md:text-2xl md:my-10 max-md:my-4 text-center'>Our Programes</h1>

            <div className="grid sm:grid-cols-[repeat(auto-fit,minmax(370px,1fr))] max-sm-grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-16 p-4">
                <div className='flex flex-col shadow-2xl'>
                    <div className="imageProgram">
                        <img src={health} alt="Health" width={"250px"} className='rounded-md w-full' />
                    </div>
                    <div className="aboutProgram">
                        <h1 className='text-center font-bold text-xl text-orange-600 my-3'>Health Checkups</h1>
                        <div className='h-[150px] overflow-y-scroll scrollbar-hide'>
                        <p className="text-gray-600 text-center leading-relaxed px-3">
                            We care deeply about your well-being, both spiritually and physically. We believe that a healthy body and mind go hand in hand, and that's why we're excited to offer comprehensive health checkup services right here at our temple.We understand that maintaining good health is essential for leading a fulfilling life and being able to fully participate in our spiritual community. Our health checkup services are designed to provide you with valuable insights into your health and help you take proactive steps towards a healthier lifestyle.
                        </p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col shadow-lg'>
                    <div className="imageProgram">
                        <img src={pravachan} alt="Pravachan" width={"250px"} className='rounded-md w-full' />
                    </div>
                    <div className="aboutProgram">
                        <h1 className='text-center font-bold text-xl text-orange-600 my-3'>Pravachan</h1>
                        <div className='h-[150px] overflow-y-auto scrollbar-hide'>
                        <p className="text-gray-600 text-center leading-relaxed px-3">
                            Hello and welcome to Ved mata temple, where we come together to learn and grow on our spiritual journey. Here, you can discover simple and meaningful teachings that help us connect with our inner selves and the divine.Our temple is like a big family, and you are always welcome to be part of it. We do good things together, learn together, and help each other grow.In addition to talks, we also do other fun stuff like meditation, celebrations, and helping others. It's like being part of a club where we all care for each other.We invite you to be a part of our temple's family. It doesn't matter if you know a lot or a little. Here, we all learn and grow together on our journey to happiness and peace.
                        </p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col shadow-lg'>
                    <div className="imageProgram">
                        <img src={marriage} alt="Health" width={"250px"} className='rounded-md w-full' />
                    </div>
                    <div className="aboutProgram">
                        <h1 className='text-center font-bold text-xl text-orange-600 my-3'>Marriage Functions</h1>
                        <div className='h-[150px] overflow-y-auto scrollbar-hide'>
                        <p className="text-gray-600 text-center leading-relaxed px-3">
                            A wedding is more than just a ceremony; it's a sacred union of two souls. At ved mata temple, we believe in the power of love and the importance of starting your journey together in a holy and blessed place.If you are interested in hosting your wedding at ved mata temple or would like to learn more about our ceremonies and traditions, please don't hesitate to reach out. We are here to make your wedding dreams come true.A wedding at ved mata temple is the start of a beautiful and spiritual journey. We look forward to celebrating your love and witnessing the sacred bond you share.
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
