import React from 'react';
import { Link } from 'react-router-dom';
import homeCover from '../assets/software-engineer (1).png';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { motion } from "framer-motion";
import { AnimatePresence } from 'framer-motion';



const HomePage = () => {
  return (
    <motion.div 
    initial={{ opacity:0 }} 
    animate={{ opacity:1 }} 
    exit={{ opacity:0 }}
    transition={{ duration:1.75, ease:"easeOut" }}
    className='flex flex-col min-h-screen justify-between'> 
    <Navbar />
    <AnimatePresence initial={false} mode={'wait'}>
    <div className='flex flex-row tab:flex-col justify-around items-center mt-9 tab:mt-0'>
      <img src={homeCover} className='tab:w-96 mobile:w-64' alt='logo' />
      <div className='flex flex-col items-center gap-y-10'>
      <h1 className='text-zinc-900 text-5xl mobile:text-3xl home-title font-thin'>What && Why ?</h1>
      <p className='home-text mobile:text-xs mobile:px-5 mobile:text-center'>Welcome to your most versatile destination for coding.<br></br>
      An Online IDE which supports more than 30+ programming languages.<br></br>
      Make your visual choice by customising IDE with 50+ code editor themes.<br></br>
      To experience the coding journey by clicking the button below. </p>
      <Link to={`/codeEditor`}>
        <button className='outline-1 border shadow-lg shadow-[#def0ff]-500/40 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 rounded py-2 px-5 tab:py-3 tab:px-8'>
        Let's Code
      </button></Link>
      </div>

    </div>
    </AnimatePresence>

    <Footer />
    </motion.div>
  )
}

export default HomePage;