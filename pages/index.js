import Head from 'next/head'
import { AiFillMail, AiFillLinkedin, AiFillGithub, AiOutlineLink } from 'react-icons/ai'

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
              I am an accomplished People Operations professional with expertise in HR management, compliance, and data analysis. I have a strong background in developing compensation philosophies, enhancing employee retention, and promoting diversity and inclusion within organizations.
            </p>
          </div>
        </section>

        <section id="skills" className="py-20 bg-white">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl py-1 text-gray-800">Technical Skills</h3>
            <div className="flex justify-center space-x-10 py-10">
              <div>
                <h4 className="text-xl text-gray-800">HR Software</h4>
                <p className="text-gray-600">Oracle, SAP</p>
              </div>
              <div>
                <h4 className="text-xl text-gray-800">Microsoft Suite</h4>
                <p className="text-gray-600">Power BI, Tableau</p>
              </div>
              <div>
                <h4 className="text-xl text-gray-800">Programming</h4>
                <p className="text-gray-600">Python, JavaScript, React</p>
              </div>
              <div>
                <h4 className="text-xl text-gray-800">Other Skills</h4>
                <p className="text-gray-600">Project Management, Diversity & Inclusion</p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-20">
          <div className="container mx-auto">
            <h3 className="text-3xl py-1 text-center text-gray-800">Notable Projects</h3>
            <div className="flex flex-wrap justify-center space-x-10">
              <div className="max-w-md w-full shadow-lg rounded-xl overflow-hidden bg-white hover:shadow-xl transition-all duration-300 my-5">
                <div className="p-6">
                  <div className="flex items-center justify-center">
                    <a href="https://joshdewhurst.github.io/wvpp-training/index.html" target="_blank" rel="noopener noreferrer">
                      <AiOutlineLink className="text-3xl hover:text-4xl text-gray-600" />
                    </a>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 text-center my-4">Workplace Violence Prevention Plan</h4>
                  <p className="text-gray-800 mb-4">
                    Achieved full compliance with Senate Bill 553 by developing and implementing a comprehensive workplace violence prevention plan. Built a specialized incident reporting platform and created training using HTML and CSS.
                  </p>
                </div>
              </div>

              <div className="max-w-md w-full shadow-lg rounded-xl overflow-hidden bg-white hover:shadow-xl transition-all duration-300 my-5">
                <div className="p-6">
                  <div className="flex items-center justify-center">
                    <a href="https://github.com/joshdewhurst/Churn-Machine-Learning" target="_blank" rel="noopener noreferrer">
                      <AiOutlineLink className="text-3xl hover:text-4xl text-gray-600" />
                    </a>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 text-center my-4">Python Machine Learning - Employee Churn</h4>
                  <p className="text-gray-800 mb-4">
                    Developed a predictive model using various machine learning techniques to identify employees at risk of churning. Implemented strategies based on model findings, resulting in an 8% reduction in churn.
                  </p>
                </div>
              </div>

              <div className="max-w-md w-full shadow-lg rounded-xl overflow-hidden bg-white hover:shadow-xl transition-all duration-300 my-5">
                <div className="p-6">
                  <div className="flex items-center justify-center">
                    <a href="https://github.com/joshdewhurst/people-analytics-equity" target="_blank" rel="noopener noreferrer">
                      <AiOutlineLink className="text-3xl hover:text-4xl text-gray-600" />
                    </a>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 text-center my-4">People Analytics - Equity</h4>
                  <p className="text-gray-800 mb-4">
                    Led an equity analysis project to evaluate company demographics and identify significant concerns in leadership diversity. Generated custom reports using Microsoft Suite and presented findings to the board to drive diversity and inclusion initiatives.
                  </p>
                </div>
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
    </div>
  )
}

