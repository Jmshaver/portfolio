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
            "dates": "05 2023 - 08 2023",
            "role": "Digital Analytics Intern",
            "location": "Chicago, IL",
            "image": "/logos/cat.jpeg",
            "bullets": [
                "Analyzed the seasonality of best-selling parts by quarter using Python and Pandas to gain insight into customer behavior and create better recommendation on parts.cat.com",
                "Developed POC about adding a subscribe and save business model to the parts.cat.com using Python and Snowflake to increase customer purchasing frequency"
            ]
        },
        {
            "company": "Dewberry - Michigan Data Science Team",
            "dates": "01 2023 – Present",
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
            "dates": "08 2021 – Present",
            "role": "Project Lead, Mentor, Team Member",
            "location": "Ann Arbor, MI",
            "image": "/logos/mdst.png",
            "bullets": [
                "Led a group of 15 people to create a Natural Language Processing (NLP) model to determine the sentiment behind different tweets over 10 weeks to improve team member’s AI knowledge.",
                "Learned about different techniques of visualizing and analyzing data sets through interactive weekly learning sessions.",
                "Used machine learning (ML) research to develop stock prediction algorithm with 52% accuracy using TensorFlow and a Bi-directional neural network.",
                "Visualized 100 congressional stock portfolios using Tableau and Pandas to determine whether gains performed statistically above the market average.",
                "Mentored 2 underclassmen and provided insight on how to succeed in the fast-paced stressful college landscape."
            ]
        },
        {
            "company": "Imbe Solutions (Web Design Company)",
            "dates": "10 2018 – Present",
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
            "dates": "09 2022 – 01 2023",
            "role": "Full Stack Intern",
            "location": "Ann Arbor, MI",
            "image": "/logos/infinite-degrees.jpeg",
            "bullets": [
                "Implemented 3 application features using Ionic, React and Tailwind CSS from Figma mockup.",
                "Interacted with Azure database to populate relevant content to the app and enhance user experience.",
                "Leveraged Beautiful Soup to web scrape ski and snowboard competition results to rank competitors."
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
                            "dates": "08 2020 - 05 2024",
                            "role": "Data Science Major with Business Minor, Bachelor of Science in Engineering - 3.912/4.00 GPA",
                            "location": "Ann Arbor, MI",
                            "image": "/logos/michigan.png",

                        }} ><p>
                                <span className="font-bold">Coursework:</span> Algorithms & Data Structures, Computer Organization, Linear Regression, Data Mining, Basic Probability, Agent Based Modeling, Machine Learning, Mathematics in Finance, Database Management, Web Systems, Conversational AI
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

            <div className="resume-grid mb-2">
                <Image className="w-[56px] h-[56px] mr-2 object-cover rounded row-span-2" width={56} height={56} src={data?.image} alt={data.company + " logo"} />
                <h3 className='font-bold'>{data.company}</h3>
                <span>{data.dates}</span>
                <span className=''>{data.role}</span>
                <span className='italic'>{data.location}</span>
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