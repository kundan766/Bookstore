import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
function About() {
  return (
    <>
    <div>
      <Navbar/>
        
        <p className='font-bold text-xl text-blue-500  justify-centers mt-10 min-h-screen p-40'>This is online Book store where you can read books .
        There are 3 books which are free and rest is paid .
        just a nominal price .This website is made by-Kundan choudhry 
        Tect stack- React ,Twailwind css for frontend and Express ,Node and Mongodb for the database </p>
    
      <Footer/>
    </div>
    
    </>
    
  )
}

export default About
