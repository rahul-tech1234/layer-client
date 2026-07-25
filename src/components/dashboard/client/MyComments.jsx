"use client";

import { cmtDelete } from "@/lib/api/client/action";
import toast from "react-hot-toast";
import { EditCommentModal } from "./CmtModal";

export default function MyComments({ comments }) {
    const handleDelete = async (id) => {
        // console.log(id, "del");
        const cmt = await cmtDelete(id);
        //console.log("cmt:", cmt);
        if (cmt?.modifiedCount > 0) {
            toast.success("Delete comment success");
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">My Comments</h1>

            <div className="space-y-5">
                {comments.map((comment) => (
                    <div
                        key={comment._id}
                        className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition p-6"
                    >
                        {/* Header */}
                        <div className="flex justify-between items-start">
                            <div>
                                <h2 className="text-xl font-semibold text-gray-800">
                                    {comment.lawyerName}
                                </h2>

                                <p className="text-sm text-gray-500">
                                    {comment.category}
                                </p>
                            </div>

                            <div className="text-yellow-500 text-lg">
                                ⭐ ⭐ ⭐ ⭐
                            </div>
                        </div>

                        {/* Comment */}
                        <p className="mt-4 text-gray-700 leading-7">
                            {comment.cmt}
                        </p>

                        {/* Footer */}
                        <div className="mt-6 flex items-center justify-between">
                            <span className="text-sm text-gray-500">
                                {new Date(comment.addDate).toLocaleDateString()}
                            </span>

                            <div className="flex gap-3">
                                <span>
                                    <EditCommentModal comment={comment} />
                                </span>

                                <button
                                    onClick={() => handleDelete(comment?._id)}
                                    className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
