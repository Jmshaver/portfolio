
import Footer from '@/components/footer';
import ProjectSection from '@/components/projectSection';
import { getProjectsData } from "@/lib/projects";


export const metadata = {
    title: 'Projects - Jay Shaver',
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

export default async function Projects() {
    const projectsData = await getProjectsData();
    return (
        <div>

            <section className='pt-24 pb-10 bg-gradient-to-t from-slate-300 dark:from-slate-700 via-gray-200 dark:via-gray-800 to-slate-300 dark:to-slate-700'>

                <h1 className='text-3xl font-bold text-center'>
                    All My Projects 👨‍💻
                </h1>
                {
                    projectsData.map((projectData, index) => (<ProjectSection data={projectData} left={index % 2} />))
                }
            </section>

            <Footer />

        </div>
    );
}
