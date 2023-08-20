/* eslint-disable react/no-unescaped-entities */ 
import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Chima | Resume</title>
        <meta
          name='description'
          content='I am a full-stack web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Chima Nnamani</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/chima-nnamani-21a614230/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/HenryCode4/'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
               Web Development{' '}
              <span className='px-1'>|</span> Complex Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Analytical, innovative, and motivated web development professional
          with experience in customer service, team membership, and
          organizational effectiveness in fast-paced and challenging
          environments. Adept at developing strategies and driving streamlined
          operations. Diverse analytical skills, team collaboration, and
          relationship building. Consummate professional, and self motivated,
          with solid interpersonal abilities and complex problem-solving skills.
          Effective and proven track record of critical thinking, idea
          generation, and optimizing efficiencies.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Full-stack Web Developer
            <span className='px-2'>|</span> HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript (ES6)
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>SQL
            <span className='px-2'>|</span>NoSQL
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span> MongoDB
            <span className='px-2'>|</span> TypeScript
            <span className='px-2'>|</span> RESTAPI
            <span className='px-2'>|</span> Nodejs
            <span className='px-2'>|</span> Express
            
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            INFINITE TECH
            </span>
            <span className='px-2'>|</span>Lagos
          </p>
          <p className='py-1 italic'>Front End Web Developer & Web Master (2021 - Current)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Ensured comprehensive mobile responsive UI layouts with
              understanding of HTML, CSS, and JavaScript (ES6).
            </li>
            <li>
              Troubleshoot issues and concerns, configure operation and analytic
              plugins, and design changes as needed.
            </li>
            <li>
              Worked directly with a diverse client base to understand and
              implement multiple technologies and programs.
            </li>
            <li>
               Dedicated to delivering robust and secure websites that meet my client's needs and exceed their expectations. 
            </li>
          </ul>
        </div>


       

        {/*  */}
        <h5 className='text-center underline text-[18px] py-4'>
          Other Professional Experience
        </h5>
      
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>Lonzec Technology Nig Limited, </span>
            <span className='px-2'>|</span> Bookshop House 8/9 Broad Street, Lagos
          </p>
          <p className='py-1 italic'>IT PERSONNEL (CONTRACT LEVEL) (JAN 2018 - – Dec 2020)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Managing and storing data.
            </li>
            <li>
            Provides technical support.
            </li>
            <li>
            Creating website layout and user interface by using standard programming language.

            </li>
            <li>
            Providing consulting services to other branches regarding technology operation issues.
            </li>
            
          </ul>


          <p className='italic'>
            <span className='font-bold'>Tantalizer Restaurant</span>
            <span className='px-2'>|</span> Maykay Plaza, 21 Road Close 1, Festac Lagos
          </p>
          <p className='py-1 italic'>Front DESK REPRESENTATIVE (FEB 2014 – DEC 2018)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Answering the telephones
            </li>
            <li>
            Meeting, greeting and siting guests.
            </li>
            <li>
            Handling all guest complaints, requests and enquires on food, beverages and service.

            </li>
            <li>
            Providing consulting services to other branches regarding technology operation issues.
            </li>
            
          </ul>


          <p className='italic'>
            <span className='font-bold'>Amatex Resources.</span>
            <span className='px-2'>|</span> 22 Road Close 3, Festac Lagos
          </p>
          <p className='py-1 italic'>OFFICE ASSISTANT ( JUL 2011 – JAN 2014 )</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Handles all media and public relations inquires.
            </li>
            <li>
            Designed electronic file systems, maintained electronic and paper files.
            </li>
            
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
