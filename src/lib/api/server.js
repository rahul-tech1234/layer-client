import { baseUrl } from "./baseUrl";
export const serverMutation = async (path, method, data) => {
    const res = await fetch(`${baseUrl}${path}`, {
        method,
        headers: {
            "content-type": "application/json",
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
