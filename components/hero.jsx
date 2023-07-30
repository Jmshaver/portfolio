import Image from 'next/image';
import Link from 'next/link';
export default function Hero() {
  return (
    <div className="bg-gradient-to-br from-slate-700 to-gray-800">
      <div className="container mx-auto px-2 py-32 flex items-center content-between flex-col-reverse sm:flex-row">
        <div className="sm:w-2/3 sm:pr-4">
          <h1 className="text-5xl font-extrabold self-align-center">
            👋 I'm{' '}
            <span className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Jay
            </span>
          </h1>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Nostrum doloribus, laboriosam voluptatibus velit animi
            eos, in tempore quaerat quas quidem cum vero nesciunt nam
            hic.
          </p>
          <div className="flex justify-start gap-5 pt-2 flex-wrap">
            <Link
              className="bg-sky-600 border-sky-600 border-4 p-4 rounded text-base hover:-translate-y-1 drop-shadow-md"
              href="/projects"
            >
              My Projects 👨‍💻
            </Link>
            <Link
              className="border-sky-600 border-4 p-4 rounded hover:-translate-y-1 drop-shadow-md"
              href="/resume"
            >
              My Resume 📄
            </Link>
          </div>
        </div>

        <Image
          className="rounded h-96 w-auto object-cover"
          width={500}
          height={500}
          src="/headshot.jpg"
          alt="Me, Jay Shaver"
        />
      </div>
    </div>
  );
}
