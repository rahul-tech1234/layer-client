"use server";
import { baseUrl } from "./baseUrl";
import { getTokenServer } from "./getTokenServer";
export const serverMutation = async (path, method, data) => {
    //  console.log("serverMutation called");
    const token = await getTokenServer();
   // console.log("Token", token);
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
    const token = await getTokenServer();
   // console.log("Token", token);
    const res = await fetch(`${baseUrl}${path}`, {
        method,
        headers: {
            authorization: `Bearer ${token}`,
        },
    });
    return await res.json();
};
