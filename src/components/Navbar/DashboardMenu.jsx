"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
//import { FiChevronDown, FiUser, FiLogOut } from "react-icons/fi";
import { FiUser, FiChevronDown, FiLogOut } from "react-icons/fi";
import { MdDashboard } from "react-icons/md";

const DashboardMenu = ({ role = "client", onLogout }) => {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);
    const lawyerDashboardLinks = [
        {
            title: "My Profile",
            href: "/dashboard/lawyer/profile",
        },
        {
            title: "Manage Legal Profile",
            href: "/dashboard/lawyer/manage-legal-profile",
        },
        {
            title: "Appointments",
            href: "/dashboard/lawyer/appointments",
        },
    ];
    const clientDashboardLinks = [
        {
            title: "My Profile",
            href: "/dashboard/client/profile",
        },
        {
            title: "My Bookings",
            href: "/dashboard/client/bookings",
        },
        {
            title: "Favorites",
            href: "/dashboard/client/favorites",
        },
    ];
    const dashboardLinks =
        role === "lawyer" ? lawyerDashboardLinks : clientDashboardLinks;

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            {/* Button */}
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm transition hover:border-blue-500 hover:text-blue-600"
            >
                <MdDashboard className="text-lg" />
                Dashboard
                <FiChevronDown
                    className={`transition-transform duration-300 ${
                        open ? "rotate-180" : ""
                    }`}
                />
            </button>

            {/* Dropdown */}
            {open && (
                <div className="absolute right-0 mt-3 w-64 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl z-50">
                    {/* Header */}
                    <div className="border-b bg-blue-50 px-5 py-4">
                        <p className="font-semibold text-gray-800">
                            {role === "lawyer"
                                ? "Lawyer Dashboard"
                                : "Client Dashboard"}
                        </p>

                        <p className="text-xs text-gray-500">
                            Manage your account
                        </p>
                    </div>

                    {/* Links */}
                    <div className="py-2">
                        {dashboardLinks.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className="flex items-center gap-3 px-5 py-3 text-sm text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
                            >
                                <FiUser />

                                {item.title}
                            </Link>
                        ))}
                    </div>

                    {/* Logout */}
                    <div className="border-t">
                        <button
                            onClick={onLogout}
                            className="flex w-full items-center gap-3 px-5 py-3 text-sm font-medium text-red-600 transition hover:bg-red-50"
                        >
                            <FiLogOut />
                            Logout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DashboardMenu;
