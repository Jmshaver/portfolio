import { useState, useEffect } from "react";
import Link from "next/link";
import Icon from "./icon";


const links = [
    {
        "name": "Home",
        "href": "/"
    }, {
        "name": "Projects",
        "href": "/projects"
    }, {
        "name": "Resume",
        "href": "/resume"
    },

]


function NavLink({ to, children }) {
    return (
        <Link href={to}>
            {children}
        </Link>
    );
}

function MobileNav({ open, setOpen }) {
    return (
        <div
            className={`absolute pt-20 bg-gradient-to-br from-slate-300 dark:from-slate-700 to-gray-200 dark:to-gray-800  top-0 left-0 h-screen w-screen transform ${open ? "-translate-x-0" : "-translate-x-full"
                } transition-transform duration-300 ease-in-out filter`}
        >

            <div className="flex flex-col mx-4 text-center">
                {links.map((link) => {
                    return (
                        <Link
                            key={link.name}
                            className="text-xl font-medium my-4"
                            href={link.href}
                            onClick={() =>
                                setTimeout(() => {
                                    setOpen(!open);
                                }, 100)
                            }
                        >
                            {link.name}
                        </Link>
                    )
                })}

            </div>
        </div>
    );
}

export default function Navbar() {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDarkThemeInLocalStorage = localStorage.theme === 'dark';
    const [open, setOpen] = useState(false);
    const [dark, setDark] = useState(isDarkThemeInLocalStorage || (!('theme' in localStorage) && prefersDarkMode))
    function updateTheme() {
        setDark(!dark)
    }
    useEffect(() => {
        const isDarkThemeInLocalStorage = localStorage.theme === 'dark';

        if (isDarkThemeInLocalStorage) {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light'
            document.documentElement.setAttribute('data-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark'
            document.documentElement.setAttribute('data-theme', 'dark');
        }

    }, [dark]);
    return (
        <nav className="flex filter px-4 py-4 h-20 items-center fixed w-full backdrop-filter backdrop-blur z-50 bg-gradient-to-b from-gray-300 dark:from-gray-800">
            <MobileNav open={open} setOpen={setOpen} />
            <div className="w-1/2 flex items-center z-50">
                <Link className="text-2xl font-semibold" href="/">
                    Jay Shaver
                </Link>
            </div>
            <div className="w-9/12 flex flex-row-reverse sm:flex-row justify-start sm:justify-end items-center gap-6">
                <div
                    className="z-50 flex relative w-8 h-8 flex-col justify-between items-center sm:hidden cursor-pointer"
                    onClick={() => {
                        setOpen(!open);
                    }}
                >
                    {/* hamburger button */}
                    <span
                        className={`h-1 w-full bg-black dark:bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""
                            }`}
                    />
                    <span
                        className={`h-1 bg-black dark:bg-white rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"
                            }`}
                    />
                    <span
                        className={`h-1 w-full bg-black dark:bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""
                            }`}
                    />
                </div>

                <div className="hidden sm:flex gap-4">
                    {links.map((link) => {
                        return (
                            <NavLink key={link.name} to={link.href}>{link.name}</NavLink>
                        )
                    })}
                </div>
                <button className="text-2xl relative w-10 h-10 overflow-hidden" onClick={updateTheme}>
                    <div className="p-2 bg-yellow-300 rounded absolute top-2/4 dark:-translate-y-32 -translate-y-2/4 text-slate-700 transition-transform	">
                        <Icon className="" name="sun" />
                    </div>
                    <div className="p-2 bg-purple-300 rounded absolute top-2/4 dark:-translate-y-2/4 translate-y-32 text-slate-700 transition-transform	">
                        <Icon className="" name="moon" />
                    </div>
                </button>
            </div>
        </nav>
    );
}