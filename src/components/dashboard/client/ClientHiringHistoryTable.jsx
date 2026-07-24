"use client";

import { Button, Chip } from "@heroui/react";
import { PayModal } from "./PayModal";

// const hiringHistory = [
//     {
//         id: 1,
//         lawyerName: "John Smith",
//         specialization: "Criminal Law",
//         fee: 100,
//         hiringDate: "24 Jul 2026",
//         status: "pending",
//     },
//     {
//         id: 2,
//         lawyerName: "Sarah Lee",
//         specialization: "Family Law",
//         fee: 80,
//         hiringDate: "23 Jul 2026",
//         status: "accepted",
//     },
//     {
//         id: 3,
//         lawyerName: "David Roy",
//         specialization: "Property Law",
//         fee: 120,
//         hiringDate: "22 Jul 2026",
//         status: "rejected",
//     },
// ];

export default function ClientHiringHistoryTable({ hiringHistory }) {
    return (
        <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow">
            <table className="min-w-full">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold">
                            Lawyer Email
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold">
                            Specialization
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold">
                            Fee
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold">
                            Hiring Date
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold">
                            Status
                        </th>
                        <th className="px-6 py-4 text-center text-sm font-semibold">
                            Action
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {hiringHistory.map((hire) => {
                        const formattedDate = new Date(
                            hire.hiringDate,
                        ).toLocaleString("en-GB", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                            hour12: true,
                        });
                        return (
                            <tr
                                key={hire._id}
                                className="border-t transition hover:bg-gray-50"
                            >
                                <td className="px-6 py-4 font-medium">
                                    {hire.serviceEmail}
                                </td>

                                <td className="px-6 py-4">
                                    {hire.specialization}
                                </td>

                                <td className="px-6 py-4 font-semibold text-primary">
                                    ${hire.consultationFee}
                                </td>

                                <td className="px-6 py-4">{formattedDate}</td>

                                <td className="px-6 py-4">
                                    {hire.status === "pending" && (
                                        <Chip color="warning" variant="flat">
                                            Pending
                                        </Chip>
                                    )}

                                    {hire.status === "accepted" && (
                                        <Chip color="success" variant="flat">
                                            Accepted
                                        </Chip>
                                    )}

                                    {hire.status === "rejected" && (
                                        <Chip color="danger" variant="flat">
                                            Rejected
                                        </Chip>
                                    )}
                                </td>

                                <td className="px-6 py-4 text-center">
                                    {hire.status === "accepted" ? (
                                        <span>
                                            <PayModal hire={hire} />
                                        </span>
                                    ) : hire.status === "pending" ? (
                                        <Button
                                            size="sm"
                                            variant="flat"
                                            isDisabled
                                        >
                                            Waiting
                                        </Button>
                                    ) : (
                                        <span className="text-gray-400">—</span>
                                    )}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
