import Image from 'next/image';
import Footer from '@/components/footer';

export const metadata = {
    title: 'Resume - Jay Shaver',
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

export default function Resume() {
    const resume = [
        {
            "company": "Caterpillar",
            "dates": "May 2023 – Present",
            "role": "Data Scientist Intern, Front End Intern",
            "location": "Chicago, IL",
            "image": "/logos/cat.jpeg",
            "bullets": [
                "Devised and executed a proof of concept (POC) leveraging Python, Pandas, AWS, and Snowflake along with clustering techniques (K-Means and Hierarchical Clustering) to produce accurate part recommendations to customers.",
                "Operated in an Agile environment and created progress presentations communicating to stakeholders.",
                "Built Angular components and email templates for CAT’s Vision Link app, enhancing user experience & accessibility.",
                "Constructed a front-end in React and integrated an LLM with an API for a hackathon translation app."
            ]
        },
        {
            "company": "Dewberry - Michigan Data Science Team",
            "dates": "Jan 2023 – Present",
            "role": "Project Lead",
            "location": "Ann Arbor, MI",
            "image": "/logos/dewberry.jpeg",
            "bullets": [
                "Managed 10 people in constructing a model to predict fire spread to increase safety among their products.",
                "Tested Autoencoders and U-Nets in PyTorch to increase predictive accuracy of the model.",
                "Deployed our model into Dewberry’s ecosystem so the company can leverage the model and design safer products."
            ]
        },
        {
            "company": "Michigan Data Science Team",
            "dates": "Aug 2021 – Present",
            "role": "Project Lead, Web Designer, Mentor",
            "location": "Ann Arbor, MI",
            "image": "/logos/mdst.png",
            "bullets": [
                "Led 3 projects of 15 members in building NLP sentiment analysis, wildfire spread prediction, and poker bot, enhancing team members' expertise in data analysis, ML, PyTorch, and Python while providing mentorship to underclassmen.",
                "Redesigned and implemented the club's website using Figma, React, Next.js, Tailwind CSS, and GitHub Actions for a professional and modern look and easy-to-edit interface, resulting in a 147% increase in traffic.",
                "Collaborated in 4 other projects such as building a stock prediction model with 52% accuracy in TensorFlow as well as visualizing and analyzing 100 congressional stock portfolios for unfair gains with Tableau, Python, and Pandas."
            ]
        },
        {
            "company": "Imbe Solutions (Web Design Company)",
            "dates": "Nov 2018 – Present",
            "role": "Co-founder, Lead Developer",
            "location": "St. Paul, MN",
            "image": "/logos/imbe-solutions.png",
            "bullets": [
                "Designed, Developed and Maintained websites for clients such as Claricity Consulting using Adobe XD, Bootstrap and Netlify to increase website engagement and revenue.",
                "Implemented version control and continuous deployment thought Git and GitHub actions to streamline the development process and cut time by 30%.",
                "Tracked invoices and managed company financials using Google Sheets to ensure profitability."
            ]
        },
        {
            "company": "Infinite Degrees",
            "dates": "Oct 2022 – Jan 2023",
            "role": "Full Stack Intern",
            "location": "Ann Arbor, MI",
            "image": "/logos/infinite-degrees.jpeg",
            "bullets": [
                "Executed the development of 3 application features, utilizing Ionic, React, and Tailwind CSS off Figma mockups.",
                "Interacted with an Azure database, hydrating relevant content to the application and elevating user experience.",
                "Employed Beautiful Soup for web scraping, extracting ski and snowboard competition results to establish rankings."
            ]
        }
    ];


    return (
        <div>
            <div className='bg-gradient-to-b from-slate-300 dark:from-slate-700 to-gray-200 dark:to-gray-800'>
                <div className="container mx-auto px-2 py-32">
                    <h1 className='text-5xl font-extrabold text-center'>
                        My Resume 📄
                    </h1>
                </div>
            </div>
            <section className='bg-gradient-to-t from-slate-300 dark:from-slate-700 to-gray-200 dark:to-gray-800'>
                <div className="container mx-auto py-4 px-2">
                    <div className='py-2'>
                        <h2 className="text-3xl font-bold">
                            EDUCATION 👨‍🎓
                        </h2>
                        <div className="divider my-0"></div>
                        <Experience data={{
                            "company": "University of Michigan",
                            "dates": "Aug 2020 - May 2024",
                            "role": "Data Science Major Bachelor of Science in Engineering, Business Minor - 3.912/4.00 GPA",
                            "location": "Ann Arbor, MI",
                            "image": "/logos/michigan.png",

                        }} ><p>
                                <span className="font-bold">Coursework:</span> Algorithms & Data Structures, Computer Organization, Conversational AI, Database Management Systems, Linear Regression, Data Mining, Basic Probability, Agent Based Modeling, Machine Learning, Mathematics in Finance, Web Systems
                            </p></Experience>
                    </div>
                    <div className='py-2'>
                        <h2 className="text-3xl font-bold">
                            EXPERIENCE 👷‍♂️
                        </h2>
                        <div className="divider my-0"></div>
                        {resume.map((experience) => <Experience key={experience.company} data={experience} />)}
                    </div>
                </div>
            </section>
            <Footer />

        </div>
    );
}

function Experience({ data, children }) {

    return (
        <div className='p-4 border border-slate-700 dark:border-white my-6 rounded-lg' >

            <div className="resume-grid mb-3">
                <Image className="w-[56px] h-[56px] mr-2 object-cover rounded row-span-2" width={56} height={56} src={data?.image} alt={data.company + " logo"} />
                <h3 className='font-bold'>{data.company}</h3>
                <span>{data.dates}</span>
                <span className=''>{data.role}</span>
                <span className='italic md:justify-self-end'>{data.location}</span>
            </div>
            {data?.bullets && <ul className='pl-4 list-disc'>
                {data.bullets.map((bullet, index) => {
                    return <li className='mb-1' key={index} >{bullet}</li>
                })}
            </ul>}
            {children}
        </div>
    )
}