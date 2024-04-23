import React from 'react';
import { Link } from 'react-router-dom';
import Login from "../components/Login";
import { useForm } from "react-hook-form"

function Signup() {
  const {
    register,
    handleSubmit,
   
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
    <>
    <div className='flex h-screen items-center justify-center'>
    <div  className="w-[600px]">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to ="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    
    <h3 className="font-bold text-lg text-bold">Signup</h3>
    <div className='mt-4 space-y-2'>
        <span>Name</span> <br></br>
        <input type="name"
        placeholder="Enter your Name"
        className='w-80 px-3 py-1 border rounded-md outline-mone'
        {...register("name", { required: true })}
        />
        <br></br>
        {errors.name && < span className="text-sm text-red-600">This field is required</span>}
      </div>
      <div className='mt-4 space-y-2'>
        <span>Email</span> <br></br>
        <input type="email"
        placeholder="Enter your Email"
        className='w-80 px-3 py-1 border rounded-md outline-mone'
        {...register("email", { required: true })}
        />
        <br></br>
        {errors.email && < span className="text-sm text-red-600">This field is required</span>}
      </div>
      {/* // password */}
      <div className='mt-4 space-y-2'>
        <span>Password</span> <br></br>
        <input type="password"
        placeholder="Enter your password"
        className='w-80 px-3 py-1 border rounded-md outline-mone'
        {...register("password", { required: true })}
        />
        <br></br>
        {errors.password && < span className="text-sm text-red-600">This field is required</span>}
      </div >
      {/* button */}
     <div className='flex flex-row mt-4 justify-around'>
     <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Signup</button>
      <p className='text-md'>Have Account ? <button className='underline text-blue-500 cursor-pointer'
       onClick={()=>document.getElementById("my_modal_3").showModal()}>
        Login
        </button>{""}
        <Login/>
        </p>
     </div>
     </form>
  </div>
</div>
    </div>
    </>
  )
}

export default Signup
