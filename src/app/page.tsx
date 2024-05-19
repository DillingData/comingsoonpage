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
        <div style={backgroundStyle} className="px-4">
            <div className="text-center mx-auto max-w-screen-lg">
                <h1 className="text-2xl md:text-3xl mb-5 text-[#1E90FF]">Streamline Your Life with CheckFlow</h1>
                <p className="w-full md:w-[32rem] mb-5 text-[#121111] text-lg md:text-xl text-center mx-auto">
                    Effortlessly enhance organization and productivity with CheckFlow. 
                    Whether it's daily tasks or crucial projects, CheckFlow ensures you stay organized wherever you go. Access your checklists anytime.
                </p>
                <h1 className="text-xl md:text-2xl mb-5 text-[#1E90FF]">Be the First to Experience CheckFlow</h1>
                <p className="w-full md:w-[32rem] mb-5 text-[#121111] text-lg md:text-xl text-center mx-auto">
                    Join our waitlist today and be among the first to experience the simplicity and effectiveness of CheckFlow. Sign up with your email address below now!
                </p>
                <InputField />
            </div>
        </div>
    )
}