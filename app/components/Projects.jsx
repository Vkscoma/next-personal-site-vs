"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext } from 'react'
import { motion } from 'framer-motion'

const Projects = () => {
    const projectData = [
        {
            image: "/pkmn.png",
            title: "Pokemon Wiki Page",
            web_page: "https://vkscoma.github.io/PokemonWiki/",
            github_link: "https://github.com/Vkscoma/PokemonWiki",
            alt: "Pokemon Wiki Page"
        },
        {
            image: "/hg.png",
            title: "Hotel Garden Band Website",
            web_page: "https://hotelgardenband.com/",
            github_link: "https://github.com/Vkscoma/HotelGardenReact",
            alt: "Band Website"
        },
        {
            image: "/cst.png",
            title: "Comma Seperator Tool",
            web_page: "https://vkscoma.github.io/comma-sperator-tool/",
            github_link: "https://github.com/Vkscoma/comma-sperator-tool",
            alt: "Comma Seperator Tool"
        }
    ]
    return (
        <>
            <div className="text-center md:mt-40 md:mb-20" id="projects">
                <p className="text-md">A few of my</p>
                <h1 className="md:text-5xl text-3xl dark:text-teal-400 text-slate-500">Projects</h1>
            </div>

            <div className="grid md:grid-cols-3 grid-cols-1 md:gap-8 gap-4 p-6">
                {projectData.map((item, index) => (
                    <motion.div
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 100 }}
                        transition={{ duration: 0.5, delay: index * 0.4 }}
                        viewport={{ once: true }}
                        key={index} className="border-solid dark:border-teal-400 border-slate-500 border-2 flex justify-center items-center flex-col rounded-3xl pt-16 pb-8 px-8 flex-1 hover:scale-y-100">
                        <div className='flex flex-wrap flex-row gap-10 justify-around pb-8'>
                            <Image src={item.image} alt={item.alt} width={300} height={300} className="rounded-md" />
                        </div>
                        <h1 className="text-xl dark:text-teal-400 text-slate-600">{item.title}</h1>
                        <div className="flex justify-center items-center gap-4 mt-10">
                            <Link href={item.web_page} className="text-center dark:text-white  border-solid dark:border-teal-400 border-slate-500 border-2 p-4 w-32 rounded-3xl text-sm dark:hover:bg-teal-400 hover:bg-slate-700 hover:text-white transition-all ease-in-out duration-300">View</Link>
                            <Link href={item.github_link} className="text-center dark:text-white  border-solid dark:border-teal-400 border-slate-500 border-2 p-4 w-32 rounded-3xl text-sm dark:hover:bg-teal-400 hover:bg-slate-700 hover:text-white transition-all ease-in-out duration-300">GitHub</Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </>
    )
}

export default Projects