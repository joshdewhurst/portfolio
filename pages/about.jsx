import Head from 'next/head'
import josh from '../josh.jpg'
import Image from 'next/image'
import { AiFillMail, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

export default function About() {
  return (
    <section className='bg-gray-100'>
      <Head>
        <title>Josh Dewhurst Portfolio</title>
        <meta name="description" content="Josh Dewhurst's professional portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="sticky top-0 bg-white shadow-md py-4">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Josh Dewhurst</h1>
          <ul className="flex space-x-6">
            <li>
              <a href="/about" className="text-gray-600 hover:text-gray-900">About Me</a>
            </li>
            <li>
              <a href="/" className="text-gray-600 hover:text-gray-900">Projects</a>
            </li>
            <li>
              <a href="/contact" className="text-gray-600 hover:text-gray-900">Contact Me</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="bg-gray-100 px-10 font-sans">
        <section id="about" className="py-20">
          <div className="container mx-auto text-center">
            <div className="flex flex-col items-center">
              <div className="relative rounded-full w-40 h-40 overflow-hidden mb-10">
                <Image
                  src={josh}
                  layout="fill"
                  objectFit="cover"
                  alt="Josh Dewhurst"
                />
              </div>
              <h2 className="text-5xl py-2 text-gray-900 font-medium">About Me</h2>
              <p className="text-lg py-5 leading-8 text-gray-800 max-w-2xl">
                Hi! My name is Josh Dewhurst, and I am a People Operations specialist with a strong background in HR management, compliance, and data analysis. I am located in San Francisco, CA, and I am passionate about promoting diversity and inclusion within organizations.
              </p>
              <p className="text-lg py-5 leading-8 text-gray-800 max-w-2xl">
                In addition to HR, I have experience in project and event management. I have overseen projects ranging from $5,000 to $800,000 and have built internal leadership initiatives to optimize team and company performance.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-white">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl py-1 text-gray-800">Contact Me</h3>
            <p className="text-lg py-5 leading-8 text-gray-800 max-w-2xl mx-auto">
              Please contact me if you wish to connect professionally or personally. I am open to opportunities and connections within the tech field and beyond.
            </p>
            <div className="flex justify-center gap-16 py-3 text-gray-700">
              <a href="mailto:joshuardewhurst@gmail.com">
                <AiFillMail className="text-5xl hover:text-gray-900" />
              </a>
              <a href="https://github.com/joshdewhurst">
                <AiFillGithub className="text-5xl hover:text-gray-900" />
              </a>
              <a href="https://www.linkedin.com/in/josh-dewhurst/">
                <AiFillLinkedin className="text-5xl hover:text-gray-900" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </section>
  )
}
