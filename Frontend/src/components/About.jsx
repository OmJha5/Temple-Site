import React from 'react'
import Navbar from './Navbar'
import img from "../Images/About.jpg"

export default function About() {
  return (
    <div>
        <Navbar/>

        <div className="my-10 max-w-7xl mx-auto">
            <h1 className="font-bold text-2xl my-3">Founder - Shri Chandra Shekhar Mishra</h1>
            <p className='text-sm font-normal'>Freedom Fighter | March 21 , 1921 - June 13 , 2010</p>

            <div className="content my-10">
                <div className="leftContent">
                    <img src={img} alt="IMG" className='p-2 border border-gray-200 rounded-md float-left mr-4' />
                </div>
                <div className="rightContent">
                    <p className='leading-loose'>His father was late Sudhakar Mishra and mother late Panchamee Devi.His primary schooling was done at Chandadih, and later at Munger Town High School. While at Munger he was always thinking about freedom struggle and wanted active participation.</p>
                    <br />
                    <p className='leading-loose'>Born on 21/03/1921 at village- Patwa,Ps Dhoraiya Dist Bhagalpur( now Banka) in Bihar. He attended week long conference called and presided by Neta jee Subhash Chandra Bose in 1939 at Ramgarh near Ranchi. It was first conference after Neta jee left AICC resigning from its Presidentship.He was very much impressed from the policy of Neta jee and approached to be with him. He went with-Neta jee to Kolkata, after few days Neta jee gave him a letter and advised to meet Sri Baboo (Sri Krishna Singh)(First CM Bihar) at Munger,who helped him a lot and advised to form students hard core group who could participate in freedom struggle.</p>
                    <br />
                    <p className='leading-loose'>He formed students troop and actively participated in the freedom struggle. He was consulting Sri Bhagwat Jha Azad time to time at Bhagalpur,who was in top leadership from there.</p>
                    <br />
                    <p className='leading-loose'>In early 1940 ,on the direction of Sri Bhagwat Jha Azad he went along with his five associates to Giridih where they felt organization was a bit weak. While holding meeting with Giridih strugglers,they faced Police encounter. There was fierce firing from both sides, he was unfortunately shot at his right thigh and could not flee, resulting in his arrest at the spot. He was moved to Ranchi seeing his critical condition.Later he was handed over to Munger Police.After trail he was sentenced to 18 months jail and kept at Bhagalpur central jail, Sri Bhagwat Jha Azad and many other hard core freedom fighters were also there. One day his close associate, dare devil sri Gobind Singh of village Hemjapur(Suryagarha),Munger was hanged at CJ. This was early 1942,all were shocked, it pained him most because they were in the same group .Violence started in the jail and many along with him was transferred to Hazaribagh jail. After six month at hzaribagh he was freed,came to Munger. He led his group including students and set Purabsarai Rly station on fire. Moved to Jamalpur, ransacked many Govt. buildings.</p>
                    <br />
                    <p className='leading-loose'>1942 the year of violence ended, many of his associates were still in jail many were hanged. Along with continuing freedom struggle there was responsibility of supporting those families. His main activity centre was Munger,Jamui Gangta and their hilly terrene . However struggle continued till freedom. He was happy ,Nation in celebration but division of India and Hindu Muslim riot pained a lot.</p>
                    <br />
                    <p className='leading-loose'>He settled at home and did many welfare works. He was Mukhia of his GramPanchayat Kharondha(Dhoraiya Block) for ten years. He was first Pramukh of Dhoraiya Block when Pachayati Raj was established in 1965.</p>
                    <br />
                    <p className='leading-loose'>He was President of Cong (I) Dhoraiya and also office bearer of Bhagalpur Cong. Committee.He left active politics after the death of his wife Sri mati Baijantri Debi in1997. He then served GAYATRI Pariwar under Sri Sri Ram Sharma and Mata jee. He ,taking help from other devotees, built a large Gayatri Parisar donating his 24 kattas of land on Dhoraiya Punsia Rd. A 121 ft. tall beautiful Gayatri temple has been built amid the premises. Many families perform marriage and other rituals here in this premises.</p>
                    <br />
                    <p className='leading-loose'>He left for heavenly abode on 13th June 2010.</p>

                    <div className="flex gap-5 my-5">
                        <iframe width="380" height="230" src="https://www.youtube.com/embed/Xa8Z82qwk1E" frameborder="0" allowfullscreen=""></iframe>
                        <iframe width="380" height="230" src="https://www.youtube.com/embed/ILA5CMA4oAk" frameborder="0" allowfullscreen=""></iframe>
                    </div>

                    <p>Ref. - From his biography and as heard from him.</p>

                </div>
            </div>
        </div>

    </div>
  )
}
