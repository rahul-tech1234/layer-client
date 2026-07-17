"use client";

import { useSession } from "@/lib/auth-client";
import { useState } from "react";
import { addUserRole } from "../AddRole";

export default function Role() {
    const { data: session } = useSession();
    const user = session?.user;
    //console.log(user,'user');
    const email = user?.email;
    console.log(email, "email");
    //console.log("_id", _id);
    const handleRole = async (e) => {
        e.preventDefault();
        const role = e.target.role.value;
        const res = await fetch(`http://localhost:5000/api/user/${email}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ role }),
        });
        const updateUser = await res.json();
        console.log(updateUser);
    };

    const [role, setRole] = useState("client");
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <form
                className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg"
                onSubmit={handleRole}
            >
                <h2 className="text-3xl font-bold text-center mb-2">
                    Choose Your Role
                </h2>

                <p className="text-center text-gray-500 mb-8">
                    Select how you want to use Layer.
                </p>

                <div className="space-y-4">
                    <div className="space-y-4">
                        <label
                            className={`flex items-center gap-4 border rounded-xl p-4 cursor-pointer transition ${
                                role === "client"
                                    ? "border-purple-600 bg-purple-50"
                                    : "border-gray-300 hover:border-purple-600"
                            }`}
                        >
                            <input
                                type="radio"
                                name="role"
                                value="client"
                                checked={role === "client"}
                                onChange={(e) => setRole(e.target.value)}
                                className="accent-purple-600"
                            />

                            <div>
                                <h3 className="font-semibold">Client</h3>
                                <p className="text-sm text-gray-500">
                                    Hire skilled professionals for your
                                    projects.
                                </p>
                            </div>
                        </label>

                        <label
                            className={`flex items-center gap-4 border rounded-xl p-4 cursor-pointer transition ${
                                role === "lawyer"
                                    ? "border-purple-600 bg-purple-50"
                                    : "border-gray-300 hover:border-purple-600"
                            }`}
                        >
                            <input
                                type="radio"
                                name="role"
                                value="lawyer"
                                checked={role === "lawyer"}
                                onChange={(e) => setRole(e.target.value)}
                                className="accent-purple-600"
                            />

                            <div>
                                <h3 className="font-semibold">Lawyer</h3>
                                <p className="text-sm text-gray-500">
                                    Find clients and offer your professional
                                    legal services.
                                </p>
                            </div>
                        </label>
                    </div>
                </div>

                <button
                    type="submit"
                    className="mt-8 w-full bg-purple-600 text-white py-3 rounded-xl hover:bg-purple-700 transition"
                >
                    Continue
                </button>
            </form>
        </div>
    );
}
