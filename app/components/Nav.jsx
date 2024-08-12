"use client"
import DarkModeButton from "./DarkModeButton"
import Hamburger from "hamburger-react"
import React, { useState, useEffect, useContext } from "react"
import { motion } from "framer-motion"

const Nav = () => {
    const [isMobile, setIsMobile] = useState(false)
    const [isNavOpen, setIsNavOpen] = useState(false)

    const navItems = [
        { name: "Home", href: "#" },
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" }
    ]

    // const navStyle = {
    //     display: 'block',
    // }
    // const mobileStyle = {
    //     display: 'none',
    // }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setIsMobile(true)
            } else {
                setIsMobile(false)
            }
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    // if (isMobile) {
    //     navStyle.display = 'none'
    //     mobileStyle.display = 'block'
    // } else {
    //     mobileStyle.display = 'none'
    //     navStyle.display = 'block'
    // }

    const handleNav = () => {
        setIsNavOpen(!isNavOpen)
        const mobileNav = document.querySelector('.mobile--nav--overlay')
        if (!isNavOpen) {
            mobileNav.classList.add('mobile--nav--open')
            document.body.style.overflow = 'hidden'
        } else {
            mobileNav.classList.remove('mobile--nav--open')
            document.body.style.overflow = 'auto'
        }
    }

    const handleClick = () => {
        setIsNavOpen(false)
        const mobileNav = document.querySelector('.mobile--nav--overlay')
        const hamburger = document.querySelector('.hamburger-react')
        mobileNav.classList.remove('mobile--nav--open')
        hamburger.click()
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto">
            <div className="flex justify-around items-center py-4 my-4">
                <div>
                    <span className="text-3xl dark:text-teal-300 text-slate-500 mobile--title">Vincent Scoma</span>
                </div>
                <nav id='desktop--nav' >
                    <ul className="flex space-x-4">
                        {navItems.map((item, index) => (
                            <li key={index} className="dark:hover:text-teal-400 hover:text-slate-400 hover:underline transition-all duration-200 ease-in-out underline-offset-8 text-2xl">
                                <a href={item.href}>{item.name}</a>
                            </li>
                        ))}
                    </ul>
                    <DarkModeButton />
                </nav>
                <nav id='mobile--nav' onClick={handleNav}>
                    <div className="z-50 fixed top-3 right-4 bg-slate-600 text-neutral-100 rounded-full">
                        <Hamburger size={20} classList='hamburger-react'></Hamburger>
                    </div>
                    <div className="mobile--nav--overlay w-full">
                        <ul className=" list-none flex h-full flex-col justify-evenly items-center">
                            {navItems.map((item, index) => (
                                <li key={index} className="hover:text-teal-400 text-5xl duration-300 transition-all ease-in-out" onClick={handleClick}>
                                    <a href={item.href}>{item.name}</a>
                                </li>
                            ))}
                        </ul>
                        <DarkModeButton />
                    </div>
                </nav>
            </div>
        </motion.div>
    )
}

export default Nav