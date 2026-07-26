"use client";


import { Button, Modal } from "@heroui/react";
import Image from "next/image";

import {
    FaEnvelope,
    FaArrowRight,
    FaDollarSign,
    FaUserTie,
} from "react-icons/fa";

export function PayModal({ hire }) {
    const handlePayment = async () => {
        const paymentData = {
            type: "hire",
            consultationFee: hire?.consultationFee,
            serviceTitle: hire?.serviceTitle,
            clientEmail: hire?.clientEmail,
            clientId: hire?.clientId,
            lowyerEmail: hire.serviceEmail,
            serviceId: hire?.serviceId,
        };

        const res = await fetch("/api/checkout_sessions", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(paymentData),
        });

        const data = await res.json();
        console.log("metaData", data);
        console.log("transactionId", data.transactionId);
        //update lawyer status and hire paymentStatus

        if (data?.url) {
            window.location.href = data.url;

            return;
        }
        console.log("url", data);
    };

    return (
        <Modal>
            <Button variant="secondary">Pay Now</Button>
            <Modal.Backdrop>
                <Modal.Container>
                    <Modal.Dialog className="sm:max-w-[360px]">
                        <Modal.CloseTrigger />

                        <Modal.Body>
                            <div className="p-8 text-center">
                                <div className="flex justify-center flex-col">
                                    <Image
                                        src={
                                            hire.banner ||
                                            "https://i.pravatar.cc/300?img=12"
                                        }
                                        alt={hire.serviceName}
                                        width={100}
                                        height={100}
                                        className="rounded-full relative left-18"
                                    />
                                    <h2 className="mt-5 text-2xl font-bold">
                                        {hire?.serviceTitle}
                                    </h2>

                                    <p className="text-default-500">
                                        {hire.category}
                                    </p>
                                </div>
                                <div className="my-6 h-px bg-default-200" />

                                <div className="space-y-5">
                                    <div className="flex items-center gap-3">
                                        <FaUserTie className="text-primary" />

                                        <span>10+ Years Experience</span>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <FaEnvelope className="text-primary" />

                                        <span className="break-all">
                                            {hire.serviceEmail}
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <FaDollarSign className="text-primary" />

                                        <span>{hire.consultationFee}</span>
                                    </div>
                                </div>

                                <Button
                                    color="primary"
                                    onClick={handlePayment}
                                    radius="full"
                                    className="mt-8 w-full font-semibold"
                                    endContent={<FaArrowRight />}
                                >
                                    pay
                                </Button>
                            </div>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}
