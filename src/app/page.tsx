import React from 'react';
import background from '../img/checklist.jpg';
import InputField from './input';

export default function Home() {

    const backgroundStyle = {
        backgroundImage: `url(${background.src})`,
        backgroundSize: 'cover',
        width: '100vw', // Set width to full viewport width
        height: '100vh', // Set height to full viewport height
        display: 'flex',
        alignItems: 'center', // Center vertically
        justifyContent: 'center', // Center horizontally
    };

    return(
        <div style={backgroundStyle}>
            <div className='text-center'>
                <h1 className="text-3xl mb-5 text-[#1E90FF]">Streamline Your Life with CheckFlow</h1>
                <p className='w-[32rem] mb-5 text-[#121111] text-xl text-center'>
                    Effortlessly enhance organization and productivity with CheckFlow. 
                    Whether it's daily tasks or crucial projects, CheckFlow ensures you stay organized wherever you go. Access your checklists anytime.
                </p>
                {/* 
                <h1 className="text-2xl mb-5 text-[#1E90FF]">Stay Organized, Anywhere</h1>
                <p className='w-[32rem] mb-5 text-[#121111] text-xl text-center'>
                    From daily tasks to important projects, CheckFlow keeps you on track no matter where you are. Access your checklists anytime, anywhere, on any device.
                </p>
                */}
                <h1 className="text-2xl mb-5 text-[#1E90FF]">Be the First to Experience CheckFlow</h1>
                <p className='w-[32rem] mb-5 text-[#121111] text-xl text-center'>
                    Join our waitlist today and be among the first to experience the simplicity and effectiveness of CheckFlow. Sign up with your email address below now!
                </p>
                <InputField />
            </div>
        </div>
    )
}



//Enroll in our waitlist today for an early experience of CheckFlow's simplicity and efficiency. Sign up with your email address now!
