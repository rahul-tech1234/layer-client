"use client";
import Link from "next/link";
import { Button } from "@heroui/react";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { LogoFacebook, LogoLinkedin, ArrowRight } from "@gravity-ui/icons";
import { FiMail } from "react-icons/fi";
import Logo from "./Logo";
Logo;

export default function Footer() {
    const quickLinks = [
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
        { name: "Privacy Policy", href: "/privacy-policy" },
    ];

    const socials = [
        {
            icon: LogoFacebook,
            href: "#",
            name: "Facebook",
        },
        {
            icon: FaTwitter,
            href: "#",
            name: "Twitter",
        },
        {
            icon: LogoLinkedin,
            href: "#",
            name: "LinkedIn",
        },
        {
            icon: FaInstagram,
            href: "#",
            name: "Instagram",
        },
    ];

    return (
        <footer className="relative overflow-hidden border-t border-amber-500/20 bg-zinc-950 text-white">
            {/* Background Glow */}
            <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />
            <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-6 py-16">
                {/* Top Section */}
                <div className="grid gap-12 lg:grid-cols-3">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-3">
                            <div className="rounded-xl bg-amber-500 p-3">
                                <Logo />
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold tracking-wide">
                                    JusticeLaw
                                </h2>
                                <p className="text-sm text-zinc-400">
                                    Trusted Legal Services
                                </p>
                            </div>
                        </div>

                        <p className="mt-6 leading-7 text-zinc-400">
                            Protecting your rights with integrity,
                            professionalism, and years of legal excellence. We
                            provide trusted legal solutions for individuals and
                            businesses.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-6 text-lg font-semibold text-amber-400">
                            Quick Links
                        </h3>

                        <div className="space-y-4">
                            {quickLinks.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="group flex items-center gap-2 text-zinc-300 transition hover:text-amber-400"
                                >
                                    <ArrowRight
                                        size={16}
                                        className="transition group-hover:translate-x-1"
                                    />
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold text-amber-400">
                            Newsletter
                        </h3>

                        <p className="mb-5 text-zinc-400">
                            Subscribe to receive legal news and updates.
                            (Frontend Placeholder)
                        </p>

                        <div className="space-y-3">
                            <div className="relative w-full max-w-md">
                                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />

                                <form action="">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="w-full rounded-xl border border-zinc-700 bg-zinc-900 py-3 pl-12 pr-4 text-white placeholder:text-gray-400 outline-none transition-all duration-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                                    />
                                </form>
                            </div>
                            <Button
                                color="warning"
                                radius="lg"
                                className="w-full font-semibold text-black"
                            >
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="my-10 border-t border-zinc-800" />

                {/* Bottom */}
                <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                    {/* Copyright */}
                    <p className="text-sm text-zinc-500">
                        © {new Date().getFullYear()} JusticeLaw. All Rights
                        Reserved.
                    </p>

                    {/* Social Icons */}
                    <div className="flex items-center gap-4">
                        {socials.map((social) => {
                            const Icon = social.icon;

                            return (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-full border border-zinc-700 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-amber-500 hover:bg-amber-500 hover:text-black"
                                >
                                    <Icon size={18} />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </footer>
    );
}
