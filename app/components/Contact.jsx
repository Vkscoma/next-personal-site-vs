import { FaEnvelope, FaLinkedin } from "react-icons/fa"
import Link from 'next/link'

const Contact = () => {
    const contactData = [
        {
            icon: <FaEnvelope size={20}></FaEnvelope>,
            link: 'mailto:vkscoma@gmail.com',
            content: 'vkscoma@gmail.com'
        },
        {
            icon: <FaLinkedin size={20}></FaLinkedin>,
            link: 'https://www.linkedin.com/in/vkscoma/',
            content: 'LinkedIn/vkscoma'
        }
    ]
    return (
        <>
            <section className="flex flex-col justify-center items-center container mx-auto md:my-44 mt-40 p-4" id="contact">
                <div className="flex flex-col justify-center items-center md:mb-8 mb-4">
                    <p className="text-md">Get In Touch</p>
                    <h1 className="md:text-5xl text-3xl dark:text-teal-400 text-slate-500 text-bold">Contact Me</h1>
                </div>
                <div className="flex justify-center border-solid dark:border-teal-300 border-slate-400 border-2 rounded-3xl mx-auto my-8">
                    <div className="flex md:flex-nowrap flex-wrap items-center justify-center md:gap-2 md:m-4">
                        {contactData.map((item, index) => (
                            <div key={index} className="flex md:flex-nowrap flex-wrap justify-center items-center gap-4 p-4">
                                <div>{item.icon}</div>
                                <Link href={item.link} className="text-md dark:hover:text-teal-400 hover:text-slate-400 hover:underline underline-offset-8 transition-all ease-in-out duration-300">{item.content}</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact