"use client";

import Image from "next/image";
import { Button } from "@heroui/react";

import { Star, Briefcase, ArrowRight, BadgeCheck } from "lucide-react";

export default function TopLegalExperts() {
    const lawyers = [
        {
            id: 1,
            name: "John Anderson",
            specialization: "Corporate Lawyer",
            image: "https://i.pravatar.cc/300?img=11",
            experience: "15+ Years",
            hires: 245,
            rating: 4.9,
        },
        {
            id: 2,
            name: "Emily Carter",
            specialization: "Family Lawyer",
            image: "https://i.pravatar.cc/300?img=32",
            experience: "12+ Years",
            hires: 198,
            rating: 4.8,
        },
        {
            id: 3,
            name: "Michael Brown",
            specialization: "Criminal Lawyer",
            image: "https://i.pravatar.cc/300?img=68",
            experience: "18+ Years",
            hires: 310,
            rating: 5.0,
        },
    ];

    return (
        <>
            <section className="bg-gradient-to-b from-black via-zinc-950 to-black py-24">
                <div className="mx-auto max-w-7xl px-6">
                    {/* Heading */}

                    <div className="mx-auto mb-16 max-w-3xl text-center">
                        <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-sm font-semibold text-yellow-400">
                            Top Legal Experts
                        </span>

                        <h2 className="mt-6 text-5xl font-bold text-white">
                            Meet Our Most Trusted Lawyers
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-zinc-400">
                            Our top-performing legal professionals are trusted
                            by hundreds of clients and recognized for delivering
                            exceptional legal services.
                        </p>
                    </div>

                    {/* Cards */}

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {lawyers.map((lawyer) => (
                            <div
                                key={lawyer.id}
                                className=" rounded-3xl border border-zinc-800 bg-zinc-900 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-500 hover:shadow-[0_15px_40px_rgba(234,179,8,0.2)]"
                            >
                                <div className="group flex flex-col md:flex-row items-center justify-between gap-6">
                                    {/* Left */}
                                    <div className="">
                                        {/* Avatar */}
                                        <div className="relative">
                                            <Image
                                                src={lawyer.image}
                                                alt={lawyer.name}
                                                width={90}
                                                height={90}
                                                className="h-20 w-20 rounded-full border-4 border-yellow-500 object-cover"
                                            />

                                            <div className="absolute -bottom-1 -right-1 rounded-full bg-green-500 p-1.5 border-2 border-zinc-900" />
                                        </div>

                                        {/* Info */}
                                        <div>
                                            <div className="flex items-center gap-2"></div>
                                        </div>
                                    </div>

                                    {/* Right */}

                                    <div>
                                        <div className="flex justify-end items-center gap-3">
                                            <h3 className="text-[20px] font-bold text-white">
                                                {lawyer.name}
                                            </h3>
                                            <BadgeCheck
                                                size={18}
                                                className="text-yellow-500"
                                            />
                                        </div>
                                        <p className="mt-1 text-yellow-400 font-medium flex justify-end">
                                            {lawyer.specialization}
                                        </p>
                                    </div>
                                    {/* <Button
                                    color="warning"
                                    radius="full"
                                    className="min-w-[180px] font-semibold text-black"
                                    endContent={<ArrowRight size={18} />}
                                >
                                    View Profile
                                </Button> */}
                                </div>
                                <div className="mt-4 flex  items-center gap-5 text-sm text-zinc-400">
                                    <div className="flex items-center gap-1">
                                        <Star
                                            size={16}
                                            className="fill-yellow-500 text-yellow-500"
                                        />
                                        <span>{lawyer.rating}</span>
                                    </div>

                                    <div className="flex items-center gap-1">
                                        <Briefcase
                                            size={16}
                                            className="text-yellow-500"
                                        />
                                        <span>{lawyer.hires} Cases</span>
                                    </div>

                                    <div className="flex items-center gap-1">
                                        <BadgeCheck
                                            size={16}
                                            className="text-yellow-500"
                                        />
                                        <span>{lawyer.experience}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
