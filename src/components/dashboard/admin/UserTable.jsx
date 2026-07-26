"use client";

import DltUserModal from "./DltUserModal";
import { RoleModal } from "./RolerModal";

export default function ManageUsersTable({ users }) {
    // const users = [
    //     {
    //         _id: "6a700001a5a0d0d58efbec01",
    //         name: "Rahul Das",
    //         email: "rahul@gmail.com",
    //         image: "https://i.pravatar.cc/150?img=1",
    //         role: "client",
    //         createdAt: "2026-07-20T10:30:00.000Z",
    //     },
    //     {
    //         _id: "6a700001a5a0d0d58efbec02",
    //         name: "Sarah Ahmed",
    //         email: "sarah@gmail.com",
    //         image: "https://i.pravatar.cc/150?img=5",
    //         role: "lawyer",
    //         createdAt: "2026-07-21T08:15:00.000Z",
    //     },
    //     {
    //         _id: "6a700001a5a0d0d58efbec03",
    //         name: "John Smith",
    //         email: "john@gmail.com",
    //         image: "https://i.pravatar.cc/150?img=8",
    //         role: "client",
    //         createdAt: "2026-07-22T11:45:00.000Z",
    //     },
    //     {
    //         _id: "6a700001a5a0d0d58efbec04",
    //         name: "Emily Brown",
    //         email: "emily@gmail.com",
    //         image: "https://i.pravatar.cc/150?img=9",
    //         role: "lawyer",
    //         createdAt: "2026-07-23T14:20:00.000Z",
    //     },
    //     {
    //         _id: "6a700001a5a0d0d58efbec05",
    //         name: "David Wilson",
    //         email: "david@gmail.com",
    //         image: "https://i.pravatar.cc/150?img=12",
    //         role: "client",
    //         createdAt: "2026-07-24T09:10:00.000Z",
    //     },
    //     {
    //         _id: "6a700001a5a0d0d58efbec06",
    //         name: "Olivia Taylor",
    //         email: "olivia@gmail.com",
    //         image: "https://i.pravatar.cc/150?img=16",
    //         role: "lawyer",
    //         createdAt: "2026-07-24T16:30:00.000Z",
    //     },
    //     {
    //         _id: "6a700001a5a0d0d58efbec07",
    //         name: "Michael Lee",
    //         email: "michael@gmail.com",
    //         image: "https://i.pravatar.cc/150?img=18",
    //         role: "client",
    //         createdAt: "2026-07-25T07:50:00.000Z",
    //     },
    //     {
    //         _id: "6a700001a5a0d0d58efbec08",
    //         name: "Sophia Martin",
    //         email: "sophia@gmail.com",
    //         image: "https://i.pravatar.cc/150?img=21",
    //         role: "lawyer",
    //         createdAt: "2026-07-25T13:25:00.000Z",
    //     },
    //     {
    //         _id: "6a700001a5a0d0d58efbec09",
    //         name: "Daniel Clark",
    //         email: "daniel@gmail.com",
    //         image: "https://i.pravatar.cc/150?img=25",
    //         role: "client",
    //         createdAt: "2026-07-26T09:40:00.000Z",
    //     },
    //     {
    //         _id: "6a700001a5a0d0d58efbec10",
    //         name: "Admin User",
    //         email: "admin@gmail.com",
    //         image: "https://i.pravatar.cc/150?img=32",
    //         role: "admin",
    //         createdAt: "2026-07-19T06:00:00.000Z",
    //     },
    // ];
    return (
        <div className="overflow-x-auto rounded-xl border border-gray-200  shadow-md">
            <table className="w-full min-w-[800px] text-sm">
                <thead className="bg-blue-600 text-white">
                    <tr>
                        <th className="px-6 py-4 text-left font-semibold">
                            Name
                        </th>
                        <th className="px-6 py-4 text-left font-semibold">
                            Email
                        </th>
                        <th className="px-6 py-4 text-center font-semibold">
                            Role
                        </th>
                        <th className="px-6 py-4 text-center font-semibold">
                            Change Role
                        </th>
                        <th className="px-6 py-4 text-center font-semibold">
                            Delete
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((user) => (
                        <tr
                            key={user._id}
                            className="border-b transition hover:bg-gray-50"
                        >
                            <td className="px-6 py-4 font-medium text-gray-800">
                                {user.name}
                            </td>

                            <td className="px-6 py-4 text-gray-600">
                                {user.email}
                            </td>

                            <td className="px-6 py-4 text-center">
                                <span
                                    className={`rounded-full px-3 py-1 text-xs font-semibold text-white ${
                                        user.role === "admin"
                                            ? "bg-red-500"
                                            : user.role === "lawyer"
                                              ? "bg-green-500"
                                              : "bg-blue-500"
                                    }`}
                                >
                                    {user.role}
                                </span>
                            </td>

                            <td className="px-6 py-4 text-center">
                                <span>
                                    <RoleModal user={user} />
                                </span>
                            </td>

                            <td className="px-6 py-4 text-center">
                                <span>
                                    <DltUserModal user={user} />
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
