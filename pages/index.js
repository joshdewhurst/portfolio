import Head from 'next/head'
import {AiFillTwitterCircle, AiFillMail, AiFillLinkedin, AiFillGithub, AiOutlineLink, AiFillSignal, AiFillPushpin, AiFillTrophy} from 'react-icons/ai'
import {SiCplusplus, SiJavascript, SiTailwindcss, SiMongodb, SiNodedotjs, SiReact, SiPython, SiJava, SiOracle, SiSap, SiPowerbi, SiTableau} from 'react-icons/si'
import Image from 'next/image'
import josh from '../josh.jpg'
import jd from '../jd.jpg'
import zeus from '../handofzeus.jpg'
import dora from '../dora.jpg'
import track from '../Traxxxker.jpg'
import tr from '../TR.png'
import tho from '../THO.jpg'
import casl from '../CASL.png'
import ucsb from '../ucsb.gif'
import jbc from '../jbc.png'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Josh Dewhurst Portfolio</title>
        <meta name="description" content="Josh Dewhurst's professional portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-slate-100 px-10">
        <section className='p-10'>
          <div className="text-center p-10">
            <h2 className="text-7xl py-2 text-gray-900 font-medium">Josh Dewhurst</h2>
            <div className="relative mx-auto rounded-full w-80 h-80 overflow-hidden mb-10 mt-10">
              <Image 
                src={josh}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h3 className="text-2xl py-2 text-gray-600">People Operations and HR Specialist</h3>
            <p className="text-medium py-5 leading-8 text-gray-800">
              Josh Dewhurst is an accomplished People Operations professional with expertise in HR management, compliance, and data analysis. He has a strong background in developing compensation philosophies, enhancing employee retention, and promoting diversity and inclusion within organizations.
            </p>
          </div>

          <div className='items-center'>
            <div class="relative flex py-5 items-center text-center justify-center">
              <div class="flex-grow border-t border-gray-400"></div>
              <span class="flex mx-4 text-gray-400">Technical Skills</span>
              <div class="flex-grow border-t border-gray-400"></div>
            </div>
            <div className='justify-evenly flex p-4 text-center'>
              <div className='flex-col w-1/3'>
                <p className="text-gray-800 py-1">HR Software
                  <div className='justify-center text-2xl flex'>
                    <SiOracle />
                    <SiSap />
                  </div>
                </p>
                <p className="text-gray-800 py-1">Microsoft Suite
                  <div className='justify-center text-2xl flex'>
                    <SiPowerbi />
                    <SiTableau />
                  </div>
                </p>
                <p className="text-gray-800 py-1">Python
                  <div className='justify-center text-2xl flex'>
                    <SiPython />
                  </div>
                </p>
              </div>
              
              <div className='flex-col w-1/3'>
                <p className="text-gray-800 py-1">JavaScript
                  <div className='justify-center text-2xl flex'>
                    <SiJavascript />
                  </div>
                </p>
                <p className="text-gray-800 py-1">React
                  <div className='justify-center text-2xl flex'>
                    <SiReact />
                  </div>
                </p>
                <p className="text-gray-800 py-1">Project Management
                  <div className='justify-center text-2xl flex'>
                    <AiFillPushpin />
                  </div>
                </p>
              </div>

              <div className='flex-col w-1/3'>
                <p className="text-gray-800 py-1">Diversity & Inclusion
                  <div className='justify-center text-2xl flex'>
                    <AiFillTrophy />
                  </div>
                </p>
                <p className="text-gray-800 py-1">Employee Relations
                  <div className='justify-center text-2xl flex'>
                    <AiFillSignal />
                  </div>
                </p>
              </div>
            </div>
            <div class="relative flex py-5 items-center">
              <div class="flex-grow border-t border-gray-400"></div>
            </div>
          </div>
        </section>
        
        <section>
          <div>
            <h3 className="text-3xl py-1">Notable Projects</h3>
          </div>
          <div className="flex justify-center my-10">
            <div className="max-w-3xl w-full shadow-lg rounded-xl overflow-hidden bg-white dark:bg-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-center p-4 bg-slate-400 text-white">
                <a href="https://github.com/joshdewhurst/hand-of-zeus" target="_blank" rel="noopener noreferrer">
                  <AiFillGithub className="text-3xl hover:text-4xl" />
                </a>
                <h3 className="ml-4 text-xl font-semibold">Workplace Violence Prevention Plan</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-800 mb-4">
                  Achieved full compliance with Senate Bill 553 by developing and implementing a comprehensive workplace violence prevention plan. Built a specialized incident reporting platform and created training using HTML and CSS.
                </p>
                <div className="flex justify-center">
                  <Image src={zeus} width={500} height={500} />
                </div>
                <div className="mt-4 text-gray-800 flex justify-center items-center">
                  <span className="mr-2">Built with</span>
                  <SiJavascript className="text-2xl" />
                  <SiTailwindcss className="text-2xl ml-4" />
                  <SiMongodb className="text-2xl ml-4" />
                  <SiReact className="text-2xl ml-4" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center my-10">
            <div className="max-w-3xl w-full shadow-lg rounded-xl overflow-hidden bg-white dark:bg-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-center p-4 bg-slate-400 text-white">
                <a href="https://github.com/joshdewhurst/people-analytics-equity" target="_blank" rel="noopener noreferrer">
                  <AiFillGithub className="text-3xl hover:text-4xl" />
                </a>
                <h3 className="ml-4 text-xl font-semibold">People Analytics - Equity</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-800 mb-4">
                  Led an equity analysis project to evaluate company demographics and identify significant concerns in leadership diversity. Generated custom reports using Microsoft Suite and presented findings to the board to drive diversity and inclusion initiatives.
                </p>
                <div className="flex justify-center">
                  <Image src={dora} width={500} height={500} />
                </div>
                <div className="mt-4 text-gray-800 flex justify-center items-center">
                  <span className="mr-2">Built with</span>
                  <SiJavascript className="text-2xl" />
                  <SiTailwindcss className="text-2xl ml-4" />
                  <SiMongodb className="text-2xl ml-4" />
                  <SiNodedotjs className="text-2xl ml-4" />
                  <SiReact className="text-2xl ml-4" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center my-10">
            <div className="max-w-3xl w-full shadow-lg rounded-xl overflow-hidden bg-white dark:bg-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-center p-4 bg-slate-400 text-white">
                <a href="https://github.com/joshdewhurst/python-employee-churn" target="_blank" rel="noopener noreferrer">
                  <AiFillGithub className="text-3xl hover:text-4xl" />
                </a>
                <h3 className="ml-4 text-xl font-semibold">Python Machine Learning - Employee Churn</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-800 mb-4">
                  Developed a predictive model using various machine learning techniques to identify employees at risk of churning. Implemented strategies based on model findings, resulting in an 8% reduction in churn.
                </p>
                <div className="flex justify-center">
                  <Image src={track} width={500} height={500} />
                </div>
                <div className="mt-4 text-gray-800 flex justify-center items-center">
                  <span className="mr-2">Built with</span>
                  <SiPython className="text-2xl" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="text-center p-10 flex">
            <div className='flex flex-col p-10 w-100 basis-2/3'>
              <h2 className="text-7xl py-2 text-gray-900 font-medium content-start col-span-2">About Me</h2>
              <p className="p-4 text-1xl">
                Hi! My name is Josh Dewhurst, and I am a People Operations specialist with a strong background in HR management, compliance, and data analysis. I am located in San Francisco, CA and I am passionate about promoting diversity and inclusion within organizations.
              </p>
              <p className="p-4 text-1xl">
                In addition to HR, I have experience in project and event management. I have overseen projects ranging from $5,000 to $800,000, and have built internal leadership initiatives to optimize team and company performance.
              </p>
            </div>
            <div className="relative mx-auto rounded-full h-80 overflow-hidden mb-10 mt-10 content-start w-80 col-span-1 p-10">
              <Image 
                src={jd}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>

          <div>
            <h3 className="text-3xl py-1">Other Experience</h3>
          </div>

          <div className="text-center shadow-lg shadow-black bg-slate-200 p-10 rounded-xl my-10 dark:bg-white flex-1 hover:bg-slate-300">
            <h3 className="text-lg font-medium pt-8 pb-2">Project and Event Management</h3>
            <p className="py-2 text-start">
              Since 2015, I have successfully managed projects and directed events on various scales. My projects have had budgets ranging from $5,000 to $800,000. I have managed teams of engineers in app development from concept creation to code execution and post-project reflections. My expertise is in leadership development and team optimization. I have created internal curriculum for annual reviews, onboarding, and conflict resolution. I have led stand-up meetings for engineering teams of 25 engineers working on separate projects and have experience with revenue review for maximizing company profits.
            </p>

            <h4 className="text-lg font-medium pt-8 pb-2 object-left justify-start text-left">
              Companies and Organizations I have worked with:
            </h4>
            <div className='justify-center flex px-8-3 m-8'>
              <div className='justify-center text-2xl flex px-10'>
                <Image src={tr} objectFit="cover" width={80} height={80} />
              </div>
              <div className='justify-center text-2xl flex px-10'>
                <Image src={tho} objectFit="cover" width={80} height={80} />
              </div>
              <div className='justify-center text-2xl flex px-10'>
                <Image src={ucsb} objectFit="cover" width={80} height={90} />
              </div>
              <div className='justify-center text-2xl flex px-10'>
                <Image src={casl} objectFit="cover" width={100} height={80} />
              </div>
            </div>
          </div>

          <div className='flex'>
            <div className='basis-1/3 p-10'>
              <Image src={jbc} width={300} height={300} />
            </div>
            <h3 className="text-3xl py-1 basis-2/3 p-10 text-center">
              Contact me
              <div>
                <p className='font-light text-base p-10'>
                  Please contact me if you wish to connect professionally or personally. I am open to opportunities and connections within the tech field and beyond.
                </p>
                <div className='flex-col'>
                  <div className='flex p-4'>
                    <a href="mailto:joshuardewhurst@gmail.com" className='w-200 h-200 px-10'>
                      <AiFillMail width={200} height={200}/>
                    </a>
                    <p className='text-xl font-normal'>Send me an email.</p>
                  </div>
                  <div className='flex p-4'>
                    <a href="https://github.com/joshdewhurst" className='w-200 h-200 px-10'>
                      <AiFillGithub width={200} height={200}/>
                    </a>
                    <p className='text-xl font-normal'>Check out my GitHub for all current projects and past repositories!</p>
                  </div>
                  <div className='flex p-4'>
                    <a href="https://www.linkedin.com/in/josh-dewhurst/" className='w-200 h-200 px-10'>
                      <AiFillLinkedin width={200} height={200}/>
                    </a>
                    <p className='text-xl font-normal'>Let's connect on LinkedIn.</p>
                  </div>
                </div>
              </div>
            </h3>
          </div>
        </section>
      </main>
    </div>
  )
}
