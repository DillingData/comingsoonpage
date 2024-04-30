import React from 'react';
import background from '../img/checklist2.jpg';
import InputField from './input';

export default function Home() {
    
    const backgroundStyle = {
        backgroundImage: `url(${background.src})`,
        backgroundSize: 'cover',
        width: '100vw', // Set width to full viewport width
        height: '100vh', // Set height to full viewport height
    };


    return(
        <div style={backgroundStyle}>
            <div>
                <h1 className="text-center text-4xl h-screen">Hello World</h1>
            </div>
            <div>
                <InputField />
            </div>
        </div>
    )
}