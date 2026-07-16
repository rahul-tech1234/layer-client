"use client";
import { useState } from "react";
import { Avatar, Button, Link } from "@heroui/react";
import { usePathname } from "next/navigation";
import SearchBar from "./SearchBar";
import { TiThMenu } from "react-icons/ti";

export function MobileNav() {
    const pathName = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    //    useEffect(() => {
    //         const handleClickOutside = (event) => {
    //             if (
    //                 dropdownRef.current &&
    //                 !dropdownRef.current.contains(event.target)
    //             ) {
    //                 setOpen(false);
    //             }
    //         };

    //         document.addEventListener("mousedown", handleClickOutside);

    //         return () => {
    //             document.removeEventListener("mousedown", handleClickOutside);
    //         };
    //     }, []);

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
    const user = {
        id: "usr_001",
        name: "Rahul Das",
        email: "rahul@example.com",
        photoURL: "https://i.pravatar.cc/150?img=12",
        role: "lawyer", // "lawyer" | "client"
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
                            <h1 className="text-2xl font-bold">Logo</h1>
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
                    <div>
                        {!user ? (
                            <>
                                {/* if not logged */}
                                <Button className="rounded-sm">Log In</Button>
                                {/* if logged in */}
                            </>
                        ) : (
                            <>
                                <Avatar className="border-2 border-purple-500">
                                    <Avatar.Image
                                        alt={user?.name || "Jhon Doe"}
                                        src={
                                            user?.photoURL ||
                                            "https://img.heroui.chat/image/avatar?w=400&h=400&u=3"
                                        }
                                    />
                                    <Avatar.Fallback>
                                        {user?.name
                                            ?.charAt(2)
                                            .toLocaleUpperCase()}
                                    </Avatar.Fallback>
                                </Avatar>
                            </>
                        )}
                    </div>
                </div>
            </header>
        </nav>
    );
}
