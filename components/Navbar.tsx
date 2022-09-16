import Link from "next/link";
import React, { useState } from "react";

interface IMobileNavbarProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

const links = [
    {
        to: "#projects",
        text: "PROJECTS",
    },
    {
        to: "#about",
        text: "ABOUT",
    },
    {
        to: "#contact",
        text: "CONTACT",
    },
];

const MobileNavbar = ({ open, setOpen }: IMobileNavbarProps) => {
    return (
        <div
            className={`absolute top-0 left-0 h-screen w-screen bg-white transform 
            ${open ? "-translate-x-0" : "-translate-x-full"}
            transition-transform duration-300 ease-in-out filter drop-shadow-md `}
        >
            <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20">
                {" "}
                {/*logo container*/}
                <Link className="text-xl font-semibold" href="/">
                    <a
                        onClick={() =>
                            setTimeout(() => {
                                setOpen(!open);
                                console.log(open);
                            }, 100)
                        }
                    >
                        ALAN MATHIASEN
                    </a>
                </Link>
            </div>
            <div className="flex flex-col ml-4">
                {links.map((link, idx) => (
                    <Link href={link.to} key={idx}>
                        <a
                            className="text-xl my-4"
                            onClick={() =>
                                setTimeout(() => {
                                    setOpen(!open);
                                    console.log(open);
                                }, 100)
                            }
                        >
                            {link.text}
                        </a>
                    </Link>
                ))}
            </div>
        </div>
    );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
    return (
        <div className={`mx-4`}>
            <Link href={to}>{children}</Link>
        </div>
    );
};

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="flex items-center filter drop-shadow-md bg-white  py-4 h-20">
            <nav className="flex items-center w-9/12 mx-auto">
                <MobileNavbar open={open} setOpen={setOpen} />
                <div className="w-6/12 flex items-center">
                    <Link className="text-xl font-semibold" href="/">
                        ALAN MATHIASEN
                    </Link>
                </div>
                <div className="w-6/12 flex justify-end items-center">
                    <div
                        className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
                        onClick={() => {
                            setOpen(!open);
                        }}
                    >
                        {/* hamburger button */}
                        <span
                            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
                                open ? "rotate-45 translate-y-3.5" : ""
                            }`}
                        />
                        <span
                            className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${
                                open ? "w-0" : "w-full"
                            }`}
                        />
                        <span
                            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
                                open ? "-rotate-45 -translate-y-3.5" : ""
                            }`}
                        />
                    </div>

                    <div className="hidden md:flex">
                        {links.map((link, idx) => (
                            <div className={`mx-4`} key={idx}>
                                <Link href={link.to}>{link.text}</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
