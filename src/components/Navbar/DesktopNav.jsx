"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBalanceScale } from "react-icons/fa";

import SearchBar from "./SearchBar";
import DashboardMenu from "./DashboardMenu";
import Image from "next/image";
import { useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { MdDashboard } from "react-icons/md";

const DesktopNav = () => {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);
    const mockUser = {
        id: "usr_001",
        name: "Rahul Das",
        email: "rahul@example.com",
        photoURL: "https://i.pravatar.cc/150?img=12",
        role: "lawyer", // "lawyer" | "client"
    };
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
    const lawyerDashboardLinks = [
        {
            title: "My Profile",
            href: "/dashboard/lawyer/profile",
        },
        {
            title: "Manage Legal Profile",
            href: "/dashboard/lawyer/manage-legal-profile",
        },
        {
            title: "Appointments",
            href: "/dashboard/lawyer/appointments",
        },
    ];
    const clientDashboardLinks = [
        {
            title: "My Profile",
            href: "/dashboard/client/profile",
        },
        {
            title: "My Bookings",
            href: "/dashboard/client/bookings",
        },
        {
            title: "Favorites",
            href: "/dashboard/client/favorites",
        },
    ];
    const dashboardLinks =
        mockUser?.role === "lawyer"
            ? lawyerDashboardLinks
            : clientDashboardLinks;
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className=" lg:flex items-center justify-between w-full">
            {/* ================    = Left ================= */}
            <div className="flex items-center gap-12">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white transition duration-300 group-hover:rotate-6 group-hover:bg-blue-700">
                        <FaBalanceScale className="text-xl" />
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-slate-800">
                            LexLaw
                        </h2>

                        <p className="text-xs text-slate-500">
                            Find Trusted Lawyers
                        </p>
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
                                        : "text-slate-700 hover:text-blue-600"
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

            {/* ================= Center ================= */}
            <SearchBar />

            {/* ================= Right ================= */}
            <div className="flex items-center gap-4">
                {mockUser ? (
                    <>
                        {/* <DashboardMenu role={role} onLogout={onLogout} /> */}

                        <Image
                            src={
                                mockUser?.photoURL ||
                                "https://i.pravatar.cc/150?img=12"
                            }
                            alt="user"
                            className="h-11 w-11 rounded-full border-2 border-blue-500 object-cover"
                        />

                        {/* button */}
                        <div className="relative">
                            <button
                                onClick={() => setOpen(!open)}
                                className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm transition hover:border-blue-500 hover:text-blue-600"
                            >
                                <MdDashboard className="text-lg" />
                                Dashboard
                                <FiChevronDown
                                    className={`transition-transform duration-300 ${
                                        open ? "rotate-180" : ""
                                    }`}
                                />
                            </button>
                            {/* dropdown */}
                            <div>navLinks</div>
                        </div>
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
