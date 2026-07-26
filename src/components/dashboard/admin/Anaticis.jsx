"use client";

import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    PieChart,
    Pie,
    Cell,
} from "recharts";
import { Card } from "@heroui/react";
import CountUp from "react-countup";
import { Users, BriefcaseBusiness, Handshake, DollarSign } from "lucide-react";
import Analitics from "@/app/(dashboard)/dashboard/admin/analytics/page";

export default function AnalyticsDashboard({ analytics }) {
    console.log("analytics", analytics);
    console.log("totalUsers", analytics?.totalUsers);
    console.log("totalLawyers", analytics?.totalLawyers);
    console.log("totalClients", analytics?.totalClients);
    console.log("totalRevenue", analytics?.totalRevenue);

    const overview = [
        {
            title: "Users",
            value: analytics?.totalUsers,
            icon: <Users size={28} />,
            color: "bg-blue-500",
        },
        {
            title: "Lawyers",
            value: analytics?.totalLawyers,
            icon: <BriefcaseBusiness size={28} />,
            color: "bg-green-500",
        },
        {
            title: "Clent",
            value: analytics?.totalClients,
            icon: <Handshake size={28} />,
            color: "bg-purple-500",
        },
        {
            title: "Revenue",
            value: analytics?.totalRevenue,
            icon: <DollarSign size={28} />,
            color: "bg-orange-500",
        },
    ];

    const chartData = [
        { name: "Users", value: analytics?.totalUsers },
        { name: "Lawyers", value: analytics?.totalLawyers },
        { name: "Clients", value: analytics?.totalClients },
    ];

    const revenueData = [
        {
            name: "Revenue",
            amount: analytics?.totalRevenue,
        },
    ];

    const colors = ["#3B82F6", "#22C55E", "#A855F7"];

    return (
        <div className="space-y-8">
            {/* Cards */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
                {overview.map((item) => (
                    <Card key={item.title} className="p-6 shadow-lg">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-500">{item.title}</p>

                                <h2 className="mt-2 text-4xl font-bold">
                                    <CountUp end={item.value} duration={2} />
                                </h2>
                            </div>

                            <div
                                className={`${item.color} rounded-full p-4 text-white`}
                            >
                                {item.icon}
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <Card className="p-5 shadow-lg">
                    <h2 className="mb-5 text-xl font-semibold">
                        System Overview
                    </h2>

                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={chartData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar
                                dataKey="value"
                                radius={[8, 8, 0, 0]}
                                fill="#2563EB"
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </Card>

                <Card className="p-5 shadow-lg">
                    <h2 className="mb-5 text-xl font-semibold">Distribution</h2>

                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={chartData}
                                dataKey="value"
                                outerRadius={100}
                                label
                            >
                                {chartData.map((entry, index) => (
                                    <Cell key={index} fill={colors[index]} />
                                ))}
                            </Pie>

                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </Card>

                <Card className="p-5 shadow-lg lg:col-span-2">
                    <h2 className="mb-5 text-xl font-semibold">Revenue</h2>

                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={revenueData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar
                                dataKey="amount"
                                fill="#F97316"
                                radius={[8, 8, 0, 0]}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </Card>
            </div>
        </div>
    );
}
