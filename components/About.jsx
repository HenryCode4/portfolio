/* eslint-disable react/no-unescaped-entities */ 
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ProfileImg from '../public/assets/profileImg.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
          I'm an adept web developer proficient in HTML, CSS, React, Next.js, Node.js, and TypeScript. With a keen eye for detail and a passion for crafting seamless user experiences, I've built dynamic and responsive web applications. My skills in front-end and back-end development enable me to create robust, modern, and user-friendly digital solutions that cater to diverse needs.
          </p>
          <p className='py-2 text-gray-600'>
           
          I embarked on my programming journey in 2020, driven by a fascination for technology's creative potential. Since then, I've steadily honed my coding skills, exploring languages like Python and JavaScript. Through dedicated learning and hands-on projects, I've evolved into a capable developer, excited to solve real-world challenges and contribute meaningfully to the digital landscape.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-[#5651e5] rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={ProfileImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
