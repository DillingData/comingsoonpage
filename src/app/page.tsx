import { Bakbak_One } from 'next/font/google';
import background from '../img/checklist2.jpg';

export default function Home() {
    console.log(background);

    background.width = 1920;
    background.height = 1080;

    return(
        <div style={{ backgroundImage: `url(${background.src})` }}>
            <h1 className="text-center text-4xl h-screen">Hello World</h1>
        </div>
    )
}