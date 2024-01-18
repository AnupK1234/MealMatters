import { useState } from "react"
import { useNavigate } from 'react-router-dom';
export const ResetPassword = () => {
    const [password,setPassword] = useState("")
    const [confirmPassword,setConfirmPassword] = useState("")
    const navigate = useNavigate();
    
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const queryParams = new URLSearchParams(window.location.search);
        const token = queryParams.get('token');
        console.log(token);
        const res = await fetch(`http://localhost:5000/auth/reset-password?token=${encodeURIComponent(token)}`,{
          headers: {  
            'Content-Type': 'application/json',
          },
          method: "POST",
          body: JSON.stringify({password: password,c_password: confirmPassword})
        })
        console.log("Response: ",res);
        console.log("Password: ",password);
        console.log("Confirm Password: ",confirmPassword);
        console.log("Status: ",res.status);
        if(res.status==201){
          alert("Password changed successfully!!")
        }
        
        navigate("/login")
    }
  return (
    <div>
      <input onChange={e => setPassword(e.target.value)} value={password} type="password" id="password" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="New Password" required/>
      <input onChange={e => setConfirmPassword(e.target.value)} value={confirmPassword} type="password" id="c_password" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Confirm Password" required/>
      <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
    </div>
  )
}