"use client"
import Image from 'next/image';
import card1 from '../../../../public/card/card1.jpg';
import card2 from '../../../../public/card/card2.jpg';
import card3 from '../../../../public/card/card3.jpg';
const Success = () => {
    return (
        <div className='mt-16'>
            <h2 className='text-5xl font-bold text-center'>Success Story</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 justify-between gap-4 mt-12 mb-16'>
                <div className='space-y-2 text-center border-2 shadow-xl p-4'>
                    <Image className='w-[200px] h-[200px] rounded-full mx-auto' src={card1} alt='card1'></Image>
                    <h3 className='text-2xl font-bold'>Maria joko</h3>
                    <h5 className='font-semibold'>Mid-level MERN Stack Developer</h5>
                    <p className=''>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, harum sit! Iusto, quisquam! Saepe, rem.</p>
                </div>
                <div className='space-y-2 text-center border-2 shadow-xl p-4'>
                    <Image className='w-[200px] h-[200px] rounded-full mx-auto' src={card2} alt='card1'></Image>
                    <h3 className='text-2xl font-bold'>Jacky chan</h3>
                    <h5 className='font-semibold'>Senior Software Engineer</h5>
                    <p className=''>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, harum sit! Iusto, quisquam! Saepe, rem.</p>
                </div>
                <div className='space-y-2 text-center border-2 shadow-xl p-4'>
                    <Image className='w-[200px] h-[200px] rounded-full mx-auto' src={card3} alt='card1'></Image>
                    <h3 className='text-2xl font-bold'>Sharapova</h3>
                    <h5 className='font-semibold'>Junior Web Developer</h5>
                    <p className=''>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, harum sit! Iusto, quisquam! Saepe, rem.</p>
                </div>
            </div>
        </div>
    );
};

export default Success;