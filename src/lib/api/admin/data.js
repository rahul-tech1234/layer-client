import { baseUrl } from "../baseUrl";

export const allUser = async () => {
    const users = await fetch(`${baseUrl}api/find/allusers`);
    const data = await users.json();
    return data;
};
export const allUserTransaction = async () => {
    const res = await fetch(`${baseUrl}api/all-transactions`);
    const data = await res.json();
    return data;
};
export const getAnalytics = async () => {
    const res = await fetch(`${baseUrl}api/admin/analytics`);
    return await res.json();
};
