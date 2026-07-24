"use client";

import Link from "next/link";
import { Button, Card } from "@heroui/react";
import {
    FaCheckCircle,
    FaArrowRight,
    FaBalanceScale,
    FaMoneyBillWave,
    FaCalendarAlt,
} from "react-icons/fa";

export default function PaymentSuccess() {
    // Replace these with your real payment data
    const payment = {
        lawyer: "John Anderson",
        amount: 120,
        status: "Paid",
        date: new Date().toLocaleDateString(),
        
    };

    return (
        <section className="min-h-screen bg-background flex items-center justify-center px-4 py-10">
            <Card className="w-full max-w-xl rounded-3xl border border-default-200 bg-background shadow-2xl">
                <div className="p-8">
                    {/* Success Icon */}
                    <div className="flex justify-center">
                        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-success-100 dark:bg-success-900/20">
                            <FaCheckCircle className="text-6xl text-success" />
                        </div>
                    </div>

                    {/* Heading */}
                    <div className="mt-6 text-center">
                        <span className="inline-block rounded-full bg-success-100 px-4 py-1 text-sm font-medium text-success dark:bg-success-900/20">
                            Payment Completed
                        </span>

                        <h1 className="mt-4 text-3xl font-bold text-foreground">
                            Payment Successful 🎉
                        </h1>

                        <p className="mt-3 text-sm text-default-500 leading-6">
                            Your payment has been received successfully. Your
                            lawyer has been notified and your consultation
                            request is now confirmed.
                        </p>
                    </div>

                    {/* Details */}
                    <div className="mt-8 rounded-2xl bg-default-100 dark:bg-default-50/5 p-5">
                        <h2 className="mb-5 text-lg font-semibold">
                            Payment Details
                        </h2>

                        <div className="space-y-5">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="rounded-xl bg-primary/10 p-2">
                                        <FaBalanceScale className="text-primary" />
                                    </div>
                                    <span className="text-default-500">
                                        Lawyer
                                    </span>
                                </div>

                                <span className="font-semibold">
                                    {payment.lawyer}
                                </span>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="rounded-xl bg-success/10 p-2">
                                        <FaMoneyBillWave className="text-success" />
                                    </div>
                                    <span className="text-default-500">
                                        Amount
                                    </span>
                                </div>

                                <span className="font-bold text-success">
                                    ${payment.amount}
                                </span>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="rounded-xl bg-warning/10 p-2">
                                        <FaCalendarAlt className="text-warning" />
                                    </div>
                                    <span className="text-default-500">
                                        Date
                                    </span>
                                </div>

                                <span className="font-medium">
                                    {payment.date}
                                </span>
                            </div>

                            <div className="flex items-center justify-between">
                                <span className="text-default-500">
                                    Payment Status
                                </span>

                                <span className="rounded-full bg-success-100 px-3 py-1 text-xs font-semibold text-success dark:bg-success-900/20">
                                    {payment.status}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Info */}
                    <div className="mt-6 rounded-2xl border border-success/20 bg-success/5 p-4">
                        <p className="text-center text-sm text-default-600">
                            Thank you for choosing our legal platform. Your
                            hiring request has been successfully submitted to
                            the lawyer. You can track its status from your
                            dashboard.
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <Button
                            as={Link}
                            href="/dashboard/user/hiring-history"
                            color="success"
                            radius="full"
                            className="flex-1 font-semibold"
                            endContent={<FaArrowRight />}
                        >
                            Hiring History
                        </Button>

                        <Button
                            as={Link}
                            href="/browse-lawyers"
                            variant="bordered"
                            radius="full"
                            className="flex-1"
                        >
                            Browse Lawyers
                        </Button>
                    </div>
                </div>
            </Card>
        </section>
    );
}
