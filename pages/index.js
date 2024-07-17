import Head from 'next/head'
import { AiFillMail, AiFillLinkedin, AiFillGithub, AiOutlineLink } from 'react-icons/ai'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Josh Dewhurst Portfolio</title>
        <meta name="description" content="Josh Dewhurst's professional portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-100 px-10 font-sans">
        <header className="sticky top-0 bg-white shadow-md py-4">
          <nav className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">Josh Dewhurst</h1>
            <ul className="flex space-x-6">
              <li>
                <a href="#about" className="text-gray-600 hover:text-gray-900">About Me</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact Me</a>
              </li>
            </ul>
          </nav>
        </header>

        <section id="about" className="py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-5xl py-2 text-gray-900 font-medium">Josh Dewhurst</h2>
            <h3 className="text-2xl py-2 text-gray-600">People Operations and HR Specialist</h3>
            <p className="text-lg py-5 leading-8 text-gray-800 max-w-2xl mx-auto">
              I am passionate about creating inclusive and equitable workplaces where everyone can thrive. With a deep commitment to Diversity, Equity, and Inclusion (DEI), I enjoy reworking policies, using people analytics for equity analysis, and driving organizational change. I am enthusiastic about learning and development, compensation and benefits consulting, and fostering strong employee relations.
            </p>
            <p className="text-lg py-5 leading-8 text-gray-800 max-w-2xl mx-auto">
              My journey began in the legal field, where I gained valuable experience in employment law and compliance. This background has given me a unique perspective on employee relations and risk management. Transitioning to People Operations, I have worked as an HR Business Partner, leveraging my legal expertise to enhance retention, manage employee relations, and promote DEI initiatives. My experience includes designing and implementing comprehensive onboarding processes, developing compensation philosophies, and leading equity analysis projects.
            </p>
          </div>
        </section>

        <section id="skills" className="py-20 bg-white">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl py-1 text-gray-800">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-10">
              <div className="p-6 bg-gray-200 rounded shadow-lg transition-transform transform hover:scale-105">
                <h4 className="text-xl text-gray-800 mb-2">HR Software</h4>
                <ul className="text-gray-600">
                  <li>ADP</li>
                  <li>Oracle</li>
                  <li>Workday</li>
                </ul>
              </div>
              <div className="p-6 bg-gray-200 rounded shadow-lg transition-transform transform hover:scale-105">
                <h4 className="text-xl text-gray-800 mb-2">Data Analysis</h4>
                <ul className="text-gray-600">
                  <li>Microsoft Excel (VLOOKUP, Pivot Tables)</li>
                  <li>Power BI</li>
                  <li>Tableau</li>
                  <li>Python</li>
                </ul>
              </div>
              <div className="p-6 bg-gray-200 rounded shadow-lg transition-transform transform hover:scale-105">
                <h4 className="text-xl text-gray-800 mb-2">Project Management</h4>
                <ul className="text-gray-600">
                  <li>Asana</li>
                  <li>Trello</li>
                  <li>Jira</li>
                </ul>
              </div>
              <div className="p-6 bg-gray-200 rounded shadow-lg transition-transform transform hover:scale-105">
                <h4 className="text-xl text-gray-800 mb-2">Compliance and Legal</h4>
                <ul className="text-gray-600">
                  <li>OSHA</li>
                  <li>EEOC</li>
                  <li>FMLA</li>
                  <li>ADA</li>
                  <li>Workers Comp</li>
                  <li>Wrongful Termination</li>
                </ul>
              </div>
              <div className="p-6 bg-gray-200 rounded shadow-lg transition-transform transform hover:scale-105">
                <h4 className="text-xl text-gray-800 mb-2">Learning and Development</h4>
                <ul className="text-gray-600">
                  <li>Instructional Design</li>
                  <li>SAP Litmos</li>
                  <li>Workday Learning</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-20">
          <div className="container mx-auto">
            <h3 className="text-3xl py-1 text-center text-gray-800">Notable Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
              <div className="p-6 bg-white rounded shadow-lg transition-transform transform hover:scale-105">
                <div className="flex items-center justify-center">
                  <a href="https://joshdewhurst.github.io/wvpp-training/index.html" target="_blank" rel="noopener noreferrer">
                    <AiOutlineLink className="text-3xl hover:text-4xl text-gray-600" />
                  </a>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 text-center my-4">Workplace Violence Prevention Plan</h4>
                <p className="text-gray-800">
                  Achieved full compliance with Senate Bill 553 by developing and implementing a comprehensive workplace violence prevention plan. Built a specialized incident reporting platform and created training using HTML and CSS.
                </p>
              </div>
              <div className="p-6 bg-white rounded shadow-lg transition-transform transform hover:scale-105">
                <div className="flex items-center justify-center">
                  <a href="https://github.com/joshdewhurst/Churn-Machine-Learning" target="_blank" rel="noopener noreferrer">
                    <AiOutlineLink className="text-3xl hover:text-4xl text-gray-600" />
                  </a>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 text-center my-4">Python Machine Learning - Employee Churn</h4>
                <p className="text-gray-800">
                  Developed a predictive model using various machine learning techniques to identify employees at risk of churning. Implemented strategies based on model findings, resulting in an 8% reduction in churn.
                </p>
              </div>
              <div className="p-6 bg-white rounded shadow-lg transition-transform transform hover:scale-105">
                <h4 className="text-xl font-semibold text-gray-800 text-center my-4">People Analytics - Equity</h4>
                <p className="text-gray-800">
                  Led an equity analysis project to evaluate company demographics and identify significant concerns in leadership diversity. Generated custom reports using Microsoft Suite and presented findings to the board to drive diversity and inclusion initiatives.
                </p>
              </div>
              <div className="p-6 bg-white rounded shadow-lg transition-transform transform hover:scale-105">
                <h4 className="text-xl font-semibold text-gray-800 text-center my-4">Compensation Philosophy</h4>
                <p className="text-gray-800">
                  Developed a comprehensive Compensation Philosophy emphasizing thriving wages, balance, financial sustainability, transparency, equity, and performance-based rewards. This initiative ensures fair and competitive compensation, promotes employee well-being, and supports DEI goals.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="py-20 bg-white">
          <div className="container mx-auto">
            <h3 className="text-3xl py-1 text-center text-gray-800">Education & Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
              <div className="p-6 bg-white rounded shadow-lg transition-transform transform hover:scale-105 text-center">
                <Image src="https://th.bing.com/th/id/OIP.51j02La--drxV97eVqtKzwHaDC?w=325&h=143&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="UCSB Logo" width={150} height={70} className="mx-auto" />
                <h4 className="text-xl font-semibold text-gray-800 my-4">University of California, Santa Barbara</h4>
                <p className="text-gray-800">Bachelor of Arts in Classics</p>
              </div>
              <div className="p-6 bg-white rounded shadow-lg transition-transform transform hover:scale-105 text-center">
                <Image src="https://th.bing.com/th/id/OIP.78x1_amOuPb6wHZ-TFg3jAHaBz?w=316&h=85&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="UC Berkeley Logo" width={150} height={70} className="mx-auto" />
                <h4 className="text-xl font-semibold text-gray-800 my-4">University of California, Berkeley</h4>
                <p className="text-gray-800">Data Science Certificate</p>
              </div>
              <div className="p-6 bg-white rounded shadow-lg transition-transform transform hover:scale-105 text-center">
                <Image src="https://clipground.com/images/general-assembly-logo-png-5.png" alt="General Assembly Logo" width={150} height={70} className="mx-auto" />
                <h4 className="text-xl font-semibold text-gray-800 my-4">General Assembly</h4>
                <p className="text-gray-800">Software Engineering Certificate</p>
              </div>
              <div className="p-6 bg-white rounded shadow-lg transition-transform transform hover:scale-105 text-center">
                <Image src="https://th.bing.com/th/id/OIP.8Qrp7DygOrwmDS0KqNhkhgAAAA?w=133&h=176&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="Weitzman Institute Logo" width={150} height={70} className="mx-auto" />
                <h4 className="text-xl font-semibold text-gray-800 my-4">Weitzman Institute</h4>
                <p className="text-gray-800">Justice, Equity, Diversity, and Inclusion Certificate</p>
              </div>
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
    </div>
  )
}
