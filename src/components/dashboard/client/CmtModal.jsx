"use client";

import { cmtEdit } from "@/lib/api/client/action";
import { Button, Modal } from "@heroui/react";
import { useState } from "react";
import toast from "react-hot-toast";

export function EditCommentModal({ comment }) {
    const handleEdit = async (id) => {
        const cmtObj = {
            cmt: cmtValue,
        };
        // console.log(cmtObj);

        const cmt = await cmtEdit(id, cmtObj);
        console.log(cmt);
        if (cmt.modifiedCount > 0) {
            toast.success("Comment update success");
        }
    };
    const [cmtValue, setCmtValue] = useState(comment?.cmt);
    return (
        <Modal>
            <Button
                variant="secondary"
                className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
            >
                Edit
            </Button>
            <Modal.Backdrop>
                <Modal.Container>
                    <Modal.Dialog className="sm:max-w-[360px]">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Heading>Edit Your Comment</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body>
                            <textarea
                                onChange={(e) => setCmtValue(e.target.value)}
                                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                rows={5}
                                placeholder="Write your comment..."
                                defaultValue={cmtValue}
                            />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button
                                className="w-full"
                                slot="close"
                                onClick={() => handleEdit(comment?._id)}
                            >
                                Submit
                            </Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}
