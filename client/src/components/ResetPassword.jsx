import { useState } from "react"
import { useNavigate } from 'react-router-dom';
export const ResetPassword = () => {
    const [credentials,setCredentials] = useState({
        password: "",
        confirmPassword: ""
    });
    const navigate = useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        navigate("/login")
    }
  return (
    <div>
      <input onChange={e => setCredentials(e.target.value)} value={credentials.password} type="password" id="password" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="New Password" required/>
      <input onChange={e => setCredentials(e.target.value)} value={credentials.confirmPassword} type="password" id="c_password" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Confirm Password" required/>
      <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
    </div>
  )
}