"use client";

import { updateUserRole } from "@/lib/api/admin/action";
import { Rocket } from "@gravity-ui/icons";
import { Button, Modal } from "@heroui/react";
import { useState } from "react";
import toast from "react-hot-toast";

export function RoleModal({ user }) {
    const [isRole, setIsRole] = useState(user?.role);
    const userupdate = async (id) => {
        console.log("id", id);
        const data = {
            role: isRole,
        };
        const update = await updateUserRole(id, data);
        console.log(update);
        if (update.modifiedCount > 0) {
            toast.success("Update role success");
        }
    };
    return (
        <Modal>
            <Button variant="secondary" className={"rounded-md"}>
                Role Change
            </Button>
            <Modal.Backdrop>
                <Modal.Container>
                    <Modal.Dialog className="sm:max-w-[360px]">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-default text-foreground">
                                <Rocket className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>Change Uder Role</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="flex items-center justify-center gap-3">
                                <select
                                    onChange={(e) => setIsRole(e.target.value)}
                                    className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                    defaultValue={isRole}
                                >
                                    <option value="client">Client</option>
                                    <option value="lawyer">Lawyer</option>
                                </select>

                                <button
                                    className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow transition hover:bg-blue-700 active:scale-95"
                                    onClick={() => {
                                        userupdate(user._id);
                                    }}
                                >
                                    Update
                                </button>
                            </div>
                        </Modal.Body>

                        <Modal.Footer></Modal.Footer>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}
