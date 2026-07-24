"use client";

import { Button, Input } from "@heroui/react";
import { FaEnvelope, FaPaperPlane } from "react-icons/fa";

export default function Subscription() {
    const handleUpdatePrimium = async () => {
        
        const res = await fetch("/api/checkout_sessions", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({type: "subscription"}),
        });
        const data = await res.json();
        if (data?.url) {
            window.location.href=data.url;
        }
        console.log("url", data);
    };
    return (
        <section className="my-20">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary-600 via-primary-500 to-indigo-600 px-6 py-14 text-white md:px-12">
                {/* Background Blur */}
                <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl"></div>
                <div className="absolute -bottom-10 -right-10 h-52 w-52 rounded-full bg-white/10 blur-3xl"></div>

                <div className="relative mx-auto max-w-3xl text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                        <FaEnvelope size={28} />
                    </div>

                    <h2 className="mt-6 text-3xl font-bold">
                        Stay Updated with Legal Insights
                    </h2>

                    <p className="mt-3 text-white/80">
                        Subscribe to receive legal tips, new lawyer updates, and
                        exclusive consultation offers directly in your inbox.
                    </p>

                    <form className="mx-auto mt-8 flex max-w-xl flex-col gap-4 sm:flex-row">
                        <Input
                            type="email"
                            placeholder="Enter your email"
                            radius="full"
                            size="lg"
                            className="flex-1"
                        />

                        <Button
                            onClick={handleUpdatePrimium}
                            color="default"
                            radius="full"
                            size="lg"
                            startContent={<FaPaperPlane />}
                            className="font-semibold"
                        >
                            Subscribe
                        </Button>
                    </form>

                    <p className="mt-4 text-sm text-white/70">
                        No spam. Unsubscribe anytime.
                    </p>
                </div>
            </div>
        </section>
    );
}
