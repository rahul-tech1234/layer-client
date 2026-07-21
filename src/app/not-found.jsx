"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaHome, FaArrowLeft, FaBalanceScale } from "react-icons/fa";


export default function NotFound() {
   
    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-4 py-8 sm:px-6">
            {/* Background Glow */}
            <div className="absolute top-0 left-0 h-40 w-40 rounded-full bg-indigo-600/20 blur-3xl sm:h-72 sm:w-72" />
            <div className="absolute right-0 bottom-0 h-40 w-40 rounded-full bg-purple-600/20 blur-3xl sm:h-72 sm:w-72" />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-lg sm:max-w-xl sm:rounded-3xl sm:p-10"
            >
                {/* Icon */}
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-600 sm:h-20 sm:w-20"
                >
                    <FaBalanceScale className="text-2xl text-white sm:text-3xl" />
                </motion.div>

                {/* 404 */}
                <h1 className="text-5xl font-extrabold text-white sm:text-7xl">
                    404
                </h1>

                <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                    Oops! Page Not Found
                </h2>

                <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-slate-300 sm:text-base">
                    The page you&#39;re looking for doesn&#39;t exist or has
                    been moved.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                    <Link href="/" className="w-full sm:w-auto">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-white transition hover:bg-indigo-700"
                        >
                            <FaHome />
                            Home
                        </motion.button>
                    </Link>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => window.history.back()}
                        className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-700 px-6 py-3 text-white transition hover:bg-slate-800 sm:w-auto"
                    >
                        <FaArrowLeft />
                        Go Back
                    </motion.button>
                </div>
            </motion.div>
        </div>
    );
}
