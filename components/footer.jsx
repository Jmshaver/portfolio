import {
    IoLogoGithub, IoLogoLinkedin
} from "react-icons/io5";
import Link from 'next/link';

export default function Footer({ text, href }) {
    return (
        <footer className="flex flex-row gap-4 p-4 items-center justify-center">
            <div>Made by yours truly 🤙</div>
            <div className="flex gap-2">
                <Link href='insert'>
                    <IoLogoLinkedin className="text-3xl" />
                </Link>
                <Link href='insert'>
                    <IoLogoGithub className="text-3xl" />
                </Link>
            </div>
        </footer>
    )
}