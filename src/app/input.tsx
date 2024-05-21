'use client';
import { time } from "console";
import React, { FormEvent } from "react"

const inputField = () => {
    async function addEmail(event:FormEvent<HTMLFormElement>) {
        //event.preventDefault();
        const emailAddress = (document.getElementById('emailAddress') as HTMLInputElement)?.value;

        console.log(emailAddress);

        let today = new Date();
        let hh = today.getHours();
        let min = today.getMinutes();
        let sec = today.getSeconds();
        let dd = today.getDate();
        let mm = today.getMonth()
        let yyyy = today.getFullYear();

        mm++;

        let timeStamp = dd + '/' + mm + '/' + yyyy + '-' + hh + ':' + min + ':' + sec;

        const response = await fetch('/api/email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },

            body: JSON.stringify({ emailAddress, timeStamp }),
          });
      
          if (response.ok) {
            console.log('email added to the database: ' + emailAddress + ' at time: ' + timeStamp)
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
    )
}

export default inputField;