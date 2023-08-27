import Image from 'next/image';
import Link from 'next/link';
import {
    IoLogoGithub, IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoOpenOutline
} from "react-icons/io5";

export default function ProjectSection({ left, }) {

    return (<section className="container mx-auto px-2 py-10 relative">

        <div className={`lg:w-10/12 relative ${left ? 'ml-auto' : 'mr-auto'}`}>
            <div className="mockup-window bg-base-300 w-full lg:rounded-b-lg rounded-b-none">
                <Image
                    className=""
                    width={1920}
                    height={1080}
                    src="/claricity.consulting.png"
                    alt="Me, Jay Shaver"
                />
            </div>
            <div className={`mockup-phone hidden lg:block scale-[.4] lg:scale-50 absolute -bottom-4 ${left ? "origin-bottom-right right-4" : "origin-bottom-left left-4"}`}>
                <div className="camera"></div>
                <div className="display">
                    <Image
                        className="artboard artboard-demo phone-5 "
                        width={390}
                        height={844}
                        src="/claricity.consulting_(iPhone 12 Pro).png"
                        alt="Me, Jay Shaver"
                    />
                </div>
            </div>

        </div>
        <div className={`lg:absolute top-1/2 lg:-translate-y-1/2 bg-slate-600 drop-shadow p-4 lg:rounded-t-lg rounded-b-lg w-full lg:w-5/12 ${left ? 'left-0' : 'right-0'}`} >
            <div className='flex text-3xl bold justify-between items-center mb-2'>
                <h2 className=''>Claricity Consulting</h2>
                <div className='flex gap-2'>
                    <Link className='' href={'/'}>
                        <IoLogoGithub />
                    </Link>
                    <Link className='' href={'/'}>
                        <IoOpenOutline />
                    </Link>
                </div>


            </div>
            <div className='flex flex-wrap text-lg  mb-2'>
                <IoLogoHtml5 />
                <IoLogoHtml5 />
                <IoLogoHtml5 />
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse obcaecati quia placeat porro, fuga distinctio. Perspiciatis voluptatum veritatis animi quisquam!
            </p>
        </div>
    </section>)
}