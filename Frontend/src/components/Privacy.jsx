import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Privacy() {
  return (
    <div>
        <Navbar/>
            <div className="my-10 max-w-7xl mx-auto rounded-md shadow-2xl !bg-white p-10">
                <h1 className='font-normal text-4xl my-5'>Disclaimer</h1>
                <p className='text-gray-500 leading-loose'>
                    Please note that the users of this Website are responsible for checking the accuracy, completeness, price list, and/or suitability of any information provided. The information posted on the our Website is current as of the posting date of the information. Ved Mata Temple Trust makes no representations, guarantees, or warranties as to the accuracy, completeness, currency, or suitability of the information provided on this site. Ved Mata Temple Trust specifically disclaims any liability for any claims or damages that may result from providing the website or the information it contains, including any websites maintained by third parties and linked to the Ved Mata Trust Website. The responsibility for content rests with the organizations that are providing the information. The inclusion of links from this site does not imply endorsement by Ved Mata Trust and makes no effort to independently verify and does not exert editorial control over information on pages outside the Web site. Ved Mata Temple Trust does not endorse unless specifically stated, any of the products, vendors, consultants, or documentation referenced in this Website.
                </p>

                <h1 className="font-normal text-4xl my-5">Website Policy and Privacy Policy Statement</h1>
                <p className="text-gray-500 leading-loose">
                Thank you for visiting the Ved Mata Trust website and reviewing our Privacy Policy Statement. The website provides convenient access to various information and services. In order to access some of the information and services provided by this website, you’ll be requested to provide specific identifying information. This Privacy Policy Statement is provided to inform you about the information that could be collected online as a result of visiting the website. Your rights to privacy are of utmost importance to Ved Mata Trust Temple in building trust and confidence when taking donation through the Internet.
                </p>
            </div>
        <Footer/>
    </div>
  )
}
