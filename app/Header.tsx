"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Links = ({ pathname }: { pathname: string }) => (
    <>
        <Link href="/">
            <div
                className={`md:text-xl ${
                    pathname === "/" ? "underline underline-offset-4" : ""
                }`}
            >
                Home
            </div>
        </Link>
        <Link href="/mission">
            <div
                className={`md:text-xl ${
                    pathname === "/mission"
                        ? "underline underline-offset-4"
                        : ""
                }`}
            >
                Mission
            </div>
        </Link>
    </>
);

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => setIsOpen(false), [pathname]);

    return (
        <div className="text-3xl text-primary-light">
            <div
                className={`fixed transition-all flex-col h-screen w-screen z-40 bg-white flex md:hidden items-center space-y-10 justify-center top-0 ${
                    isOpen ? "" : "translate-x-full"
                }`}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="absolute top-10 right-10 w-8 h-8 cursor-pointer"
                    onClick={() => setIsOpen(false)}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                    />
                </svg>
                <Links pathname={pathname} />
            </div>
            <div className="flex w-full justify-between p-10">
                <div>
                    <span className="absolute z-50">Klasium</span>
                </div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-8 h-8 md:hidden cursor-pointer"
                    onClick={() => setIsOpen(true)}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 9h16.5m-16.5 6.75h16.5"
                    />
                </svg>
                <div className="hidden md:flex flex-row space-x-9">
                    <Links pathname={pathname} />
                </div>
            </div>
        </div>
    );
}
