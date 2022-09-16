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
            <main className="w-9/12 mx-auto py-4">Alan Mathiasen</main>
        </div>
    );
};

export default Home;
