"use client";

import {
    hireingStatusUpdateAccpted,
    hireingStatusUpdateRejectes,
} from "@/lib/api/lawyer/action";
import { Chip, Button } from "@heroui/react";
import { useState } from "react";

export default function HiringHistoryTable({ hirings }) {
    const [state, setState] = useState("pending");
    //console.log(hirings);
    const handleStatusAccept = async (id) => {
        //console.log("-id", id);
        const data = {
            status: "accepted",
            paymentStatus: "paid",
        };
        const res = await hireingStatusUpdateAccpted(id, data);
        console.log(res);
    };
    const handleStatusReject = async (id) => {
        //console.log("-id", id);
        const data = {
            status: "rejected",
            paymentStatus: "cancel",
        };
        const res = await hireingStatusUpdateAccpted(id, data);
        console.log(res);
    };

    return (
        <div className="rounded-2xl border border-default-200 bg-background p-6">
            <h2 className="mb-6 text-2xl font-bold">Hiring History</h2>

            <table className="w-full border-collapse">
                <thead>
                    <tr className="border-b">
                        <th className="p-3 text-left">Client</th>
                        <th className="p-3 text-left">Service</th>
                        <th className="p-3 text-left">Fee</th>
                        <th className="p-3 text-left">Date</th>
                        <th className="p-3 text-left">Satus</th>
                        <th className="p-3 text-left">Action</th>
                    </tr>
                </thead>

                <tbody>
                    {hirings.map((item, index) => {
                        const id = item?._id;
                        const formattedDate = new Date(
                            item.hiringDate,
                        ).toLocaleString("en-GB", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                            hour12: true,
                        });
                        return (
                            <tr key={index} className="border-b">
                                <td className="p-3">{item.clientEmail}</td>
                                <td className="p-3">{item.serviceTitle}</td>
                                <td className="p-3">${item.consultationFee}</td>
                                <td className="p-3">{formattedDate}</td>
                                <td className="p-3">
                                    <Chip
                                        color={
                                            state === "accepted"
                                                ? "success"
                                                : state === "rejected"
                                                  ? "danger"
                                                  : "warning"
                                        }
                                        className="text-[16px]"
                                    >
                                        {state === "accepted"
                                            ? "Accept"
                                            : state == "rejected"
                                              ? "Reject"
                                              : "Pending"}
                                    </Chip>
                                </td>
                                <td className="p-3">
                                    <div className="flex items-center gap-15 ">
                                        <Button
                                            isIconOnly
                                            size="sm"
                                            variant="light"
                                            className="rounded-md"
                                        >
                                            <Chip
                                                color="success"
                                                className="text-[16px] "
                                                onClick={() =>
                                                    handleStatusAccept(id)
                                                }
                                            >
                                                Accept
                                            </Chip>
                                        </Button>
                                        <Button
                                            isIconOnly
                                            size="sm"
                                            variant="light"
                                        >
                                            <Chip
                                                onClick={() =>
                                                    handleStatusReject(id)
                                                }
                                                color="danger"
                                                className="text-[16px]"
                                            >
                                                Cancel
                                            </Chip>
                                        </Button>
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
