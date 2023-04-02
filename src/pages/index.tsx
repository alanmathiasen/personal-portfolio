import type { NextPage } from 'next';
import Head from 'next/head';
import Footer from '@/components/Footer';
import About from '../components/About';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Alan Mathiasen - Portfolio</title>
      <meta
        name="description"
        content="Portfolio de Alan Mathiasen - fullstack JavaScript developer"
      />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="alternate" href="/" hrefLang="x-default" />
      <link rel="alternate" href="/" hrefLang="en" />
      <link rel="alternate" href="/es" hrefLang="es" />
    </Head>
    <div className="bg-body text-white font-poppins pb-12">
      <Navbar />

      <Hero />
      <main className="w-10/12 md:w-6/12 mx-auto ">
        {/* <About /> */}
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  </div>
);

export default Home;
