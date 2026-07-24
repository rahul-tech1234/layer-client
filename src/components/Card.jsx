"use client";

import { Card, Avatar, Chip } from "@heroui/react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function LawyerCard({ lawyer }) {
    return (
        <Link href={`/lawyers/${lawyer._id}`}>
            {" "}
            <Card
                //isPressable
                //onPress={() => router.push(`/lawyers/${lawyer._id}`)}
                className="group relative overflow-hidden border border-default-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-xl"
            >
                {lawyer.busy && (
                    <Chip
                        color="danger"
                        size="sm"
                        className="absolute right-4 top-4"
                    >
                        Busy
                    </Chip>
                )}

                <div className="flex flex-col items-center text-center">
                    <Avatar
                        src={lawyer.photo}
                        name={lawyer.name}
                        className="h-20 w-20 text-xl"
                    />

                    <h2 className="mt-4 text-lg font-bold">{lawyer.name}</h2>

                    <p className="text-sm text-default-500">
                        {lawyer.specialization}
                    </p>

                    <div className="mt-5 flex w-full items-center justify-between rounded-xl bg-default-100 px-4 py-3">
                        <div>
                            <p className="text-xs text-default-500">
                                Hourly Rate
                            </p>

                            <h4 className="font-semibold">
                                ${lawyer.hourlyRate}/hr
                            </h4>
                        </div>

                        <FaArrowRight className="text-primary transition-transform group-hover:translate-x-1" />
                    </div>
                </div>
            </Card>
        </Link>
    );
}
