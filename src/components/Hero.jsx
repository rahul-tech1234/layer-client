"use client";
import {
    Scale,
    ShieldCheck,
    Gavel,
    Briefcase,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
    {
        title: "Trusted Legal Solutions",
        subtitle:
            "Experienced attorneys committed to protecting your rights and securing the best outcome.",
        image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1800&q=80",
        icon: <Scale size={40} />,
    },
    {
        title: "Justice With Integrity",
        subtitle:
            "Professional legal representation for individuals, families, and businesses.",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1800&q=80",
        icon: <ShieldCheck size={40} />,
    },
    {
        title: "Experienced Court Representation",
        subtitle:
            "Dedicated advocates helping clients navigate complex legal challenges with confidence.",
        image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1800&q=80",
        icon: <Gavel size={40} />,
    },
];

export default function Hero() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 6000);

        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrent((current + 1) % slides.length);

    const prevSlide = () =>
        setCurrent((current - 1 + slides.length) % slides.length);

    return (
        <section className="relative min-h-screen overflow-hidden">
            {/* Background Slides */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ${
                        current === index
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-110"
                    }`}
                >
                    <Image
                        width={500}
                        height={500}
                        src={slide.image}
                        alt={slide.title}
                        className="h-full w-full object-cover"
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40"></div>
                </div>
            ))}

            {/* Decorative Blur */}
            <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-yellow-500/20 blur-[150px]"></div>
            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-amber-400/10 blur-[150px]"></div>

            {/* Content */}
            <div className="relative z-20 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-10">
                <div className="max-w-3xl text-white">
                    <div className="inline-flex items-center gap-3 rounded-full border border-yellow-400/40 bg-white/10 px-5 py-2 backdrop-blur-md mt-3">
                        <div className="text-yellow-400 ">
                            {slides[current].icon}
                        </div>
                        <span className="font-medium tracking-wide">
                            Trusted Legal Excellence
                        </span>
                    </div>

                    <h1 className="mt-8 text-5xl font-black leading-tight md:text-7xl">
                        {slides[current].title}
                    </h1>

                    <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-200 md:text-xl">
                        {slides[current].subtitle}
                    </p>

                    {/* Features */}
                    <div className="mt-10 flex flex-wrap gap-5">
                        <div className="flex items-center gap-3 rounded-xl bg-white/10 px-5 py-3 backdrop-blur-md">
                            <Scale className="text-yellow-400" />
                            <span>Expert Lawyers</span>
                        </div>

                        <div className="flex items-center gap-3 rounded-xl bg-white/10 px-5 py-3 backdrop-blur-md">
                            <ShieldCheck className="text-yellow-400" />
                            <span>100% Confidential</span>
                        </div>

                        <div className="flex items-center gap-3 rounded-xl bg-white/10 px-5 py-3 backdrop-blur-md">
                            <Briefcase className="text-yellow-400" />
                            <span>Business Law</span>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="mt-12 flex flex-wrap gap-5  items-center justify-start mb-4">
                        <button className="rounded-xl bg-yellow-500 px-8 py-4 text-lg font-bold text-black transition hover:scale-105 hover:bg-yellow-400">
                            Free Consultation
                        </button>

                        <Link href={'/browse-lawyers'} className="rounded-xl border border-white/40 bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur-md transition hover:bg-white hover:text-black">
                            Our Services
                        </Link>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <button
                onClick={prevSlide}
                className="absolute left-6 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white/15 p-4 text-white backdrop-blur-md transition hover:bg-yellow-500 hover:text-black"
            >
                <ChevronLeft />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-6 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white/15 p-4 text-white backdrop-blur-md transition hover:bg-yellow-500 hover:text-black"
            >
                <ChevronRight />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-10 left-1/2 z-30 flex -translate-x-1/2 gap-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`h-3 rounded-full transition-all ${
                            current === index
                                ? "w-12 bg-yellow-400"
                                : "w-3 bg-white/60"
                        }`}
                    />
                ))}
            </div>

            {/* Bottom Stats */}
            {/* <div className="absolute bottom-0 z-20 w-full bg-black/50 backdrop-blur-xl">
                <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-8 text-white md:grid-cols-4">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-yellow-400">
                            15+
                        </h2>
                        <p className="text-gray-300">Years Experience</p>
                    </div>

                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-yellow-400">
                            500+
                        </h2>
                        <p className="text-gray-300">Cases Won</p>
                    </div>

                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-yellow-400">
                            98%
                        </h2>
                        <p className="text-gray-300">Success Rate</p>
                    </div>

                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-yellow-400">
                            24/7
                        </h2>
                        <p className="text-gray-300">Legal Support</p>
                    </div>
                </div>
            </div> */}
        </section>
    );
}
