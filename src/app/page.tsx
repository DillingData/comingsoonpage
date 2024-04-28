import background from '../img/checklist.jpg'

export default function Home() {
    return(
        <div style={{ backgroundImage: "url(${background})"}}>
            <h1 className="text-center text-4xl h-screen">Hello World</h1>
            <p className="text-center h-screen">Testing</p>
        </div>
    )
}