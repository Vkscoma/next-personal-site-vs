"use client"
import Image from 'next/image'
import React, { createContext } from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <>
            <section className="flex md:flex-row flex-col-reverse md:justify-around md:text-left text-center justify-center items-center py-4 my-20" id="hero">
                <div>
                    <motion.h1
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-2xl dark:text-teal-400 text-slate-500 md:mt-0 mt-4">Hello there!
                    </motion.h1>
                    {/* <h1 className="text-xl mt-2">Hello there!</h1> */}
                    <motion.h1
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="md:text-5xl text-3xl dark:text-teal-400 text-slate-500">My name is <span className='dark:text-neutral-100 text-neutral-950'>Vincent</span>
                    </motion.h1>
                    {/* <h1 className="md:text-5xl text-3xl dark:text-teal-400 text-slate-500">My name is Vincent</h1> */}
                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="mt-2 custom--animation--text">I am a <span className="dark:text-teal-400 text-slate-500"></span>
                    </motion.p>
                    {/* <p className="mt-2 custom--animation--text">I am a <span className="dark:text-teal-400 text-slate-500"></span></p> */}
                </div>
                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: .5 }}
                    className="custom-round cursor-pointer responsive-image">
                    <Image src="/profile_photo.jpeg" width={350} height={350} alt="profile picture" className="custom-round cursor-pointer responsive-image" />
                </motion.div>
                {/* <div>
                    <Image src="/profile_photo.jpeg" width={350} height={350} alt="profile picture" className="custom-round cursor-pointer responsive-image" />
                </div> */}
            </section>
        </>
    )
}

export default Hero