import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import threads from '../public/assets/projects/mythreads.png';
import messenger from '../public/assets/projects/messenger.png'
import netflixImg from '../public/assets/projects/netflix.jpg'
import twitchImg from '../public/assets/projects/twitch.jpg'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Threads'
            backgroundImg={threads}
            projectUrl="https://threads-app-livid.vercel.app/"
            tech='React JS'
          />
          <ProjectItem
            title='Messenger'
            backgroundImg={messenger}
            projectUrl='https://messenger-gamma-ebon.vercel.app/'
            tech='React JS'

          />
          
        </div>
      </div>
    </div>
  );
};

export default Projects;
