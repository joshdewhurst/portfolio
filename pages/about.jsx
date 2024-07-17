import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { AiFillMail, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { FiMenu, FiX } from 'react-icons/fi'

export default function About() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <section className='bg-gray-100'>
      <Head>
        <title>Josh Dewhurst Portfolio</title>
        <meta name="description" content="Josh Dewhurst's professional portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header className="sticky top-0 bg-white shadow-md py-4">
        <nav className="container mx-auto flex justify-between items-center px-4 md:px-0">
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">Josh Dewhurst</h1>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
          <ul className={`flex-col md:flex-row md:flex ${menuOpen ? 'flex' : 'hidden'} space-y-4 md:space-y-0 space-x-0 md:space-x-6 mt-4 md:mt-0`}>
            <li>
              <a href="#about" className="text-gray-600 hover:text-gray-900">About Me</a>
            </li>
            <li>
              <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
            </li>
            <li>
              <a href="#policy-development" className="text-gray-600 hover:text-gray-900">Policy Development</a>
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
            <div className="max-w-lg mx-auto">
              <p className="text-base md:text-lg py-5 leading-8 text-gray-800">
                I am passionate about creating inclusive and equitable workplaces where everyone can thrive. With a deep commitment to Diversity, Equity, and Inclusion (DEI), I enjoy reworking policies, using people analytics for equity analysis, and driving organizational change. I am enthusiastic about learning and development, compensation and benefits consulting, and fostering strong employee relations.
              </p>
              <p className="text-base md:text-lg py-5 leading-8 text-gray-800">
                My journey began in the legal field, where I gained valuable experience in employment law and compliance. This background has given me a unique perspective on employee relations and risk management. Transitioning to People Operations, I have worked as an HR Business Partner, leveraging my legal expertise to enhance retention, manage employee relations, and promote DEI initiatives. My experience includes designing and implementing comprehensive onboarding processes, developing compensation philosophies, and leading equity analysis projects.
              </p>
            </div>
          </div>
        </section>

        <section id="policy-development" className="py-20 bg-white">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl py-1 text-gray-800">Policy Development</h3>
            <p className="text-lg py-5 leading-8 text-gray-800 max-w-2xl mx-auto">
              Through my professional experience, I have built out policy pipelines for policy development, collaboration, and integration. I have successfully created comprehensive policies, including but not limited to:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
              <div className="p-6 bg-gray-200 rounded shadow-lg transition-transform transform hover:scale-105">
                <h4 className="text-xl text-gray-800 mb-2">Comprehensive Employee Handbook</h4>
                <p className="text-gray-600">Including policies on at-will employment, equal employment opportunity, harassment prevention, and more. This handbook ensures legal compliance and provides clear guidelines for employees.</p>
              </div>
              <div className="p-6 bg-gray-200 rounded shadow-lg transition-transform transform hover:scale-105">
                <h4 className="text-xl text-gray-800 mb-2">Volunteer Handbook</h4>
                <p className="text-gray-600">A comprehensive guide for volunteers, detailing roles, responsibilities, and organizational policies to ensure a consistent and supportive volunteer experience.</p>
              </div>
              <div className="p-6 bg-gray-200 rounded shadow-lg transition-transform transform hover:scale-105">
                <h4 className="text-xl text-gray-800 mb-2">HIPAA Policy</h4>
                <p className="text-gray-600">Ensuring compliance with HIPAA regulations to protect patient privacy and secure sensitive health information.</p>
              </div>
              <div className="p-6 bg-gray-200 rounded shadow-lg transition-transform transform hover:scale-105">
                <h4 className="text-xl text-gray-800 mb-2">Document Retention Policy</h4>
                <p className="text-gray-600">Establishes guidelines for retaining and disposing of company documents, ensuring legal compliance and efficient record management.</p>
              </div>
              <div className="p-6 bg-gray-200 rounded shadow-lg transition-transform transform hover:scale-105">
                <h4 className="text-xl text-gray-800 mb-2">Response to Traumatic Events</h4>
                <p className="text-gray-600">Provides protocols for supporting employees during and after traumatic events, promoting a compassionate and responsive workplace environment.</p>
              </div>
              <div className="p-6 bg-gray-200 rounded shadow-lg transition-transform transform hover:scale-105">
                <h4 className="text-xl text-gray-800 mb-2">Internal Job Transfer and Promotion</h4>
                <p className="text-gray-600">Outlines the process for internal job transfers and promotions, ensuring transparency and equity in career advancement opportunities.</p>
              </div>
              <div className="p-6 bg-gray-200 rounded shadow-lg transition-transform transform hover:scale-105">
                <h4 className="text-xl text-gray-800 mb-2">Referral Bonus</h4>
                <p className="text-gray-600">Defines the criteria and process for employee referral bonuses, incentivizing staff to refer qualified candidates.</p>
              </div>
              <div className="p-6 bg-gray-200 rounded shadow-lg transition-transform transform hover:scale-105">
                <h4 className="text-xl text-gray-800 mb-2">Coworking Space Policies</h4>
                <p className="text-gray-600">Guidelines for using coworking spaces and hotel desking, fostering a flexible and efficient work environment.</p>
              </div>
              <div className="p-6 bg-gray-200 rounded shadow-lg transition-transform transform hover:scale-105">
                <h4 className="text-xl text-gray-800 mb-2">Updated PTO/Sick Leave Policies</h4>
                <p className="text-gray-600">Comprehensive policies for paid time off and sick leave, supporting employee well-being and ensuring legal compliance.</p>
              </div>
              <div className="p-6 bg-gray-200 rounded shadow-lg transition-transform transform hover:scale-105">
                <h4 className="text-xl text-gray-800 mb-2">Employee Accessing Company Services Policy</h4>
                <p className="text-gray-600">Guidelines for employees accessing company services, maintaining confidentiality and integrity in service delivery.</p>
              </div>
              <div className="p-6 bg-gray-200 rounded shadow-lg transition-transform transform hover:scale-105">
                <h4 className="text-xl text-gray-800 mb-2">Undesignated Leave of Absence</h4>
                <p className="text-gray-600">Defines the process for requesting and approving undesignated leave, ensuring consistency and fairness.</p>
              </div>
              <div className="p-6 bg-gray-200 rounded shadow-lg transition-transform transform hover:scale-105">
                <h4 className="text-xl text-gray-800 mb-2">Disaster Preparedness and Response</h4>
                <p className="text-gray-600">Protocols for disaster preparedness and response, ensuring employee safety and business continuity.</p>
              </div>
              <div className="p-6 bg-gray-200 rounded shadow-lg transition-transform transform hover:scale-105">
                <h4 className="text-xl text-gray-800 mb-2">Use of External Recruitment Firms</h4>
                <p className="text-gray-600">Guidelines for engaging external recruitment firms, ensuring effective and compliant recruitment processes.</p>
              </div>
              <div className="p-6 bg-gray-200 rounded shadow-lg transition-transform transform hover:scale-105">
                <h4 className="text-xl text-gray-800 mb-2">AI and Data Security Policy</h4>
                <p className="text-gray-600">Policies for the use of AI and data security, protecting sensitive information and ensuring compliance with data protection regulations.</p>
              </div>
            </div>
            <p className="text-lg py-5 leading-8 text-gray-800 max-w-2xl mx-auto">
              Due to confidentiality, I cannot post most of these policies but am happy to discuss them more in depth. Please reach out to me for a detailed discussion.
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
