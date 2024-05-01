'use client';
import React, { FormEvent } from "react"

const inputField = () => {
    async function addEmail(event:FormEvent<HTMLFormElement>) {
        const email = (document.getElementById('emailAdress') as HTMLInputElement)?.value;
        alert('Email: ' + email + ' has been added to the que');
        console.log(event);
    }

    return (
        <div className="text-center text-[#1E90FF]">
            <form onSubmit={addEmail}>
                <input id="emailAdress" className="rounded-lg h-10 w-80 mr-5 text-center opacity-70" type="email" />
                <button 
                    className="bg-[#1E90FF] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg" 
                    type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default inputField;