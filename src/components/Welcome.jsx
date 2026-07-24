"use client";

import { Card, Button, Chip } from "@heroui/react";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function SubscriptionWelcome() {
    return (
        <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-zinc-950 px-6">
            {/* Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#d4af3720,transparent_60%)]" />
            <div className="absolute -top-40 right-0 h-80 w-80 rounded-full bg-warning/10 blur-3xl" />
            <div className="absolute -bottom-40 left-0 h-80 w-80 rounded-full bg-warning/10 blur-3xl" />

            <Card className="relative w-full max-w-2xl rounded-3xl border border-warning/20 bg-zinc-900/80 p-10 backdrop-blur-xl">
                <div className="flex flex-col items-center text-center">
                    <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-warning/10">
                        <CheckCircle2 className="h-10 w-10 text-warning" />
                    </div>

                    <Chip color="warning" variant="flat">
                        Subscription Active
                    </Chip>

                    <h1 className="mt-6 text-4xl font-bold text-white md:text-5xl">
                        Welcome to Your
                        <span className="text-warning"> Legal Membership</span>
                    </h1>

                    <p className="mt-5 max-w-xl text-lg text-zinc-400">
                        Your subscription has been successfully activated. You
                        now have access to premium legal consultations, priority
                        appointments, document reviews, and exclusive member
                        services.
                    </p>

                    <div className="mt-10 grid w-full gap-4 rounded-2xl border border-zinc-800 bg-black/30 p-6 md:grid-cols-2">
                        <div className="flex items-center gap-3">
                            <CheckCircle2 className="text-warning" size={20} />
                            <span className="text-zinc-300">
                                Unlimited Consultations
                            </span>
                        </div>

                        <div className="flex items-center gap-3">
                            <CheckCircle2 className="text-warning" size={20} />
                            <span className="text-zinc-300">
                                Priority Appointments
                            </span>
                        </div>

                        <div className="flex items-center gap-3">
                            <CheckCircle2 className="text-warning" size={20} />
                            <span className="text-zinc-300">
                                Contract Reviews
                            </span>
                        </div>

                        <div className="flex items-center gap-3">
                            <CheckCircle2 className="text-warning" size={20} />
                            <span className="text-zinc-300">
                                Premium Support
                            </span>
                        </div>
                    </div>

                    <Button
                        color="warning"
                        size="lg"
                        endContent={<ArrowRight size={18} />}
                        className="mt-10 px-10 font-semibold"
                    >
                        Go to Dashboard
                    </Button>
                </div>
            </Card>
        </section>
    );
}
