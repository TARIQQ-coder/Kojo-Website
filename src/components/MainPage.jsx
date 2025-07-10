import React from 'react';
import { useState } from 'react';
import Image1 from '../assets/ProfileImage.jpeg'
import Image2 from '../assets/ProfileImage2.jpg'
import { VscVscode } from "react-icons/vsc";
import TechTags from './TechTags';
import MaleFashionPP from '../assets/MaleFashionPP.png'
import { FaEye, FaPlay } from 'react-icons/fa';
import ProjectModal from './ProjectModal';

function MainPage() {

  const [isModalOpen, setModalOpen] = useState(false);

  const projectData = {
    image: MaleFashionPP,
    title: 'Male fashion Website',
    description:
      'This is a Kanban-based task management system, developed with React, TypeScript, and TailwindCSS. The project offers an intuitive interface to organize tasks in three states: To Do, In Progress, and Completed.',
    tech: ['Vite', 'React', 'TypeScript', 'TailwindCSS', 'Zustand'],
    demoLink: 'https://male-fashion-shop.netlify.app/', 
  };

  return (
    <div className="min-h-screen text-white font-mono">
      <div>
        {/* Section1 - Home*/}
        
        <section className='flex justify-center h-screen items-center  bg-[linear-gradient(to_bottom,_#010634_0%,_#010634_75%,_black_100%)]'>
          <div className=' text-2xl md:text-4xl'>

            <h2 className='tracking-wide '>Hey, I am Software developer</h2>

            <h1 className='text-3xl font-bold my-6 tracking-wide flex space-x-4 ml-6 md:ml-32'>
              <span>Building</span>
              <span>your</span>
              <span>dream</span>
            </h1>

              <p className='text-3xl font-semibold tracking-wide flex space-x-4 justify-center'>
                <span className=' bg-gradient-to-r from-[#5667f6] to-[#7634aa] bg-clip-text text-transparent'>pixel</span>
              <span className='font-bold'>by</span>
              <span className='bg-gradient-to-r from-[#5667f6] to-[#7634aa] bg-clip-text text-transparent'>pixel</span>
                </p>

                <div className='w-fit py-2 px-4 bg-white/20 rounded-lg mx-auto mt-6 text-lg font-semibold hover:bg-white/40 
                transition-all duration-300 transform hover:-translate-y-2'>

                <button>Read More</button>
                </div>
          </div>
        </section>

        {/* Section 2 - About */}

        <section className=' bg-[linear-gradient(to_bottom,_black_0%,_black_55%,_#060022_100%)]'>
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
                      <button className='py-2 px-4 bg-white/20 hover:bg-white/40 rounded-lg  mt-6 
                      transition-all duration-300 transform hover:-translate-y-2'>Portfolio</button>
                      <button className='py-2 px-4 bg-white/20 hover:bg-white/40 rounded-lg mt-6 
                      transition-all duration-300 transform hover:-translate-y-2 ml-2 '>Download CV</button>
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
        <section className='bg-[linear-gradient(to_bottom,_#04032b_0%,_#04032b_95%,_#04032b_100%)] lg:pb-25'>

          <div className='mb-10'>
              <p className='text-3xl font-semibold tracking-wide flex space-x-4 justify-center items-center'>
                <span className=' bg-gradient-to-r from-[#5667f6] to-[#7634aa] bg-clip-text text-transparent text-4xl'>Tools</span>
              <span className='font-bold text-4xl'>and</span>
              <span className='bg-gradient-to-r from-[#5667f6] to-[#7634aa] bg-clip-text text-transparent text-4xl'>Skills</span>
                </p>
          </div>

          <div className=' flex flex-wrap gap-y-4 px-20 md:px-35'>
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

              <div className=' w-[250px] h-[140px]'>  
              </div>

              <div className=' w-[250px] h-[140px]'>  
              </div>

              <div className=' w-[250px] h-[140px]'>  
              </div>
          </div>
        </section>

        {/* Skills */}
              <section className=' bg-[linear-gradient(to_bottom,_#04032b_0%,_#04032b_35%,_black_100%)] pb-30'>
                <TechTags/>
              </section>




              {/* Portfolio */}
              <section className='bg-[linear-gradient(to_bottom,_black_0%,_black_55%,_black_100%)]'>

                      <div className="min-h-screen bg-bla">

                               {/* Card */}
                    <div className="max-w-xl md:max-w-md mx-auto bg-[#1e1e1e] rounded-xl overflow-hidden shadow-lg p-4 transition-transform duration-300 transform hover:scale-105">
                      {/* Image */}
                      <div className="overflow-hidden rounded-lg">
                        <img
                          src={projectData.image}
                          alt="Project"
                          className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-110"
                        />
                      </div>

        {/* Title */}
                  <h2 className="text-2xl mt-6 mb-4 font-semibold bg-gradient-to-r from-[#5667f6] to-[#7634aa] bg-clip-text text-transparent">
                    {projectData.title}
                  </h2>

                  {/* Buttons */}
                  <div className=" gap-4 mt-4">
                    <a
                      href={projectData.demoLink}
                      target="_blank"
                      className="flex items-center justify-center w-fit gap-2 px-4 py-2  rounded bg-green-600 text-white font-semibold hover:bg-green-700 transition mb-2"
                    >
                      <FaPlay />
                      Demo
                    </a>

                        <button
                          onClick={() => setModalOpen(true)}
                          className="flex items-center justify-center gap-2 px-4 py-2 md:py-0 rounded bg-blue-700 text-white font-semibold hover:bg-blue-800 transition"
                        >
                          <FaEye />
                          View More
                        </button>
                      </div>
                    </div>

                    {/* Modal */}
                    <ProjectModal
                      isOpen={isModalOpen}
                      onClose={() => setModalOpen(false)}
                      image={projectData.image}
                      title={projectData.title}
                      description={projectData.description}
                      tech={projectData.tech}
                      demoLink={projectData.demoLink}
                    />
                  </div>

              </section>
        
      </div>
    </div>
  );
}

export default MainPage;
