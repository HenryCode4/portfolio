import About from '@/components/About'
import Contact from '@/components/Contact'
import Main from '@/components/Main'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Head from 'next/head'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Chima | Web Developer</title>
        <meta name="description" content="I’m a full-stack web developer specializing in building exceptional digital experiences." />
        <link rel="icon" href="/fav.png" />
      </Head>
    <Navbar />
    <Main />
    <About />
    <Skills />
    <Projects />
    <Contact />
    </div>
  )
}