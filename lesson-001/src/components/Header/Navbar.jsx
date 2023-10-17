import Link from "next/link";
import React from "react";
import Logo from "@/assets/icons/logo.svg";

const Navbar = () => {
    return (
        <header className="bg-gray-400">
            <div className="container mx-auto px-4">
                <nav className=" p-5 flex gap-x-8 ">
                    <img src={Logo.src} alt="logo" />

                    <ul className="flex gap-x-8 items-center">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/posts">Posts</Link>
                        </li>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                        <li>
                            <Link href="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
