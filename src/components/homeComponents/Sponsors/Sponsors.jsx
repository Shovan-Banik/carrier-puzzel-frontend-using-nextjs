'use client'

import Image from "next/image"
import Marquee from "react-fast-marquee";

import lg1 from '../../../../public/lg/lg1.jpg';
import lg3 from '../../../../public/lg/lg3.jpg';
import lg2 from '../../../../public/lg/lg2.png';
import lg4 from '../../../../public/lg/lg4.png';
import lg5 from '../../../../public/lg/lg5.png';
import lg6 from '../../../../public/lg/lg6.png';
const Sponsors = () => {
    return (
        <>
            <h2 className="text-5xl text-center font-bold my-16">Our Sponsors</h2>
            <Marquee>
                <div className="flex gap-12 mb-12">
                    <Image className="w-[150px] h-[80px]" src={lg1} alt="lg1"></Image>
                    <Image className="w-[150px] h-[80px]" src={lg2} alt="lg2"></Image>
                    <Image className="w-[150px] h-[80px]" src={lg3} alt="lg3"></Image>
                    <Image className="w-[150px] h-[80px]" src={lg4} alt="lg4"></Image>
                    <Image className="w-[150px] h-[80px]" src={lg5} alt="lg5"></Image>
                    <Image className="w-[150px] h-[80px]" src={lg6} alt="lg6"></Image>
                </div>
            </Marquee>
        </>
    );
};

export default Sponsors;