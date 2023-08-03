"use client"
import Image from 'next/image';
import funny1 from '../../../../public/funny/funny1.jpg'
import funny2 from '../../../../public/funny/funny2.jpg'
const Ready = () => {
    return (
        <div className='md:flex items-center justify-between my-16 border-2 p-8 shadow-xl'>
            <div className='md:w-1/4'>
                <Image className='h-[200px] w-[200px]' src={funny1} alt='funny1'></Image>
            </div>
            <div className='md:w-1/2 text-center text-5xl font-bold'>Are You Ready?</div>
            <div className='md:w-1/4'>
                <Image className='h-[200px] w-[200px]' src={funny2} alt='funny2'></Image>
            </div>
        </div>
    );
};

export default Ready;