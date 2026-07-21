"use client";

import { deleteService } from "@/lib/api/lawyer/action";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FiTrash2 } from "react-icons/fi";

export function Delete({ service }) {
    console.log("id:", service?._id);
    const router = useRouter();
    const handleDelete = async () => {

        const dltSer = await deleteService(service?._id);
        console.log(dltSer);
        if (dltSer?.deleteCount > 0) {
            router.refresh();
            toast.success("Service deleted successfull");
        }
    };
    return (
        <AlertDialog>
            <Button
                isIconOnly
                size="sm"
                radius="full"
                color="danger"
                className="text-red-400"
                variant="flat"
            >
                <FiTrash2 size={16} />
            </Button>
            {/* <Button variant="danger">
                <FiTrash2 size={16} />
            </Button> */}
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px]">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>
                                Delete service permanently?
                            </AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently delete{" "}
                                <strong>{service?.title}</strong> and all of its
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button
                                slot="close"
                                variant="danger"
                                onClick={handleDelete}
                            >
                                Delete Project
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}
