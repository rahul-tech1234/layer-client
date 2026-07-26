"use server";
import { baseUrl } from "./baseUrl";
import { getTokenServer } from "./getTokenServer";
export const serverMutation = async (path, method, data) => {
    const token = await getTokenServer();
    const res = await fetch(`${baseUrl}${path}`, {
        method,
        headers: {
            "content-type": "application/json",
            authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
    });
    return await res.json();
};
export const serverDltMutation = async (path, method) => {
    const res = await fetch(`${baseUrl}${path}`, {
        method,
    });
    return await res.json();
};
