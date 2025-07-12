import React from 'react';
import { useState } from 'react';
import Image1 from '../assets/ProfileImage.jpeg'
import Image2 from '../assets/ProfileImage2.jpg'
import { VscVscode } from "react-icons/vsc";
import TechTags from './TechTags';
import { FaEye, FaPlay,FaYoutube,FaInstagram,FaGithub,FaLinkedinIn,FaWhatsapp } from 'react-icons/fa';
import { CiYoutube } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import ProjectModal from './ProjectModal';
import projectData from '../data/projectData';
import { Typewriter } from 'react-simple-typewriter';

function MainPage() {

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);


  return (
    <div className="min-h-screen text-white font-mono scroll-smooth">
      <div>
        {/* Section1 - Home*/}
        
        <section id='home' className="flex justify-center items-center h-screen bg-gradient-to-b from-[#010634] via-[#010634] to-black">
      <div className="text-2xl md:text-4xl text-center">
        {/* Stabilized h2 with fixed height container */}
        <div className="h-16 overflow-hidden mb-6">
          <h2 className="tracking-wide text-white">
            Hey, I am{' '}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent inline-block">
              <Typewriter
                words={['Web Developer', 'Frontend Engineer', 'React Enthusiast']}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>
        </div>

        {/* Stable h1 */}
        <h1 className="text-3xl font-bold my-6 tracking-wide flex justify-center space-x-4">
          <span className="text-white">Building</span>
          <span className="text-white">your</span>
          <span className="text-white">dream</span>
        </h1>

        {/* Stable p with gradient text */}
        <p className="text-3xl font-semibold tracking-wide flex justify-center space-x-4">
          <span className="bg-gradient-to-r from-[#5667f6] to-[#7634aa] bg-clip-text text-transparent">
            pixel
          </span>
          <span className="text-white font-bold">by</span>
          <span className="bg-gradient-to-r from-[#5667f6] to-[#7634aa] bg-clip-text text-transparent">
            pixel
          </span>
        </p>

        {/* Button with glass effect */}
        <div className="w-fit py-2 px-4 bg-white/20 rounded-lg mx-auto mt-6 text-lg font-semibold text-white hover:bg-white/40 transition-all duration-300 transform hover:-translate-y-2">
        <a href="#about">
          <button>Read More</button>
        </a>
        </div>
      </div>
    </section>

        {/* Section 2 - About */}

        <section id='about' className=' bg-[linear-gradient(to_bottom,_black_0%,_black_55%,_#060022_100%)]'>
              <h1 className='text-center text-3xl'>Why hire me for your <span className='bg-gradient-to-r from-violet-900 to-violet-400 bg-clip-text text-transparent font-semibold'>next project?</span></h1>

              <div className='md:grid grid-cols-2 py-20'>

                <div className='flex justify-center'>
                  <div className='border inline-block rounded-lg p-[3px] border-black bg-black  '>
                    <div className='w-fit p-[4px] rounded-lg bg-gradient-to-b from-[#01275c] to-[#000232] overflow-hidden'>
                      <img src={Image2} alt="Software developer Image" className='w-[280px] h-[390px] object-cover rounded-sm' />
                    </div>
                  </div>
                </div>

                <div className='flex mt-15'>
                  <div>
                    <div className='w-[80%] mb-12 mx-auto'>
                    <p className='text-center text-xl mb-4 font-light'>I am a professional with a degree in computer science, with more than two years of experience, including 1 year of experience working as a software developer and 2 years as a freelancer.</p>

                    <div className=' flex justify-center'>
                      <a href="#projects">
                        <button className='py-2 px-4 bg-white/20 hover:bg-white/40 rounded-lg  mt-6 
                        transition-all duration-300 transform hover:-translate-y-2'>Portfolio</button>
                      </a>
                      <a href="/Nilla's Playground proposal.pdf" download>
                      <button className='py-2 px-4 bg-white/20 hover:bg-white/40 rounded-lg mt-6 
                      transition-all duration-300 transform hover:-translate-y-2 ml-2 '>Download CV</button>
                      </a>
                    </div>
                  </div>

                  <div className='flex justify-around text-center'>
                    <div className='text-xl flex flex-col '>
                      <span>3 years</span>
                      <span className='bg-gradient-to-r from-[#5667f6] to-[#c952ff] bg-clip-text text-transparent font-semibold'>Experience</span>
                    </div>

                    <div className='text-xl flex flex-col '>
                      <span>+50 Projects</span>
                      <span className='bg-gradient-to-r from-[#5667f6] to-[#c952ff] bg-clip-text text-transparent font-semibold'>Github</span>
                    </div>
                   </div>
                  </div>
                </div>
              </div>
        </section>

        {/* Section 3 - Academic and Professional Journey */}

        <section className=' bg-[linear-gradient(to_bottom,_#060022_0%,_#04032b_75%,_#04032b_100%)] pb-20'>
          
              <h1 className='bg-gradient-to-r from-[#5667f6] to-[#c952ff] bg-clip-text text-transparent font-semibold text-4xl text-center'>My Academic and Professional Journey</h1>

              <div className='md:grid grid-cols-2'>

                  <div>
                    <div className='mt-18 pb-6 shadow-2xl '>
                      <h1 className='text-center text-3xl mb-8'>Education</h1>

                      <div className='space-y-6'>
                        <div className='bg-[#38334e]/40 w-[80%] rounded-md mx-auto py-4 pl-4 hover:bg-[#38334e]/75'>
                          <p className='text-sm text-[#5667f6] font-semibold '>November 14, 2023</p>
                          <p className='mb-2 text-lg'>UI Design Training</p>
                          <p className='text-[#d2cce9] font-semibold'>Prodigee</p>
                        </div>

                        <div className='bg-[#38334e]/40 w-[80%] rounded-md mx-auto py-4 pl-4 hover:bg-[#38334e]/75'>
                          <p className='text-sm text-[#5667f6] font-semibold '>November 14, 2023</p>
                          <p className='mb-2 text-lg'>UI Design Training</p>
                          <p className='text-[#d2cce9] font-semibold'>Prodigee</p>
                        </div>

                        <div className='bg-[#38334e]/40 w-[80%] rounded-md mx-auto py-4 pl-4 hover:bg-[#38334e]/75'>
                          <p className='text-sm text-[#5667f6] font-semibold '>November 14, 2023</p>
                          <p className='mb-2 text-lg'>UI Design Training</p>
                          <p className='text-[#d2cce9] font-semibold'>Prodigee</p>
                        </div>

                        <div className='bg-[#38334e]/40 w-[80%] rounded-md mx-auto py-4 pl-4 hover:bg-[#38334e]/75'>
                          <p className='text-sm text-[#5667f6] font-semibold '>November 14, 2023</p>
                          <p className='mb-2 text-lg'>UI Design Training</p>
                          <p className='text-[#d2cce9] font-semibold'>Prodigee</p>
                        </div>
                      </div>
                    </div>
                </div>



                <div>
                    <div className='mt-18 pb-6 shadow-2xl'>
                      <h1 className='text-center text-3xl mb-8'>Professional Experience</h1>

                      <div className='space-y-6'>
                        <div className='bg-[#38334e]/40 w-[80%] rounded-md mx-auto py-4 pl-4 hover:bg-[#38334e]/75'>
                          <p className='text-sm text-[#5667f6] font-semibold '>November 14, 2023</p>
                          <p className='mb-2 text-lg'>UI Design Training</p>
                          <p className='text-[#d2cce9] font-semibold'>Prodigee</p>
                        </div>

                        <div className='bg-[#38334e]/40 w-[80%] rounded-md mx-auto py-4 pl-4 hover:bg-[#38334e]/75'>
                          <p className='text-sm text-[#5667f6] font-semibold '>November 14, 2023</p>
                          <p className='mb-2 text-lg'>UI Design Training</p>
                          <p className='text-[#d2cce9] font-semibold'>Prodigee</p>
                        </div>

                        <div className='bg-[#38334e]/40 w-[80%] rounded-md mx-auto py-4 pl-4 hover:bg-[#38334e]/75'>
                          <p className='text-sm text-[#5667f6] font-semibold '>November 14, 2023</p>
                          <p className='mb-2 text-lg'>UI Design Training</p>
                          <p className='text-[#d2cce9] font-semibold'>Prodigee</p>
                        </div>

                        <div className='bg-[#38334e]/40 w-[80%] rounded-md mx-auto py-4 pl-4 hover:bg-[#38334e]/75'>
                          <p className='text-sm text-[#5667f6] font-semibold '>November 14, 2023</p>
                          <p className='mb-2 text-lg'>UI Design Training</p>
                          <p className='text-[#d2cce9] font-semibold'>Prodigee</p>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
        </section>


              {/* Section 4 - Tools and skills */}

              {/* Tools */}
        <section className='bg-[linear-gradient(to_bottom,_#04032b_0%,_#04032b_95%,_#04032b_100%)] '>

          <div className='mb-10'>
              <p className='text-3xl font-semibold tracking-wide flex space-x-4 justify-center items-center'>
                <span className=' bg-gradient-to-r from-[#5667f6] to-[#7634aa] bg-clip-text text-transparent text-4xl'>Tools</span>
              <span className='font-bold text-4xl'>and</span>
              <span className='bg-gradient-to-r from-[#5667f6] to-[#7634aa] bg-clip-text text-transparent text-4xl'>Skills</span>
                </p>
          </div>

          <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-18 md:px-26'>
              <div className='bg-[#38334e]/40 w-[250px] h-[140px] rounded-md mx-auto py-6 flex flex-col items-center gap-2'>
                  <div>
                    <VscVscode className='w-16 h-14 text-[#9352ff]'/>
                  </div>
                    <p className='text-[#d2cce9] text-lg'>Visual Studio Code</p>
              </div>

              <div className='bg-[#38334e]/40 w-[250px] h-[140px] rounded-md mx-auto py-6 flex flex-col items-center gap-2'>
                  <div>
                    <VscVscode className='w-16 h-14 text-[#9352ff]'/>
                  </div>
                    <p className='text-[#d2cce9] text-lg'>Visual Studio Code</p>
              </div>

              <div className='bg-[#38334e]/40 w-[250px] h-[140px] rounded-md mx-auto py-6 flex flex-col items-center gap-2'>
                  <div>
                    <VscVscode className='w-16 h-14 text-[#9352ff]'/>
                  </div>
                    <p className='text-[#d2cce9] text-lg'>Visual Studio Code</p>
              </div>

              <div className='bg-[#38334e]/40 w-[250px] h-[140px] rounded-md mx-auto py-6 flex flex-col items-center gap-2'>
                  <div>
                    <VscVscode className='w-16 h-14 text-[#9352ff]'/>
                  </div>
                    <p className='text-[#d2cce9] text-lg'>Visual Studio Code</p>
              </div>

              <div className='bg-[#38334e]/40 w-[250px] h-[140px] rounded-md mx-auto py-6 flex flex-col items-center gap-2 mr-5 md:mr-15'>
                  <div>
                    <VscVscode className='w-16 h-14 text-[#9352ff]'/>
                  </div>
                    <p className='text-[#d2cce9] text-lg'>Visual Studio Code</p>
              </div>

              
          </div>
        </section>

        {/* Skills */}
              <section id='skills' className=' bg-[linear-gradient(to_bottom,_#04032b_0%,_#04032b_35%,_black_100%)] pb-30'>
                <TechTags/>
              </section>




              {/* Portfolio */}
              <section id='projects' className='bg-[linear-gradient(to_bottom,_black_0%,_black_90%,_#04032b_100%)] pb-20'>

                        <h1 className='bg-gradient-to-r from-[#5667f6] to-[#c952ff] bg-clip-text text-transparent font-semibold text-4xl text-center mb-8 pt-20'>
                          My Portfolio
                          </h1>

                               {/* Card */}
                    <div className="p-4 ">

                      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-4">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="bg-[#1e1e1e] rounded-xl overflow-hidden shadow-lg p-4 transition-transform duration-300 transform hover:scale-105"
          >
            <div className="overflow-hidden rounded-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-110"
              />
            </div>

            <h2 className="text-2xl mt-6 mb-4 font-semibold bg-gradient-to-r from-[#5667f6] to-[#7634aa] bg-clip-text text-transparent">
              {project.title}
            </h2>

            <div className="flex gap-3">
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded bg-green-600 text-white font-semibold hover:bg-green-700 transition"
              >
                <FaPlay />
                Demo
              </a>
              <button
                onClick={() => {
                  setSelectedProject(project);
                  setModalOpen(true);
                }}
                className="flex items-center gap-2 px-4 py-2 rounded bg-blue-700 text-white font-semibold hover:bg-blue-800 transition"
              >
                <FaEye />
                View More
              </button>
            </div>
          </div>
        ))}
      </div>
                    </div>

                    <div className='w-fit mx-auto my-10 bg-gradient-to-r from-[#5667f6] to-[#7634aa] text-white border border-white py-2 px-4 rounded-lg text-lg transition-transform duration-300 transform hover:scale-110 border-none cursor-pointer'>
                      <button onClick={() => window.open("https://github.com/TARIQQ-coder?tab=repositories", "_blank")} className='cursor-pointer'>
                        View More Projects
                      </button>
                    </div>

                    {/* Modal */}
                    {selectedProject && (
                      <ProjectModal
                        isOpen={isModalOpen}
                        onClose={() => setModalOpen(false)}
                        image={selectedProject.image}
                        title={selectedProject.title}
                        description={selectedProject.description}
                        tech={selectedProject.tech}
                        demoLink={selectedProject.demoLink}
                      />
                    )}
                  

              </section>


              {/* Happy clients  */}

              <section className='bg-[linear-gradient(to_bottom,_#04032b_0%,_#04032b_95%,_#04032b_100%)] py-35'>

                <div className='relative bg-white/10 backdrop-blur-md   p-6 shadow-lg'>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-6'>

                    <div className='text-center mb-8'>
                      <span className='text-4xl font-semibold'>75</span>
                      <p className='bg-gradient-to-r from-[#5667f6] to-[#7634aa] bg-clip-text text-transparent text-xl font-semibold'>Successful Projects</p>
                    </div>

                    <div className='text-center mb-8'>
                      <span className='text-4xl font-semibold'>75</span>
                      <p className='bg-gradient-to-r from-[#5667f6] to-[#7634aa] bg-clip-text text-transparent text-xl font-semibold'>Successful Projects</p>
                    </div>

                    <div className='text-center mb-8'>
                      <span className='text-4xl font-semibold'>75</span>
                      <p className='bg-gradient-to-r from-[#5667f6] to-[#7634aa] bg-clip-text text-transparent text-xl font-semibold'>Successful Projects</p>
                    </div>

                    <div className='text-center mb-8'>
                      <span className='text-4xl font-semibold'>75</span>
                      <p className='bg-gradient-to-r from-[#5667f6] to-[#7634aa] bg-clip-text text-transparent text-xl font-semibold'>Successful Projects</p>
                    </div>
                </div>
                </div>

              </section>


              {/* Future Projects */}
              <section className='bg-[linear-gradient(to_bottom,_#04032b_0%,_black_75%,_black_100%)] pb-20'>

                      <h1 className='bg-gradient-to-r from-[#5667f6] to-[#c952ff] bg-clip-text text-transparent font-semibold text-4xl text-center mb-8 pt-20'>
                        Future Projects
                        </h1>

                <div className='px-8 grid grid-cols-1 gap-y-10'>
                        <div className=' bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 shadow-lg hover:bg-white/20 transition-transform duration-300 transform hover:scale-105 border-none'>
                          <p className='text-2xl bg-gradient-to-r from-[#5667f6] to-[#a647ee] bg-clip-text text-transparent font-semibold mb-4'>Did you know that a website's performance can be the difference between gaining or losing a client?</p>

                          <span className='text-lg'>In today's digital-first world, your website is often the first (and sometimes only) impression you get to make. Whether you're a developer, designer, business owner, or marketer, website performance is not just a technical detail—it's a strategic asset that can directly influence whether you win or lose a potential client.</span>

                          <div className='w-fit bg-gradient-to-r from-[#5667f6] to-[#7634aa] text-white border border-white py-2 px-4 rounded-lg  border-none cursor-pointer tracking-wide mt-4'>
                          <button onClick={() => window.open("https://www.linkedin.com/pulse/website-performance-difference-between-gaining-losing-kojo-amfo-baah-necye/", "_blank")} className='cursor-pointer'>
                            Learn More
                          </button>
                        </div>
                    </div>

                    <div className=' bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 shadow-lg hover:bg-white/20 transition-transform duration-300 transform hover:scale-105 border-none'>
                          <p className='text-2xl bg-gradient-to-r from-[#5667f6] to-[#a647ee] bg-clip-text text-transparent font-semibold mb-4'>The Importance of Versioning Your Code: A Practical Guide to Git and GitHub</p>

                          <span className='text-lg'>In the fast-evolving world of software development, writing good code is only part of the equation. Equally important is how you manage and track that code over time. Whether you're working solo or in a team, version control is the safety net that protects your project's integrity and your sanity.</span>

                          <div className='w-fit bg-gradient-to-r from-[#5667f6] to-[#7634aa] text-white border border-white py-2 px-4 rounded-lg  border-none cursor-pointer tracking-wide mt-4'>
                          <button onClick={() => window.open("https://www.linkedin.com/pulse/importance-versioning-your-code-practical-guide-git-github-amfo-baah-ptjoe/", "_blank")} className='cursor-pointer'>
                            Learn More
                          </button>
                        </div>
                    </div>

                    <div className=' bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 shadow-lg hover:bg-white/20 transition-transform duration-300 transform hover:scale-105 border-none'>
                          <p className='text-2xl bg-gradient-to-r from-[#5667f6] to-[#a647ee] bg-clip-text text-transparent font-semibold mb-4'>The Benefits of AI for Developers — And Why You Shouldn't Rely on It Entirely</p>

                          <span className='text-lg'>Artificial Intelligence has rapidly become a vital tool in the software development process. From autocomplete suggestions to full-blown code generation, AI is helping developers write better code, faster. It's transforming the way we build, debug, and deploy software — and it's not slowing down anytime soon.</span>

                          <div className='w-fit bg-gradient-to-r from-[#5667f6] to-[#7634aa] text-white border border-white py-2 px-4 rounded-lg  border-none cursor-pointer tracking-wide mt-4'>
                          <button onClick={() => window.open("https://www.linkedin.com/pulse/benefits-ai-developers-why-you-shouldnt-rely-entirely-kojo-amfo-baah-wb2xe/", "_blank")} className='cursor-pointer'>
                            Learn More
                          </button>
                        </div>
                    </div>
                </div>
              </section>

              {/* Contact */}

              <section className="bg-[linear-gradient(to_bottom,_black_0%,_black_75%,_black_100%)]" id="contact">
      <div className="max-w-5xl mx-auto text-center px-8">
        <h2 className='bg-gradient-to-r from-[#5667f6] to-[#c952ff] bg-clip-text text-transparent font-semibold text-4xl text-center mb-8 pt-20'>
          Contact Me
        </h2>
        <p className="mb-12 text-sm md:text-base text-gray-300 max-w-xl mx-auto">
          'The best way to predict the future is to invent it' - Alan Kay
        </p>

        <form className="space-y-6">
          <input
            type="text"
            placeholder="Name"
            className="w-full bg-transparent border border-[#5667f6] px-4 py-3 r focus:outline-none placeholder-[#7634aa]"
          />

          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 bg-transparent border border-[#5667f6] px-4 py-3  focus:outline-none focus:ring- placeholder-[#7634aa]"
            />
            <input
              type="text"
              placeholder="Subject"
              className="flex-1 bg-transparent border border-[#5667f6] px-4 py-3  focus:outline-none placeholder-[#7634aa]"
            />
          </div>

          <textarea
            rows="6"
            placeholder="Your Message"
            className="w-full bg-transparent border border-[#5667f6] px-4 py-3 focus:outline-none placeholder-[#7634aa]"
          ></textarea>

          <button
            type="submit"
            className='w-fit mx-auto my-10 bg-gradient-to-r from-[#5667f6] to-[#7634aa] text-white border border-white py-2 px-4 rounded-lg text-lg transition-transform duration-300 transform hover:scale-110 border-none cursor-pointer'
          >
            Send Message
          </button>
        </form>
      </div>
    </section>

              {/* socials */}

              <section className='bg-[linear-gradient(to_bottom,_black_0%,_black_75%,_black_100%)]'>
                <div className='flex justify-center gap-8 '>
                    <div className='cursor-pointer'>
                      <a href="https://x.com/Tariqq_gunner"
                      target="_blank"
                      rel="noopener noreferrer">

                        <FaXTwitter className='w-6 h-6' />
                      </a>
                    </div>

                    <div className='cursor-pointer'>
                      <a href="https://www.instagram.com/riqque_1/"
                      target="_blank"
                      rel="noopener noreferrer">

                        <FaInstagram className='w-6 h-6' />
                      </a>
                    </div>

                    <div className='cursor-pointer'>
                        <a href="https://x.com/Tariqq_gunner"
                      target="_blank"
                      rel="noopener noreferrer">

                        <FaGithub className='w-6 h-6' />
                      </a>
                    </div>

                    <div className='cursor-pointer'>
                        <a href="https://www.linkedin.com/in/kojo-amfo-baah-206191228/"
                      target="_blank"
                      rel="noopener noreferrer">

                        <FaLinkedinIn className='w-6 h-6' />
                      </a>
                    </div>

                    <div className='cursor-pointer'>
                        <a href="https://www.youtube.com/@pidginplaybook"
                      target="_blank"
                      rel="noopener noreferrer">

                        <FaYoutube className='w-6 h-6' />
                      </a>
                    </div>

                    <div className='cursor-pointer'>
                        <a href="https://wa.me/233504614340"
                      target="_blank"
                      rel="noopener noreferrer">

                        <FaWhatsapp className='w-6 h-6' />
                      </a>
                    </div>  
                </div>

                <div className='flex justify-center py-4'>
                  <p>
                        &copy; {new Date().getFullYear()} Kojo Amfo-Baah. All rights reserved.
                      </p>
                </div>
              </section>
        
      </div>
    </div>
  );
}

export default MainPage;
