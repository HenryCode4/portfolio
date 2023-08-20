import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { motion } from "framer-motion"

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <motion.p
          initial={{y: 10, opacity: 0}}
          animate={{ y: 0 ,opacity : 1 }}
          transition={{duration: 0.5, delay: 0.8}}
          className='uppercase text-sm tracking-widest text-gray-600'>
            LET&#39;S BUILD SOMETHING TOGETHER
          </motion.p>
          <motion.h1 
          initial={{y: 10, opacity: 0}}
          animate={{ y: 0 ,opacity : 1 }}
          transition={{duration: 0.5, delay: 0.9}}
          className='py-4 text-gray-700'>
            Hi, I&#39;m <span className='text-[#5651e5]'> Chima</span>
          </motion.h1>
          <motion.h1
          initial={{y: 10, opacity: 0}}
          animate={{ y: 0 ,opacity : 1 }}
          transition={{duration: 0.5, delay: 1.0}}
          className='py-2 text-gray-700'>A Full-Stack Web Developer</motion.h1>
          <motion.p
          initial={{y: 10, opacity: 0}}
          animate={{ y: 0 ,opacity : 1 }}
          transition={{duration: 0.5, delay: 1.1}}
          className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
            I’m focused on building responsive front-end web applications
            and also a perfectly secured back-end as well.
          </motion.p>
          <motion.div
          initial={{y: 10, opacity: 0}}
          animate={{ y: 0 ,opacity : 1 }}
          transition={{duration: 0.5, delay: 1.2}}
          className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/chima-nnamani-21a614230/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/HenryCode4'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <Link href='/#contact'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
            <Link href='/resume'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Main;
