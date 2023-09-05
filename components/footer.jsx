import {
    IoLogoGithub, IoLogoLinkedin
} from "react-icons/io5";
import Link from 'next/link';

export default function Footer({ text, href }) {
    return (
        <footer className="flex flex-row gap-4 p-4 items-center justify-center bg-slate-300 dark:bg-slate-700">
            <div>Made by yours truly 🤙</div>
            <div className="flex gap-2">
                <Link href='https://www.linkedin.com/in/jay-shaver-a270a0178/'>
                    <IoLogoLinkedin className="text-3xl" />
                </Link>
                <Link href='https://github.com/Jmshaver'>
                    <IoLogoGithub className="text-3xl" />
                </Link>
            </div>
        </footer>
    )
}