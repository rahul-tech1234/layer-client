import React from "react";
import { AlertDialog, Button } from "@heroui/react";
import toast from "react-hot-toast";
import { userDelete } from "@/lib/api/admin/action";

const DltUserModal = ({ user }) => {
    console.log(user._id, "user");
    const handleDeleteUser = async (id) => {
        const dlt = await userDelete(id);
        console.log(dlt);
        if (dlt.deletedCount > 0) {
            toast.success("Delete successfull");
        }
    };
    return (
        <div>
            <AlertDialog>
                <Button className="rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-600">
                    Delete
                </Button>

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
                                    <strong>{user?.name}</strong> and all of its
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
                                    onClick={() => handleDeleteUser(user._id)}
                                >
                                    Delete Project
                                </Button>
                            </AlertDialog.Footer>
                        </AlertDialog.Dialog>
                    </AlertDialog.Container>
                </AlertDialog.Backdrop>
            </AlertDialog>
        </div>
    );
};

export default DltUserModal;
