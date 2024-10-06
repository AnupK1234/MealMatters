import { useState } from "react";

export const ForgotPassword = () => {
  const [email,setEmail]=  useState("")
  const handleLogin=async(e)=>{
    try {
      e.preventDefault();
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL || `https://mealmatters-backend.onrender.com`}/auth/forgot-password`, {
        headers: {
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({email})
      })
      const data =res.json()
      console.log(data);
      if(res.status==201){
        alert("Email sent")
      }
  }
  catch(error){
    console.log(error);
  }
}
  return (
    <div className="flex">
      <input onChange={e => setEmail(e.target.value)} value={email} type="email" id="email" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your email address" required/>
      <button onClick={handleLogin} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
    </div>
  )
}