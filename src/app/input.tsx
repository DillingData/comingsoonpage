'use client';
import React, { FormEvent } from "react"

const inputField = () => {
    async function addEmail(event:FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const emailAddress = (document.getElementById('emailAddress') as HTMLInputElement)?.value;

        console.log(emailAddress);

        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()
        var yyyy = today.getFullYear();

        mm++;

        let timeStamp = dd + '/' + mm + '/' + yyyy;

        const response = await fetch('/api/email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },

            body: JSON.stringify({ emailAddress, timeStamp }),
          });
      
          if (response.ok) {
            /*
            fetchSignUps();  // Refresh the list of sign-ups
            setEmailAddress('');  // Clear the input field
            setTimeStamp('');  // Clear the timestamp field
            */
          } else {
            console.error('Failed to submit:', response.statusText);
          }

        alert('Email: ' + emailAddress + ' has been added to the que on date: ' + timeStamp);
        console.log(event);
    }

    return (
        <div className="text-center text-[#1E90FF]">
            <form onSubmit={addEmail} className="flex flex-col md:flex-row md:items-center justify-center w-full max-w-screen-md mx-auto px-4">
                <input
                    id="emailAddress"
                    className="rounded-lg h-10 w-full md:w-80 mb-4 md:mb-0 md:mr-5 text-center opacity-70"
                    type="email"
                    placeholder="Enter your email"
                />
                <button
                    className="bg-[#1E90FF] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full md:w-auto"
                    type="submit"
                >
                    Sign Up
                </button>
            </form>
        </div>

        /*
        <div className="text-center text-[#1E90FF]">
            <form onSubmit={addEmail}>
                <input id="emailAdress" className="rounded-lg h-10 w-80 mr-5 text-center opacity-70" type="email" />
                <button 
                    className="bg-[#1E90FF] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg" 
                    type="submit">Sign Up</button>
            </form>
        </div>
        */
    )
}

export default inputField;