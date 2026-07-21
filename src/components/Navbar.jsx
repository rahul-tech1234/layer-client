"use client";
import { useEffect, useRef, useState } from "react";
import { Avatar, Button, Link } from "@heroui/react";
import { usePathname } from "next/navigation";
import SearchBar from "./SearchBar";
import { TiThMenu } from "react-icons/ti";
import { ArrowRightFromSquare, ScalesBalanced } from "@gravity-ui/icons";
import { authClient, useSession } from "@/lib/auth-client";
import Logo from "./Logo";
import ThemeSwitch from "./ThemeSwitch";

export function Navbar() {
    const { data: session } = useSession();
    const user = session?.user;
    const pathName = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openDashboard, setOpenDashboard] = useState();
    const dropdownRef = useRef(null);
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
    // useEffect(() => {
    //     const handleClickOutside = (event) => {
    //         if (
    //             dropdownRef.current &&
    //             !dropdownRef.current.contains(event.target)
    //         ) {
    //             setOpen(false);
    //         }
    //     };

    //     document.addEventListener("mousedown", handleClickOutside);

    //     return () => {
    //         document.removeEventListener("mousedown", handleClickOutside);
    //     };
    // }, []);

    const links = (
        <>
            {navLinks.map((navLink) => {
                const isActive = pathName == navLink.href;

                return (
                    <Link
                        key={navLink.href}
                        href={navLink.href}
                        className={`inline-block w-full font-normal  text-sm ${
                            isActive ? "text-blue-600" : "text-gray-700 "
                        }`}
                    >
                        {navLink.title}
                    </Link>
                );
            })}
        </>
    );
    const handleLogOut = async () => {
        await authClient.signOut();
    };

    return (
        <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
            <header className="">
                <div className="flex h-16 items-center justify-between px-6">
                    {/* ===== LEFT ===== */}
                    <div className="flex items-center justify-between gap-5">
                        {/* only sm */}
                        <div className="relative">
                            <TiThMenu
                                className="inline-block md:hidden size-5"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            />
                            <span
                                className={`p-2 absolute left-0 top-full w-30 bg-white  shadow-lg transition-all duration-300 ease-out ${
                                    isMenuOpen
                                        ? "translate-y-5 opacity-100 visible"
                                        : "-translate-y-5 opacity-0 invisible"
                                }`}
                            >
                                {links}
                            </span>
                        </div>
                        <Link href="/">
                            <Logo />
                        </Link>
                        {/* md lg device */}
                        <div className="hidden md:flex justyfy-between w-50 items-center">
                            {links}
                        </div>
                    </div>
                    {/* ===== CENTER ===== */}
                    <div>
                        <SearchBar />
                    </div>
                    {/* ===== RIGHT ===== */}
                    <div className="flex justify-between items-center gap-4">
                        <ThemeSwitch />
                        {!user ? (
                            <>
                                {/* if not logged */}
                                <Button className="rounded-sm">
                                    <Link href="/login">Log In</Link>
                                </Button>
                                {/* if logged in */}
                            </>
                        ) : (
                            <div className="relative">
                                <Avatar
                                    className="cursor-pointer border-2 border-purple-500"
                                    onClick={() =>
                                        setOpenDashboard((prev) => !prev)
                                    }
                                >
                                    <Avatar.Image
                                        alt={user?.name || "User"}
                                        src={
                                            user?.image ||
                                            "https://img.heroui.chat/image/avatar?w=400&h=400&u=3"
                                        }
                                    />
                                    <Avatar.Fallback>
                                        {user?.name?.charAt(0).toUpperCase()}
                                    </Avatar.Fallback>
                                </Avatar>

                                <div
                                    className={`absolute right-0 top-14 w-52 rounded-xl bg-white shadow-lg border p-2 transition-all duration-300 ${
                                        openDashboard
                                            ? "opacity-100 scale-100 visible"
                                            : "opacity-0 scale-95 invisible"
                                    }`}
                                >
                                    <Link
                                        href={`/dashboard/${user?.role}/add-service`}
                                        className="block w-full rounded-md px-3 py-2 hover:bg-purple-100 transition text-gray-500"
                                    >
                                        Dashboard
                                    </Link>

                                    <button
                                        className="mt-2 w-full rounded-md px-3 py-2 text-left text-red-500 hover:bg-red-100 transition flex items-center gap-2"
                                        onClick={handleLogOut}
                                    >
                                        <ArrowRightFromSquare className="inline-block" />{" "}
                                        Log Out
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </header>
        </nav>
    );
}
