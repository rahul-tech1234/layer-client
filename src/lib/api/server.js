import { baseUrl } from "./baseUrl";
export const serverMutation = async (path, method, data) => {
    console.log(`${baseUrl}${path}`);
    const res = await fetch(`${baseUrl}${path}`, {
        method,
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return await res.json();
};
