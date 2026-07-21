"use client";

import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { BiEditAlt } from "react-icons/bi";
BiEditAlt;
export function EditModal({ service }) {
    const catagories = [
        "Criminal Law",
        "Family Law",
        "Property Law",
        "Immigration Law",
        "Civil Law",
        "Cyber Law",
        "Tax Law",
    ];
    return (
        <Modal>
            <Button variant="secondary">
                <BiEditAlt />
            </Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <Envelope className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>Contact Us</Modal.Heading>
                            <p className="mt-1.5 text-sm leading-5 text-muted">
                                Fill out the form below and we&#39;ll get back
                                to you. The modal adapts automatically when the
                                keyboard appears on mobile.
                            </p>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form className="flex flex-col gap-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        {/* Title */}
                                        <TextField
                                            className="w-full"
                                            name="name"
                                            type="text"
                                            id="title"
                                            variant="secondary"
                                        >
                                            <Label>Title</Label>
                                            <Input placeholder="Service title" />
                                        </TextField>

                                        {/* Category */}
                                        <select
                                            // {...register("category", {
                                            //     required:
                                            //         "Select  service category",
                                            // })}
                                            name="category"
                                            id="category"
                                            required
                                            className="w-full bg-[#2A2A2A] border border-gray-700 rounded-lg px-4 py-3 text-white"
                                        >
                                            {catagories.map((cat) => (
                                                <option key={cat}>{cat}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        {/* Email readOnly */}
                                        <TextField
                                            className="w-full"
                                            name="email"
                                            id="email"
                                            type="email"
                                            variant="secondary"
                                        >
                                            <Label>Email</Label>
                                            <Input
                                                value={service?.lawyerEmail}
                                                readOnly
                                            />
                                        </TextField>
                                        {/* conFee */}
                                        <TextField
                                            className="w-full"
                                            id="conFee"
                                            type="number"
                                            variant="secondary"
                                        >
                                            <Label>Consultation Fee</Label>
                                            <Input placeholder="Consultation fee" />
                                        </TextField>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2">
                                        {/*  Consultation Type */}
                                        <TextField
                                            className="w-full"
                                            id="serviceName"
                                            variant="secondary"
                                        >
                                            <Label>Consultation Type</Label>
                                            <Input placeholder="Consultation Type" />
                                        </TextField>
                                        {/* Location */}
                                        <TextField
                                            className="w-full"
                                            id="location"
                                            variant="secondary"
                                        >
                                            <Label>Location</Label>
                                            <Input placeholder="Location" />
                                        </TextField>
                                    </div>
                                    {/* Message area */}
                                    <div className="w-full">
                                        <TextField
                                            className="w-full"
                                            name="message"
                                            variant="secondary"
                                        >
                                            <Label>Message</Label>
                                            <Input placeholder="Enter your message" />
                                        </TextField>
                                    </div>
                                </form>
                            </Surface>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button slot="close" variant="secondary">
                                Cancel
                            </Button>
                            <Button slot="close">Send Message</Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}
