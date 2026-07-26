"use client";
import { addCmt } from "@/lib/api/client/action";
import { getCmt } from "@/lib/api/client/data";
import { hireingStatus } from "@/lib/api/lawyer/action";
import { useSession } from "@/lib/auth-client";
import { Avatar, Button, Card, Chip } from "@heroui/react";
import { motion } from "framer-motion";
import { useState } from "react";

import {
    FaArrowRight,
    FaCalendarAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaShieldAlt,
    FaUserTie,
} from "react-icons/fa";

export default function ServiceDetails({ service, user, cmt }) {
    //console.log("service", service);
    const id = service?._id;
    const { data: session } = useSession();
    const email = session?.user?.email;
    const role = session?.user?.role;

    const [hire, setHire] = useState(false);

    const handleClintBook = async () => {
        const paymentData = {
            type: "hire",
            //client
            clientEmail: user?.email,
            clientName: user?.name,
            clientId: user?.id,
            //lawyer
            serviceId: service?._id,
            serviceEmail: service?.lawyerEmail,
            //service
            serviceTitle: service.title,
            category: service.category,

            // Payment
            consultationFee: service.conFee,
        };
        const res = await hireingStatus(paymentData);
        return setHire(true);
        console.log(res);
    };

    const handleCmt = async (e) => {
        e.preventDefault();
        const cmt = e.target.cmt.value;
        const data = {
            cmt,
            clientEmail: email,
        };
        const res = await addCmt(id, data);
        console.log(res, "res");
    };
    return (
        <section className="max-w-7xl mx-auto px-5 py-10">
            {/* Hero */}
            <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative overflow-hidden rounded-[30px]"
            >
                <img
                    src={service.banner}
                    alt={service.serviceName}
                    className="h-[380px] w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />

                <div className="absolute bottom-10 left-10 max-w-xl text-white">
                    <Chip color="primary" variant="solid">
                        {service.category}
                    </Chip>

                    <h1 className="mt-5 text-4xl md:text-5xl font-bold leading-tight">
                        {service.serviceName}
                    </h1>

                    <p className="mt-3 text-white/80 text-lg">
                        {service.title}
                    </p>
                </div>
            </motion.div>

            {/* Main */}
            <div className="grid gap-8 lg:grid-cols-3 mt-10">
                {/* Left */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="lg:col-span-2 space-y-6"
                >
                    <Card className="rounded-[28px] border border-default-200">
                        <div className="p-8">
                            <h2 className="text-2xl font-bold mb-8">
                                Service Information
                            </h2>

                            <div className="grid sm:grid-cols-2 gap-5">
                                <InfoBox
                                    icon={<FaShieldAlt />}
                                    title="Category"
                                    value={service.category}
                                />

                                <InfoBox
                                    icon={<FaCalendarAlt />}
                                    title="Added Date"
                                    value={service.addDate}
                                />

                                <InfoBox
                                    icon={<FaMapMarkerAlt />}
                                    title="Location"
                                    value={service.location}
                                />

                                <div className="rounded-2xl border border-success-300 bg-success-50 p-5">
                                    <p className="text-sm text-default-500">
                                        Status
                                    </p>

                                    <Chip
                                        color={
                                            service?.status === "active"
                                                ? " success"
                                                : "danger"
                                        }
                                        className="mt-3"
                                    >
                                        {service.status == "active"
                                            ? "🟢Active"
                                            : "🔴 Busy"}
                                    </Chip>
                                </div>
                            </div>

                            <div className="my-8 h-px bg-default-200" />

                            <div className="flex justify-between items-center ">
                                <h3 className="text-xl font-semibold">
                                    About this Service
                                </h3>
                                {user?.role === "client" && !hire && (
                                    <Button
                                        className="rounded-sm"
                                        onClick={handleClintBook}
                                    >
                                        Hire
                                    </Button>
                                )}

                                {/* <div className="rounded-3xl border border-default-200 bg-content1 p-6 shadow-md">
                                    <h2 className="text-2xl font-bold text-foreground">
                                        Leave a Comment
                                    </h2>

                                    <p className="mt-2 mb-5 text-default-500">
                                        Share your experience with this lawyer.
                                    </p>

                                    <textarea
                                        rows={6}
                                        placeholder="Write your comment here..."
                                        className="w-full rounded-2xl border border-default-200 bg-transparent p-4 text-foreground outline-none transition-all duration-300 placeholder:text-default-400 focus:border-primary"
                                    />

                                    <div className="mt-5 flex justify-end">
                                        <button className="rounded-full bg-primary px-6 py-2 font-medium text-white transition hover:opacity-90">
                                            Submit Comment
                                        </button>
                                    </div>
                                </div> */}
                            </div>

                            <p className="mt-4 leading-8 text-default-600">
                                {service?.des ||
                                    `Cyber Security Legal Service provides legal
                                assistance related to cyber crime
                                investigations, online fraud, digital evidence,
                                cyber security compliance, privacy, and
                                technology law. Our lawyers work closely with
                                individuals, startups, and businesses to resolve
                                cyber-related legal issues professionally and
                                confidentially.`}
                            </p>
                        </div>
                    </Card>
                </motion.div>

                {/* Right */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    {role === "client" && (
                        <>
                            {" "}
                            <Card className="sticky top-24 rounded-[28px] border border-default-200">
                                <div className="rounded-3xl border border-default-200 bg-content1 p-6 shadow-md">
                                    <h2 className="text-2xl font-bold text-foreground">
                                        Leave a Comment
                                    </h2>

                                    <p className="mt-2 mb-5 text-default-500">
                                        Share your experience with this lawyer.
                                    </p>
                                    <form action="" onSubmit={handleCmt}>
                                        <div>
                                            <textarea
                                                name="cmt"
                                                rows={6}
                                                placeholder="Write your comment here..."
                                                className="w-full rounded-2xl border border-default-200 bg-transparent p-4 text-foreground outline-none transition-all duration-300 placeholder:text-default-400 focus:border-primary"
                                            />

                                            <div className="mt-5 flex justify-end">
                                                <button
                                                    type="submit"
                                                    className="rounded-full bg-primary px-6 py-2 font-medium text-white transition hover:opacity-90"
                                                >
                                                    Submit Comment
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </Card>
                            <Card>
                                <h2>Your Comment</h2>
                                <p className="text-muted">{cmt?.cmt}</p>
                            </Card>
                        </>
                    )}
                </motion.div>
            </div>
        </section>
    );
}

function InfoBox({ icon, title, value }) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="rounded-2xl border border-default-200 p-5 transition-all hover:border-primary hover:shadow-md"
        >
            <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-xl text-primary">
                    {icon}
                </div>

                <div>
                    <p className="text-sm text-default-500">{title}</p>

                    <h4 className="font-semibold">{value}</h4>
                </div>
            </div>
        </motion.div>
    );
}
