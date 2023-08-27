import Link from 'next/link';


export default function Button({ text, href }) {
    return (
        <Link
            className=" border-sky-600 border-4 p-4 rounded text-base hover:-translate-y-1 drop-shadow-md inline-block"
            href={href}
        >
            {text}
        </Link>
    )
}