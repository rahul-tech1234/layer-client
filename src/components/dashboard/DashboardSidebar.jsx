"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";

import {
    FaBalanceScale,
    FaHome,
    FaUserTie,
    FaCalendarAlt,
    FaFolderOpen,
    FaStar,
    FaCog,
    FaSignOutAlt,
    FaBars,
} from "react-icons/fa";

import { authClient, useSession } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { FaArrowLeftLong } from "react-icons/fa6";
import Image from "next/image";

export default function DashboardSidebar() {
    const handleLogOut = async () => {
        await authClient.signOut();
    };
    const { data: session } = useSession();
    const user = session?.user;
    const LawyerMenus = [
        {
            name: "Dashboard",
            icon: FaHome,
            href: "/dashboard/lawyer",
        },
        {
            name: "My Profile",
            icon: FaUserTie,
            href: "/dashboard/lawyer/profile",
        },

        {
            name: "Hiring History ",
            icon: FaCalendarAlt,
            href: "/dashboard/lawyer/hiring-history ",
        },
        {
            name: "Manage-Legal-Profile",
            icon: FaStar,
            href: "/dashboard/lawyer/manage-legal-profile",
        },
        {
            name: "Add Service",
            icon: FaFolderOpen,
            href: "/dashboard/lawyer/add-service",
        },
        // {
        //     name: "Reviews",
        //     icon: FaStar,
        //     href: "/dashboard/lawyer/reviews",
        // },
        // {
        //     name: "Settings",
        //     icon: FaCog,
        //     href: "/dashboard/lawyer/settings",
        // },
    ];
    const ClientMenus = [
        {
            name: "Hiring History ",
            icon: FaCalendarAlt,
            href: "/dashboard/client/hiring-history ",
        },
        {
            name: "Update Profile",
            icon: FaCog,
            href: "/dashboard/client/update-profile",
        },
        {
            name: "Comments",
            icon: FaUserTie,
            href: "/dashboard/client/comments",
        },
    ];
    const AdminMenus = [
        {
            name: "Manage Users",
            icon: FaUserTie,
            href: "/dashboard/admin/manage-users ",
        },
        {
            name: "All Transactions ",
            icon: FaCalendarAlt,
            href: "/dashboard/admin/all-transactions ",
        },
        {
            name: "Hiring History ",
            icon: FaFolderOpen,
            href: "/dashboard/admin/analytics",
        },
    ];
    const menus =
        user?.role === "admin"
            ? AdminMenus
            : user?.role === "lawyer"
              ? LawyerMenus
              : ClientMenus;
    const pathname = usePathname();

    const [open, setOpen] = useState(true);

    return (
        <motion.aside
            animate={{
                width: open ? 280 : 90,
            }}
            transition={{
                duration: 0.35,
            }}
            className="min-h-screen bg-[#0F172A] text-white border-r border-slate-700 flex flex-col justify-between"
        >
            <div>
                {/* Logo */}

                <div className="p-6 flex justify-between items-center">
                    <motion.div layout className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center">
                            <FaBalanceScale size={22} />
                        </div>

                        {open && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                <h2 className="font-bold text-xl">LegalPro</h2>

                                <p className="text-xs text-slate-400">
                                    Lawyer Dashboard
                                </p>
                            </motion.div>
                        )}
                    </motion.div>

                    <button onClick={() => setOpen(!open)} className="text-xl">
                        <FaBars />
                    </button>
                </div>

                {/* Profile */}

                <div className="px-5 mb-8">
                    <motion.div
                        layout
                        className="bg-slate-800 rounded-2xl p-4 flex items-center gap-3"
                    >
                        <Image
                            width={56}
                            height={56}
                            alt={user?.name || "avatar"}
                            src={user?.image || "https://i.pravatar.cc/100"}
                            className="w-14 h-14 rounded-full object-cover"
                        />

                        {open && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                <h3 className="font-semibold">{user?.name}</h3>

                                <p className="text-xs text-indigo-300">
                                    Senior Lawyer
                                </p>
                            </motion.div>
                        )}
                    </motion.div>
                </div>

                {/* Menu */}

                <div className="space-y-2 px-4">
                    {menus.map((item) => {
                        const Icon = item.icon;

                        const active = pathname === item.href;

                        return (
                            <Link key={item.href} href={item.href}>
                                <motion.div
                                    whileHover={{
                                        x: 6,
                                    }}
                                    whileTap={{
                                        scale: 0.97,
                                    }}
                                    className={`flex items-center gap-4 rounded-xl p-4 transition

                  ${active ? "bg-indigo-600" : "hover:bg-slate-800"}`}
                                >
                                    <Icon size={20} />

                                    {open && (
                                        <motion.span
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                        >
                                            {item.name}
                                        </motion.span>
                                    )}
                                </motion.div>
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* Logout */}

            <div className="p-5 space-y-3">
                <Button className="w-full rounded-lg p-6 gap-7">
                    <Link
                        href={"/"}
                        className="flex items-center justify-between gap-7"
                    >
                        <FaArrowLeftLong className="size-4" />
                        Go Home
                    </Link>
                </Button>

                <div onClick={handleLogOut}>
                    <motion.button
                        whileHover={{
                            scale: 1.02,
                        }}
                        whileTap={{
                            scale: 0.95,
                        }}
                        className="w-full bg-red-600 hover:bg-red-700 rounded-xl p-4 flex items-center gap-4 justify-center"
                    >
                        <FaSignOutAlt />

                        {open && "Logout"}
                    </motion.button>
                </div>
            </div>
        </motion.aside>
    );
}
