import Hero from '@/components/hero';
import Image from 'next/image';
import Link from 'next/link';
import {
  IoLogoGithub, IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoOpenOutline
} from "react-icons/io5";
import Button from '@/components/button';
import Footer from '@/components/footer';
import ProjectSection from '@/components/projectSection';
export default function Home() {
  return (
    <div>
      <Hero />
      <section className='py-10'>
        <div className='flex flex-col items-center text-center gap-4'>
          <h2 className='text-3xl font-bold'>Some of My Projects</h2>
          <Button text="View All My Projects 👨‍💻" href='/resume' />
        </div>


        <ProjectSection left={true} />
        <ProjectSection left={false} />
      </section>
      <section className='py-10 '>

        <div className='container mx-auto px-2 flex items-center content-between flex-col md:flex-row gap-4'>
          <Image
            className="rounded h-[400px] w-auto object-cover md:mr-auto "
            width={500}
            height={500}
            src="/Snowboarding.jpg"
            alt="Me, Jay Shaver"
          />
          <div className='md:w-2/3 lg:w-1/2'>
            <h2 className='text-3xl font-bold mb-2'>A little more about me</h2>
            <p className='mb-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum deserunt odit voluptatibus vero recusandae libero a magni nulla id, fugiat deleniti tenetur eveniet ea? Debitis veniam et recusandae eum! Temporibus harum, alias ratione dignissimos nam vero deserunt recusandae amet quidem?</p>
            <p className='mb-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum deserunt odit voluptatibus vero recusandae libero a magni nulla id, fugiat deleniti tenetur eveniet ea? Debitis veniam et recusandae eum! Temporibus harum, alias ratione dignissimos nam vero deserunt recusandae amet quidem?</p>
            <Button text="View My Resume 📄" href='/resume' />
          </div>
        </div>
      </section>
      <Footer />

    </div>
  );
}

