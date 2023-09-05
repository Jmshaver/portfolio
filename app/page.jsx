import Hero from '@/components/hero';
import Image from 'next/image';
import Link from 'next/link';

import Button from '@/components/button';
import Footer from '@/components/footer';
import ProjectSection from '@/components/projectSection';
import { getProjectsData } from "@/lib/projects"

export const metadata = {
  title: 'Jay Shaver',
  icons: {
    icon: '/logo.png',
    // shortcut: '/shortcut-icon.png',
    // apple: '/apple-icon.png',
    // other: {
    //   rel: 'apple-touch-icon-precomposed',
    //   url: '/apple-touch-icon-precomposed.png',
    // },
  },
}

export default async function Home() {
  const projectsData = await getProjectsData();
  return (
    <div>
      <Hero />
      <section className='py-10 bg-gray-200 dark:bg-gray-800'>
        <div className='flex flex-col items-center text-center gap-4'>
          <h2 className='text-3xl font-bold'>Some of My Projects</h2>
          <Button text="View All My Projects 👨‍💻" href='/projects' />
        </div>


        {
          projectsData.slice(0, 3).map((projectData, index) => (<ProjectSection data={projectData} left={index % 2} />))
        }
      </section>
      <section className='py-10 bg-gradient-to-t from-slate-300 dark:from-slate-700 to-gray-200 dark:to-gray-800'>

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

