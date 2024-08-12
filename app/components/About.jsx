"use client"
import Image from 'next/image'
import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { FaBriefcase, FaBook } from 'react-icons/fa'

const About = () => {
    const gridData = [
        {
            title: 'Experience',
            icon: <FaBriefcase size={20}></FaBriefcase>,
            content: '5+ Years',
            role: 'Principal Support Engineer'
        },
        {
            title: 'Education',
            icon: <FaBook size={20}></FaBook>,
            content: 'B.A Psychology'
        }
    ]
    const aboutMe = 'I am a passionate problem solver with experience in providing technical support for a wide range of web applications. I am always seeking new challenges and opportunities to expand my knowledge and skills. I am a firm believer in the power of teamwork and collaboration, and I approach every endeavor with enthusiasm and dedication.'
    return (
        <>
            <section className="container mx-auto my-44" id="about">
                <div className="flex flex-col justify-center items-center">
                    <div className="md:mb-10">
                        <p className="md:text-md text-center">Get To Know Me</p>
                        <h1 className="md:text-5xl text-3xl dark:text-teal-400 text-slate-500 text-center">About Me</h1>
                    </div>
                    <div className="md:grid md:grid-cols-2 flex flex-col gap-4 md:mt-20 mt-4 p-4">
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ x: -100, opacity: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <Image src="/VS-main.jpg" width={300} height={300} alt="" className=" rounded-3xl mx-auto responsive-image" />
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1 }}
                            initial={{ opacity: 0, }}
                            transition={{ duration: 0.5, delay: 1 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-2 md:gap-4 gap-2">
                            {gridData.map((item, index) => (
                                <div key={index} className="border-solid dark:border-teal-500 border-slate-500 border-2 flex justify-center items-center flex-col p-4 rounded-xl">
                                    <ul className="flex justify-center items-center text-center flex-col p-8 rounded-md gap-1">
                                        <li>{item.icon}</li>
                                        <li className='dark:text-teal-200 text-slate-500 text-xl font-bold'>{item.title}</li>
                                        <li className='dark:text-slate-300'>{item.content}</li>
                                        <li className='dark:text-slate-300'>{item.role}</li>
                                    </ul>
                                </div>
                            ))}
                            <div className="md:my-8 mt-4 col-span-2">
                                <p className="md:text-lg text-md p-3">{aboutMe}</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About