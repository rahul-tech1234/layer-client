"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBalanceScale } from "react-icons/fa";

import SearchBar from "./SearchBar";
import DashboardMenu from "./DashboardMenu";
import Image from "next/image";
const DesktopNav = ({ user, role, onLogout }) => {
    const pathname = usePathname();
    const navLinks = [
        {
            title: "Home",
            href: "/",
        },
        {
            title: "Browse Lawyers",
            href: "/browse-lawyers",
        },
    ];

    return (
        <div className="hidden lg:flex items-center justify-between w-full">
            {/* Left */}
            <div className="flex items-center gap-12">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg transition duration-300 group-hover:scale-110">
                        <FaBalanceScale />

                        
                    </div>

                    <div>
                        <h2 className="text-2xl font-extrabold text-slate-800">
                            LexLaw
                        </h2>
                        <p className="text-xs text-slate-500">Legal Services</p>
                    </div>
                </Link>

                {/* Navigation */}
                <div className="flex items-center gap-8">
                    {navLinks.map((item) => {
                        const active =
                            pathname === item.href ||
                            (item.href !== "/" &&
                                pathname.startsWith(item.href));

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`relative font-medium transition duration-300 ${
                                    active
                                        ? "text-blue-600"
                                        : "text-gray-700 hover:text-blue-600"
                                }`}
                            >
                                {item.title}

                                {active && (
                                    <span className="absolute -bottom-2 left-0 h-[3px] w-full rounded-full bg-blue-600"></span>
                                )}
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* Center */}
            <div className="flex-1 flex justify-center px-10">
                <SearchBar />
            </div>

            {/* Right */}
            <div className="flex items-center gap-4">
                {user ? (
                    <>
                        <DashboardMenu role={role} onLogout={onLogout} />

                        <Image
                            width={100}
                            height={100}
                            src={
                                user?.photoURL ||
                                "https://i.pravatar.cc/150?img=12"
                            }
                            alt="Profile"
                            className="h-11 w-11 rounded-full border-2 border-blue-500 object-cover"
                        />
                    </>
                ) : (
                    <>
                        <Link
                            href="/login"
                            className="rounded-full border border-blue-600 px-5 py-2 font-medium text-blue-600 transition hover:bg-blue-50"
                        >
                            Login
                        </Link>

                        <Link
                            href="/register"
                            className="rounded-full bg-blue-600 px-5 py-2 font-medium text-white transition hover:bg-blue-700"
                        >
                            Register
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default DesktopNav;
