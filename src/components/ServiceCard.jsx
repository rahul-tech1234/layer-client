"use client";

import { Button, Chip } from "@heroui/react";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ServiceCard({ services }) {
    const router = useRouter();

    const catagories = [
        "Criminal Law",
        "Family Law",
        "Property Law",
        "Immigration Law",
        "Civil Law",
        "Cyber Law",
        "Tax Law",
    ];
    const [category, setCategory] = useState("");

    const handleCategoryFilter = () => {
        const params = new URLSearchParams();
        if (category) {
            params.set("category", category);
        }
        router.push(`/browse-lawyers?${params.toString()}`);
    };
    const handleResetFilter = () => {
        setCategory("");
        router.push(`/browse-lawyers`);
    };
    return (
        <>
            <div className=" ">
                <div className="my-5 flex items-center justify-center gap-1">
                    {" "}
                    <select
                        name="category"
                        id="category"
                        onClick={handleCategoryFilter}
                        required
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className=" bg-[#2A2A2A] border border-gray-700 rounded-lg px-4 py-3 text-white"
                    >
                        <option>Select category</option>
                        {catagories.map((cat) => (
                            <option key={cat} value={cat}>
                                {cat}
                            </option>
                        ))}
                    </select>
                    <Button
                        onClick={handleResetFilter}
                        className="rounded-md py-5"
                    >
                        All Service
                    </Button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-11/12 mx-auto ">
                {" "}
                {services.map((service) => {
                    return (
                        <Link
                            href={`/browse-lawyers/${service?._id}`}
                            key={service?._id}
                        >
                            <div className="group relative overflow-hidden rounded-3xl border border-yellow-500/20 bg-zinc-900 p-8 transition-all duration-500 hover:-translate-y-3 hover:border-yellow-500 hover:shadow-[0_20px_60px_rgba(234,179,8,0.25)]">
                                {/* Background Glow */}

                                <div className="flex justify-start gap-4 items-center ">
                                    <div className="relative">
                                        <Image
                                            src={service?.banner}
                                            alt={"profile"}
                                            width={90}
                                            height={90}
                                            className="h-20 w-20 rounded-full border-4 border-yellow-500 object-cover"
                                        />
                                    </div>
                                    {/* Title */}
                                    <div className="">
                                        <h3 className=" text-xl font-bold text-white ">
                                            {service.title}
                                        </h3>

                                        {/* Description */}
                                        <p className=" leading-7 text-zinc-400">
                                            {service.category}
                                        </p>
                                        {/* fee */}
                                        <p className=" leading-7 text-lg font-bold text-gray-400">
                                            ${service.conFee || 30}/hr
                                        </p>
                                    </div>
                                    <Chip
                                        className={`absolute top-2 right-2 ${service?.status == "busy" ? "text-red-400" : "text-green-500"}`}
                                    >
                                        {service?.status === "active"
                                            ? "Active"
                                            : "Busy"}
                                    </Chip>
                                </div>

                                {/* Hover Border */}
                                <div className="absolute bottom-0 left-0 h-1 w-0 bg-yellow-500 transition-all duration-500 group-hover:w-full" />
                            </div>
                        </Link>
                    );
                })}
            </div>
        </>
    );
}

//    <div className="flex flex-wrap items-center gap-3 mt-6">
{
    /* Consultation Fee */
}
//     <div className="flex items-center gap-2 rounded-full border border-default bg-default-100 px-4 py-2 transition-all duration-300 hover:scale-105">
//         <span className="text-sm text-default-500">
//             Consultation
//         </span>
//         <span className="font-bold text-primary">
//             ${service?.conFee || 300}
//         </span>
//     </div>

//     {/* Learn More */}
//     <Button
//         variant="bordered"
//         radius="full"
//         className="rounded-full border border-default px-6 font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
//     >
//         <Link
//             href={`/browse-lawyers/${service?._id}`}
//         >
//             {" "}
//             Learn More
//         </Link>
//     </Button>

//     {/* Hire */}
//     <Button
//         color="primary"
//         radius="full"
//         className="px-8 font-semibold transition-all duration-300 hover:-translate-y-1 hover:scale-105"
//     >
//         Hire Now
//     </Button>
// </div>
