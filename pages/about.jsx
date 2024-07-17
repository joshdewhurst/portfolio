import Head from 'next/head'
import Image from 'next/image'
import { AiFillMail, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

export default function About() {
  return (
    <section className='bg-gray-100'>
      <Head>
        <title>Josh Dewhurst Portfolio</title>
        <meta name="description" content="Josh Dewhurst's professional portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header className="sticky top-0 bg-white shadow-md py-4">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">Josh Dewhurst</h1>
          <ul className="flex space-x-4 md:space-x-6">
            <li>
              <a href="/about" className="text-gray-600 hover:text-gray-900">About Me</a>
            </li>
            <li>
              <a href="/" className="text-gray-600 hover:text-gray-900">Projects</a>
            </li>
            <li>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact Me</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="bg-gray-100 px-4 md:px-10 font-sans">
        <section id="about" className="py-20">
          <div className="container mx-auto text-center">
            <div className="flex justify-center my-6">
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-gray-300">
                <Image
                  src="https://media.licdn.com/dms/image/D5603AQGAN1FCt8PASA/profile-displayphoto-shrink_400_400/0/1676144735772?e=1726704000&v=beta&t=qhBZ7wjikh-0mW0JFc-zkWBs4UWCBUMEDW9LVNg9S0I"
                  layout="fill"
                  objectFit="cover"
                  alt="Josh Dewhurst"
                />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl py-2 text-gray-900 font-medium">About Me</h2>
            <p className="text-base md:text-lg py-5 leading-8 text-gray-800 max-w-xl mx-auto">
              I am passionate about creating inclusive and equitable workplaces where everyone can thrive. With a deep commitment to Diversity, Equity, and Inclusion (DEI), I enjoy reworking policies, using people analytics for equity analysis, and driving organizational change. I am enthusiastic about learning and development, compensation and benefits consulting, and fostering strong employee relations.
            </p>
            <p className="text-base md:text-lg py-5 leading-8 text-gray-800 max-w-xl mx-auto">
              My journey began in the legal field, where I gained valuable experience in employment law and compliance. This background has given me a unique perspective on employee relations and risk management. Transitioning to People Operations, I have worked as an HR Business Partner, leveraging my legal expertise to enhance retention, manage employee relations, and promote DEI initiatives. My experience includes designing and implementing comprehensive onboarding processes, developing compensation philosophies, and leading equity analysis projects.
            </p>
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
                <AiFillMail className="text-5xl hover:text-gray-900 transition-transform transform hover:scale-110" />
              </a>
              <a href="https://github.com/joshdewhurst">
                <AiFillGithub className="text-5xl hover:text-gray-900 transition-transform transform hover:scale-110" />
              </a>
              <a href="https://www.linkedin.com/in/josh-dewhurst/">
                <AiFillLinkedin className="text-5xl hover:text-gray-900 transition-transform transform hover:scale-110" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </section>
  )
}
