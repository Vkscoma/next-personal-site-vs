const Footer = () => {
    const footerItems = [
        { name: "Home", href: "#" },
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" }
    ]
    const getCurrentYear = () => { return new Date().getFullYear() }
    const currentYear = getCurrentYear()
    return (
        <>
            <footer>
                <div className="container mx-auto my-10">
                    <nav>
                        <ul className="flex md:flex-row flex-col text-center justify-center items-center md:space-x-4 gap-4">
                            {footerItems.map((item, index) => (
                                <li key={index} className="dark:hover:text-teal-400 hover:text-slate-400 hover:underline underline-offset-8 md:text-2xl text-xl duration-300 transition-all ease-in-out">
                                    <a href={item.href}>{item.name}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="flex justify-center items-center mt-8">
                        <p className="text-md">© {currentYear} Vincent Scoma</p>
                    </div>
                </div>
            </footer >
        </>
    )
}

export default Footer