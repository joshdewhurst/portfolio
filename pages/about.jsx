import Head from 'next/head'
import josh from '../josh.jpg'
import Image from 'next/image'
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub, AiOutlineLink } from 'react-icons/ai'

export default function About() {
    return (
        <section className='bg-slate-100'>
            <Head>
                <title>Josh Dewhurst Portfolio</title>
                <meta name="description" content="Josh Dewhurst's professional portfolio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="bg-slate-100 px-10">
                <nav className="py-10 mb-5 flex justify-end">
                    <ul className="flex items-center">
                        <li>
                            <a href="/about" className="text-white bg-cyan-300 px-4 ml-8 py-2 rounded hover:bg-cyan-500">About Me</a>
                        </li>
                        <li>
                            <a href="#" className="text-white bg-cyan-300 px-4 ml-8 py-2 rounded hover:bg-cyan-500">Projects</a>
                        </li>
                        <li>
                            <a href="#" className="text-white bg-cyan-300 px-4 ml-8 py-2 rounded hover:bg-cyan-500">Contact Me</a>
                        </li>
                    </ul>
                </nav>

                <div className="text-center p-10 flex ">
                    <div className='flex flex-col p-10 w-100 basis-2/3'>
                        <h2 className="text-7xl py-2 text-gray-900 font-medium content-start col-span-2">About Me</h2>
                        <p className="p-4 text-1xl">
                            Hi! My name is Josh Dewhurst, and I am a People Operations specialist with a strong background in HR management, compliance, and data analysis. I am located in San Francisco, CA, and I am passionate about promoting diversity and inclusion within organizations.
                        </p>
                        <p className="p-4 text-1xl">
                            In addition to HR, I have experience in project and event management. I have overseen projects ranging from $5,000 to $800,000 and have built internal leadership initiatives to optimize team and company performance.
                        </p>
                    </div>
                    <div className="relative mx-auto rounded-full h-80 overflow-hidden mb-10 mt-10 content-start w-80 col-span-1 p-10 ">
                        <Image 
                            src={josh}
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </div>
            </div>

            <div className='justify-items-center'>
                <div className='text-center shadow-lg shadow-black bg-slate-200 p-10 rounded-xl my-10 dark:bg-white flex-1 hover:bg-slate-300 w-1/2 content-center basis-1/2'>
                    <div>
                        <h3 className="text-lg font-medium pt-2 pb-2">
                            Contact Me
                        </h3>
                    </div>
                    <div className='flex'>
                        <h3 className='m-10 p4'>
                            Email:
                        </h3>
                        <p className='m-10 p-4'>
                            joshuardewhurst@gmail.com
                        </p>
                    </div>
                </div>
            </div>

            <div className="text-5xl mb-10 flex justify-center gap-16 py-3 text-gray-700">
                <a href="https://github.com/joshdewhurst">
                    <AiFillGithub />
                </a>
                <a href="https://www.linkedin.com/in/josh-dewhurst/">
                    <AiFillLinkedin />
                </a>
            </div>
        </section>
    )
}
