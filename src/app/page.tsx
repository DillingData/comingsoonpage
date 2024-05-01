import React from 'react';
import background from '../img/checklist2.jpg';
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
                <h1 className="text-4xl text-[#1E90FF]">Coming Soon</h1>
                <p className='w-[32rem] text-[#FFFFFF] text-center'>
                    Soon we are releasing the all new Checklist App. This will help you keep control of 
                    repetetive tasks. You will not be able to live without it!
                </p>
                {/*
                <h1 className="text-4xl text-[#008080]">Coming Soon</h1>
                <h1 className="text-4xl text-[#2F4F4F]">Coming Soon</h1>
                <h1 className="text-4xl text-[#FFFFFF]">Coming Soon</h1>
                <h1 className="text-4xl text-[#333333]">Coming Soon</h1>
                <h1 className="text-4xl text-[#ADD8E6]">Coming Soon</h1>
                <h1 className="text-4xl text-[#483C32]">Coming Soon</h1>
                */}
                <InputField />
            </div>
        </div>
    )
}