import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Alan Mathiasen - Portfolio</title>
                <meta name="description" content="Portfolio Alan Mathiasen fullstack JavaScript developer" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main className="bg-zinc-50">
                <div className="w-9/12 mx-auto py-4 h-[2000px] " id="home">
                    Alan Mathiasen
                </div>
                <span id="projects"></span>
                <div className="w-9/12 mx-auto py-4 h-[2000px] mt-20 ">Projects</div>
                <span id="about"></span>
                <div className="w-9/12 mx-auto py-4 h-[2000px] mt-20 ">About</div>
                <span id="contact"></span>
                <div className="w-9/12 mx-auto py-4 h-[2000px] mt-20 ">Contact</div>
            </main>
        </div>
    );
};

export default Home;
