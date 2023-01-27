import type { NextPage } from 'next';
import Head from 'next/head';
import About from '../components/About';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';

const Home: NextPage = () => {
  console.log('just for esplint complaining');
  return (
    <div>
      <Head>
        <title>Alan Mathiasen - Portfolio</title>
        <meta
          name="description"
          content="Portfolio de Alan Mathiasen - fullstack JavaScript developer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-body text-white font-poppins pb-12">
        <Navbar />

        <Hero />
        <main className="w-10/12 md:w-9/12 mx-auto ">
          <About />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  );
};

export default Home;
