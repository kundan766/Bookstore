import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast'

function Logout() {
  const[authUser,setAuthUser]=useAuth()
  const handleLogout=()=>{
    try{
       setAuthUser({
        ...authUser,
        user:null
       })
       localStorage.removeItem("Users")
       window.location.reload();
       toast.success("Logout successfully")
}catch(err){
  toast.error("Error:"+ err.message)
}
  }
  return (
    <div>
      <button className='px-3  bg-red-500 py-2 text-white rounded-md cursor-pointer'
      onClick={handleLogout}
      
      >Logout</button>
    </div>
  )
}

export default Logout
