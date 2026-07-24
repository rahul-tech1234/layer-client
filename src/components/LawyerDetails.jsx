"use client";
import { hireingStatus } from "@/lib/api/lawyer/action";
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

export default function ServiceDetails({ service, user }) {
    // console.log("service", service);

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
        console.log(res);
       
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
                                {user?.role == "client" && (
                                    <Button
                                        onClick={handleClintBook}
                                        className="rounded-sm w-20"
                                        isDisabled={service?.status != "active"}
                                    >
                                        Hire
                                    </Button>
                                )}
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
                    <Card className="sticky top-24 rounded-[28px] border border-default-200">
                        <div className="p-8 text-center">
                            <Avatar
                                size="lg"
                                src={user?.image}
                                name="OH"
                                className="mx-auto bg-primary text-white"
                            />

                            <h2 className="mt-5 text-2xl font-bold">
                                {service?.title}
                            </h2>

                            <p className="text-default-500">
                                {service.category}
                            </p>

                            <div className="my-6 h-px bg-default-200" />

                            <div className="space-y-5">
                                <div className="flex items-center gap-3">
                                    <FaUserTie className="text-primary" />

                                    <span>10+ Years Experience</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <FaEnvelope className="text-primary" />

                                    <span className="break-all">
                                        {service.lawyerEmail}
                                    </span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <FaMapMarkerAlt className="text-primary" />

                                    <span>{service.location}</span>
                                </div>
                            </div>

                            <Button
                                color="primary"
                                onClick={handleClintBook}
                                radius="full"
                                className="mt-8 w-full font-semibold"
                                endContent={<FaArrowRight />}
                            >
                                Contact Lawyer
                            </Button>
                        </div>
                    </Card>
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
