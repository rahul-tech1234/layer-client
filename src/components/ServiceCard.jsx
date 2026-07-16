"use client";

import { Button } from "@heroui/react";
import { ArrowRight } from "lucide-react";
import { Scale, Briefcase, Building, Home, ShieldCheck } from "lucide-react";
import { UserStar } from "lucide-react";


export default function ServiceCard({ service }) {
    const services = [
        {
            id: 1,
            title: "Criminal Law",
            description:
                "Strong legal defense for criminal investigations and court proceedings.",
            icon: ShieldCheck,
        },
        {
            id: 2,
            title: "Family Law",
            description:
                "Expert legal guidance for divorce, child custody, and family matters.",
            icon: UserStar,
        },
        {
            id: 3,
            title: "Corporate Law",
            description:
                "Business legal solutions for startups, contracts, and compliance.",
            icon: Building,
        },
        {
            id: 4,
            title: "Property Law",
            description:
                "Legal assistance for property disputes, ownership, and real estate.",
            icon: Home,
        },
        {
            id: 5,
            title: "Civil Litigation",
            description:
                "Professional representation in civil disputes and legal claims.",
            icon: Scale,
        },
        {
            id: 6,
            title: "Business Consultation",
            description:
                "Trusted legal advice to protect and grow your business.",
            icon: Briefcase,
        },
    ];
   

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-11/12 mx-auto lg:grid-cols-4">
            {" "}
            {services.map((service) => {
                 const Icon = service?.icon;
                return (
                    <div key={service.id} className="group relative overflow-hidden rounded-3xl border border-yellow-500/20 bg-zinc-900 p-8 transition-all duration-500 hover:-translate-y-3 hover:border-yellow-500 hover:shadow-[0_20px_60px_rgba(234,179,8,0.25)]">
                        {/* Background Glow */}
                        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-yellow-500/10 blur-3xl transition group-hover:bg-yellow-500/20" />

                        {/* Icon */}
                        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500 text-black transition duration-500 group-hover:rotate-6 group-hover:scale-110">
                            <Icon size={30} />
                        </div>

                        {/* Title */}
                        <h3 className="mb-4 text-2xl font-bold text-white">
                            {service.title}
                        </h3>

                        {/* Description */}
                        <p className="mb-8 leading-7 text-zinc-400">
                            {service.description}
                        </p>

                        <Button
                            color="warning"
                            radius="full"
                            endContent={<ArrowRight size={18} />}
                        >
                            Learn More
                        </Button>

                        {/* Hover Border */}
                        <div className="absolute bottom-0 left-0 h-1 w-0 bg-yellow-500 transition-all duration-500 group-hover:w-full" />
                    </div>
                );
            })}
        </div>
    );
     
}



